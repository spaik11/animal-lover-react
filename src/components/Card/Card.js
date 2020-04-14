import React from 'react';
import Button from '../Button/Button';

const card = ({ like, dislike, discard, animal: { image, name, type, description, animalId }}) => (
    <div className="ui card">
        <div className="image">
            <img src={image} alt="..." />
        </div>
        <div className="content">
            <a href="/" className="header">{name}</a>
            <div className="meta">
            <span className="type">{type.slice(0, 1).toUpperCase() + type.slice(1)}</span>
            </div>
            <div className="description">
                {description}
            </div>
        </div>
        <div className="extra content">
            <Button 
                className= "ui blue button"
                type= "submit"
                onClick={() => like(animalId)}>Like</Button>
            <Button
                className= "ui blue button"
                type= "submit"
                onClick={() => dislike(animalId)}>Dislike</Button>
            <Button
                className= "ui red button"
                type= "submit"
                onClick={() => discard(animalId)}>Discard</Button>
        </div>
    </div>
);

export default card;