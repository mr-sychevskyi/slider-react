import React from 'react';

const ButtonIcon = props => (
    <a className={`btn btn-arrow btn-arrow-${props.class}`} onClick={props.action}>
        <i className="arrow-icons material-icons">{props.type}</i>
    </a>
);

export default ButtonIcon;
