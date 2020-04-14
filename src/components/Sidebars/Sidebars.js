import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import './Sidebars.css';

const sideBars = ({ likes, dislikes, deleteLike, deleteDislike }) => (
    <div className='side'>
        <div>
            <h3>Likes</h3>
            <ul style={{listStyleType: 'none'}}>
                {likes.length > 0 ? likes.map(({image, name, animalId}) => {
                    return (
                        <Sidebar key={animalId}>
                            <div className='sidecard' onClick={() => deleteLike(animalId)}>
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
            <ul style={{listStyleType: 'none'}}>
            {dislikes.length > 0 ? dislikes.map(({image, name, animalId}) => {
                    return (
                        <Sidebar key={animalId}>
                            <div className='sidecard' onClick={() => deleteDislike(animalId)}>
                                <img src={image} alt="..." />
                                <p>{name}</p>
                            </div>
                        </Sidebar>
                    )
                }) : <h6>There are no dislikes right now</h6>}
            </ul>
        </div>
    </div>
);

export default sideBars;