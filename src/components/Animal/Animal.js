import React from 'react';
import Card from '../Card/Card';
import { searchIt } from '../../services/services';

const animal = (props) => {
    return props.animals.filter(searchIt(props.searchTerm)).map((animal) => {
        return (
                <Card 
                    key={animal.animalId}
                    animal={animal}
                    like={props.likeHandler}
                    dislike={props.dislikeHandler}
                    discard={props.discardHandler}
                />
        );
    });
}

export default animal;