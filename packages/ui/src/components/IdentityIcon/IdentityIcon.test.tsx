import * as React from 'react';
import { shallow } from 'enzyme';

import { IdentityIcon } from './IdentityIcon';
import styles from './styles';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });
const classes = Object.keys(styles).reduce(reduceClasses, {});

beforeEach(() => {
  const createElement: any = document.createElement.bind(document);
  document.createElement = (tagName) => {
    if (tagName === 'canvas') {
      return {
        toDataURL: jest.fn(() => ({})),
        getContext: jest.fn(() => ({
          fillStyle: null,
          fillRect: jest.fn(),
          drawImage: jest.fn(),
          getImageData: jest.fn(),
        })),
      };
    }
    return createElement(tagName);
  };
});

describe('IdentityIcon', () => {
  it('has default size 40', () => {
    const component = shallow(<IdentityIcon classes={classes} id="0x1234567890" />);
    expect(component.props().style.height).toEqual('40px');
  });
});
