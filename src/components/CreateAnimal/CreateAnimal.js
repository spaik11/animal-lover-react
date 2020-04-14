import React, { useState } from 'react';
import Button from '../Button/Button';

const CreateAnimal = (props) => {
    const [ animal, setAnimal ] = useState({
        image: '',
        type: '',
        name: '',
        description: '',
        animalId: ''
    })

    const submitHandler = (event) => {
        event.preventDefault();
        setAnimal(animal.animalId = new Date().getTime());

        props.handleCreateAnimalSubmit(event, animal);
        setAnimal({
            image: '',
            type: '',
            name: '',
            description: '',
            animalId: ''
        })
        event.target.reset();
    }

    return (
        <div>
        <h4 style={{ marginLeft: '50px' }}>Create Animal</h4>
        <form onSubmit={submitHandler} className="ui form add">
            <div className="equal width fields">
                <div className="field">
                    <label>Image</label>
                    <div className="ui fluid input">
                        <input 
                            type="text" 
                            placeholder="Image..." 
                            name="image" 
                            value={animal.image} 
                            onChange={event => {
                                const newImage = event.target.value;
                                setAnimal((prevInputState) => ({ 
                                image: newImage,
                                type: prevInputState.type,
                                name: prevInputState.name,
                                description: prevInputState.description
                                })
                            )}}/>
                    </div>
                </div>
            </div>
            <div className="equal width fields">
                <div className="field">
                    <label>Type</label>
                    <div className="ui fluid input">
                        <input 
                            type="text" 
                            placeholder="Type..." 
                            name="type" 
                            value={animal.type} 
                            onChange={event => {
                                const newType = event.target.value;
                                setAnimal((prevInputState) => ({ 
                                image: prevInputState.image,
                                type: newType,
                                name: prevInputState.name,
                                description: prevInputState.description
                                })
                            )}}/>
                    </div>
                </div>
            </div>
            <div className="equal width fields">
                <div className="field">
                    <label>Name</label>
                    <div className="ui fluid input">
                        <input 
                            type="text" 
                            placeholder="Name..." 
                            name="name" 
                            value={animal.name} 
                            onChange={event => {
                                const newName = event.target.value
                                setAnimal((prevInputState) => ({ 
                                image: prevInputState.image,
                                type: prevInputState.type,
                                name: newName,
                                description: prevInputState.description
                                })
                            )}}/>
                    </div>
                </div>
            </div>
            <div className="equal width fields">
                <div className="field">
                    <label>Description</label>
                    <div className="ui fluid input">
                        <input 
                            type="text" 
                            placeholder="Description..." 
                            name="description" 
                            value={animal.description} 
                            onChange={event => {
                                const newDesc = event.target.value;
                                setAnimal((prevInputState) => ({ 
                                image: prevInputState.image,
                                type: prevInputState.type,
                                name: prevInputState.name,
                                description: newDesc
                                })
                            )}}/>
                    </div>
                </div>
            </div>
            <div className="field">
                <Button 
                    className="ui button"
                    type="submit">Submit</Button>
            </div>
        </form>
        </div>
    );
};

export default CreateAnimal;