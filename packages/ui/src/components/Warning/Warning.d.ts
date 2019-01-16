import * as React from 'react';

export interface WarningProps {
    fullWidth?: boolean,
}

export interface Props {

}

declare const Warning: React.ComponentType<WarningProps>;
declare const WarningHeader: React.ComponentType<Props>;
declare const WarningText: React.ComponentType<Props>;

export {Warning, WarningHeader, WarningText};