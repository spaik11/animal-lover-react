import React from 'react';

const sidebar = (props) => {
    return (
        <li className="sidebar">
                {props.children}
        </li>
    )
}

export default sidebar;