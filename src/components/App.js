import React, { Component } from 'react';
import Sidebars from './Sidebars/Sidebars';
import Animal from './Animal/Animal';
import CreateAnimal from './CreateAnimal/CreateAnimal';
import SearchAnimal from './SearchAnimal/SearchAnimal';
import animals from '../data/data';
import './App.css';

class App extends Component {
    state = {
        animals: animals,
        likes: [],
        dislikes: [],
        searchTerm: ''
    }

    likeHandler = (id) => {
        let likeState = [...this.state.likes];
        let dislikeState = [...this.state.dislikes];

        if (likeState.some(obj => obj.animalId === id) || dislikeState.some(obj => obj.animalId === id)) {
            return;
        } else {
            likeState.push(this.state.animals.filter(({animalId}) => animalId === id)[0]);
            this.setState({ likes: likeState });
        };
    };
    
    dislikeHandler = (id) => {
        let likeState = [...this.state.likes];
        let dislikeState = [...this.state.dislikes];

        if (likeState.some(obj => obj.animalId === id) || dislikeState.some(obj => obj.animalId === id)) {
            return;
        } else {
            dislikeState.push(this.state.animals.filter(({animalId}) => animalId === id)[0]);
            this.setState({ dislikes: dislikeState });
        };
    };

    discardHandler = (id) => {
        const discardedAnimal = [...this.state.animals].filter(({animalId}) => animalId !== id);
        const updateLike = [...this.state.likes].filter(({animalId}) => animalId !== id);
        const updateDislike = [...this.state.dislikes].filter(({animalId}) => animalId !== id);

        this.setState({ animals: discardedAnimal, likes: updateLike, dislikes: updateDislike });
    };

    deleteLikeHandler = (id) => {
        const deletedAnimal = [...this.state.likes].filter(({animalId}) => animalId !== id);
        this.setState({ likes: deletedAnimal });
    };

    deleteDislikeHandler = (id) => {
        const deletedAnimal = [...this.state.dislikes].filter(({animalId}) => animalId !== id);
        this.setState({ dislikes: deletedAnimal });
    };

    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    };

    handleCreateAnimalSubmit = (event, animal) => {
        event.preventDefault();
        let updatedAnimals = [animal, ...this.state.animals];
        this.setState({ animals: updatedAnimals });
    };

    render() {
        return (
            <div>
                <h1 style={{paddingTop: '50px', paddingLeft: '50px', fontSize: '40px'}}>Animal Lover</h1>
                <hr />
                <div className='page'>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <CreateAnimal 
                            handleCreateAnimalSubmit={this.handleCreateAnimalSubmit}
                            />
                        <hr />
                        <SearchAnimal 
                            handleChange={this.handleChange}
                            searchTerm={this.searchTerm}/>
                    <div className='animal'>
                        <Animal 
                            animals={this.state.animals}
                            searchTerm={this.state.searchTerm}
                            likeHandler={this.likeHandler}
                            dislikeHandler={this.dislikeHandler}
                            discardHandler={this.discardHandler}/>
                    </div>
                    </div>
                        <Sidebars 
                            likes={this.state.likes}
                            dislikes={this.state.dislikes}
                            deleteLike={this.deleteLikeHandler}
                            deleteDislike={this.deleteDislikeHandler}
                            />
                </div>
            </div>
        );
    };
};

export default App;