/*
Copyright 2019 ETCDEV GmbH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import {AbstractJsonRpc} from "./JsonRpc";
import {JsonRpc} from "./JsonRpc";
import {Batch, DefaultBatch, RawBatchResponse} from "./Batch";

export type StatusListener = (status: boolean) => void;

/**
 * JsonRpc that delegates call to an underlying provider and tracks it's state. If underlying JsonRpc failed to
 * return response it gets market as invalid and is not going to be called until it will be fixed.
 */
export class RevalidatingJsonRpc extends AbstractJsonRpc {
  private _delegate: JsonRpc;
  private _listener: StatusListener;
  private _active: boolean = true;
  private _interval: number;
  private _timeoutId?: any;

  /**
   *
   * @param interval interval (in ms) to revalidate RPC
   * @param delegate
   */
  constructor(interval: number, delegate: JsonRpc) {
    super();
    if (interval <= 0) {
      throw new Error(`Interval cannot be less than 0: ${interval}`)
    }
    this._delegate = delegate;
    this._interval = interval;
  }

  start() {
    this._timeoutId = setInterval(this.revalidate.bind(this), this._interval);
  }

  stop() {
    if (this._timeoutId) {
      clearInterval(this._timeoutId);
      this._timeoutId = null;
    }
  }

  /**
   * Setup a listener for RPC status.
   *
   * Function `function(stat: boolean)` will be called each time status changed
   *
   * @param value
   */
  set listener(value: StatusListener) {
    this._listener = value;
  }

  get status(): boolean {
    return this._active;
  }

  private update(status: boolean) {
    let statusBefore = this._active;
    this._active = status;
    if (this._listener && statusBefore != status) {
      this._listener(this._active);
    }
  }

  /**
   * Calls revalidation of the underlying RPC provider
   */
  revalidate(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      let batch = new DefaultBatch();
      this.execute(batch, true)
        .then((_) => {
          this.update(true);
          resolve(true);
        }).catch((_) => {
          this.update(false);
          resolve(false);
        })
    })
  }

  execute(batch: Batch, force: boolean = false): Promise<RawBatchResponse> {
    if (!force && !this._active) {
      return Promise.reject(new Error('JsonRpc is inactive'));
    }
    return this._delegate.execute(batch)
      .catch((err) => {
        this.update(false);
        throw err;
      });
  }
}