import React from 'react';
import Sidebar from './Sidebar/Sidebar';

const sideBars = (props) => (
    <div>
        <div>
            <h3>Likes</h3>
            <ul>
                {props.likes.length > 0 ? props.likes.map(({image, name, animalId}) => {
                    return (
                        <Sidebar key={animalId}>
                            <div onClick={() => props.deleteLike(animalId)}>
                                <img src={image} alt="..." />
                                <p>{name}</p>
                            </div>
                        </Sidebar>
                    )
                }) : <h6>There are no likes right now</h6>}
            </ul>
        </div>
        <div>
            <h3>Dislikes</h3>
            <ul>
            {props.dislikes.length > 0 ? props.dislikes.map(({image, name, animalId}) => {
                    return (
                        <Sidebar key={animalId}>
                            <div onClick={() => props.deleteDislike(animalId)}>
                                <img src={image} alt="..." />
                                <p>{name}</p>
                            </div>
                        </Sidebar>
                    )
                }) : <h6>There are no dislikes right now</h6>}
            </ul>
        </div>
    </div>
)



export default sideBars;