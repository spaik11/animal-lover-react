import React from 'react';

const card = (props) => (
    <div className="ui card">
        <div className="image">
            <img src={props.image} alt="..." />
        </div>
        <div className="content">
            <a href="/" className="header">{props.name}</a>
            <div className="meta">
            <span className="type">{props.type.slice(0, 1).toUpperCase() + props.type.slice(1)}</span>
            </div>
            <div className="description">
                {props.description}
            </div>
        </div>
        <div className="extra content">
            <button onClick={props.like}>Like</button>
            <button onClick={props.dislike}>Dislike</button>
            <button onClick={props.discard}>Discard</button>
        </div>
    </div>
);

export default card;