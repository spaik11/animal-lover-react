import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import './Sidebars.css';

const sideBars = (props) => (
    <div className='side'>
        <div>
            <h3>Likes</h3>
            <ul style={{listStyleType: 'none'}}>
                {props.likes.length > 0 ? props.likes.map(({image, name, animalId}) => {
                    return (
                        <Sidebar key={animalId}>
                            <div className='sidecard' onClick={() => props.deleteLike(animalId)}>
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
            {props.dislikes.length > 0 ? props.dislikes.map(({image, name, animalId}) => {
                    return (
                        <Sidebar key={animalId}>
                            <div className='sidecard' onClick={() => props.deleteDislike(animalId)}>
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