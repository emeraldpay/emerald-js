import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const Delete = props => (
    <SvgIcon { ...props }>
        <path d="M9.5 8.793l3.646-3.647.708.708L10.207 9.5l3.647 3.646-.708.708L9.5 10.207l-3.646 3.647-.708-.708L8.793 9.5 5.146 5.854l.708-.708L9.5 8.793zM9.5 19a9.5 9.5 0 1 1 0-19 9.5 9.5 0 0 1 0 19zm0-1a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17z" fillRule="nonzero" fill="#000"/>
    </SvgIcon>
);

export default Delete;
