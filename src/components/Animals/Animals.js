import React, { Component } from 'react';
import Card from '../Card/Card';
import Sidebars from '../Sidebars/Sidebars';
import './Animals.css';


let animals = [
    { 
        image: './images/trex.jpg',
        type: 'dinosaur',
        name: 'Tyrannosaurus',
        description: 'Tyrannosaurus is a genus of coelurosaurian theropod dinosaur. The species Tyrannosaurus rex (rex meaning "king" in Latin), often called T. rex or colloquially T-Rex, is one of the most well-represented of the large theropods.',
        animalId: '1'
    },
    { 
        image: './images/triceri.png',
        type: 'dinosaur',
        name: 'Triceratops',
        description: 'Triceratops is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period, about 68 million years ago (mya) in what is now North America.',
        animalId: '2'
    },
    { 
        image: './images/sauropod.jpg',
        type: 'dinosaur',
        name: 'Sauropoda',
        description: 'Sauropods were herbivorous (plant-eating), usually quite long-necked quadrupeds (four-legged), often with spatulate (spatula-shaped: broad at the tip, narrow at the neck) teeth. They had tiny heads, massive bodies, and most had long tails.',
        animalId: '3'
    },
    { 
        image: './images/velo.jpeg',
        type: 'dinosaur',
        name: 'Velociraptor',
        description: 'Velociraptor (/vɪˈlɒsɪræptər/; meaning "swift seizer" in Latin) is a genus of dromaeosaurid theropod dinosaur that lived approximately 75 to 71 million years ago during the latter part of the Cretaceous Period. Two species are currently recognized, although others have been assigned in the past.',
        animalId: '4'
    },
    { 
        image: './images/greatwhite.jpg',
        type: 'fish',
        name: 'Great White Shark',
        description: 'The great white shark (Carcharodon carcharias), also known as the great white, white shark or "white pointer", is a species of large mackerel shark which can be found in the coastal surface waters of all the major oceans.',
        animalId: '5'
    },
    { 
        image: './images/hammerhead.jpg',
        type: 'fish',
        name: 'Hammerhead Shark',
        description: 'The hammerhead sharks are a group of sharks that form the family Sphyrnidae, so named for the unusual and distinctive structure of their heads, which are flattened and laterally extended into a "hammer" shape called a cephalofoil.',
        animalId: '6'
    },
    { 
        image: './images/whaleshark.jpg',
        type: 'fish',
        name: 'Whale Shark',
        description: 'Whale sharks are the biggest fish in the sea. A whale shark can be as long as a school bus and weigh as much as 50,000 pounds. Whale sharks are one of only three known shark species that filter feed, as baleen whales do.',
        animalId: '7'
    },
    { 
        image: './images/dolphin.png',
        type: 'fish',
        name: 'Dolphin',
        description: 'Dolphins are small-toothed cetaceans easily recognizable by their curved mouths, which give them a permanent “smile.” There are 36 dolphin species, found in every ocean. Most dolphins are marine and live in the ocean or brackish waters along coastlines. ',
        animalId: '8'
    },
    { 
        image: './images/tiger.jpg',
        type: 'cat',
        name: 'Bengal Tiger',
        description: 'The Bengal tiger is a Panthera tigris tigris population native to the Indian subcontinent. It is threatened by poaching, loss, and fragmentation of habitat, and was estimated at comprising fewer than 2,500 individuals by 2011.',
        animalId: '9'
    },
    { 
        image: './images/panther.jpg',
        type: 'cat',
        name: 'Black Panther',
        description: 'A black panther is the melanistic colour variant of any Panthera, particularly of the leopard (P. pardus) in Asia and Africa, and the jaguar (P. onca) in the Americas.',
        animalId: '10'
    },
    { 
        image: './images/ocelot.jpg',
        type: 'cat',
        name: 'Ocelot',
        description: 'The ocelot (/ˈɒsəlɒt/; Leopardus pardalis) is a small wild cat native to the southwestern United States, Mexico, and Central and South America. This medium-sized cat is characterized by solid black spots and streaks on its coat, round ears, and white neck and undersides.',
        animalId: '11'
    },
    { 
        image: './images/cat.jpg',
        type: 'cat',
        name: 'House Cat',
        description: 'Evil creatures',
        animalId: '12'
    },
];

const searchIt = (term) => (item) => item.type.toLowerCase().includes(term.toLowerCase());

class Animals extends Component {
    state = {
        animals: animals,
        animal: {
            image: '',
            type: '',
            name: '',
            description: '',
            animalId: ''
        },
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

    formChangeHandler = (event) => {
        let updatedAnimal = {...this.state.animal};
        updatedAnimal[event.target.name] = event.target.value;
        updatedAnimal.animalId = this.state.animals.length + 1;
        if (updatedAnimal.image === '') {
            updatedAnimal.image = './images/default-image.jpg';
        };

        this.setState({ animal: updatedAnimal });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        let clearAnimal = {
            image: '',
            type: '',
            name: '',
            description: '',
            animalId: ''
        };
        let animalState = [...this.state.animals];

        animalState.push(this.state.animal);
        this.setState({ animal: clearAnimal, animals: animalState});
        event.target.reset();
    }

    render() {
        let animal = this.state.animals.filter(searchIt(this.state.searchTerm)).map(({image, type, name, description, animalId}) => {
            return (
                <div key={animalId}>
                    <Card 
                        image={image}
                        name={name}
                        type={type}
                        description={description}
                        like={() => this.likeHandler(animalId)}
                        dislike={() => this.dislikeHandler(animalId)}
                        discard={() => this.discardHandler(animalId)}
                    />
                </div>
            );
        });

        return (
            <div className='page'>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                <form onSubmit={this.handleSubmit} className="ui form add">
                    <div className="equal width fields">
                        <div className="field">
                            <label>Image</label>
                            <div className="ui fluid input">
                                <input 
                                    type="text" 
                                    placeholder="Image..." 
                                    name="image" 
                                    value={this.state.animal.image} 
                                    onChange={this.formChangeHandler}/>
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
                                    value={this.state.animal.type} 
                                    onChange={this.formChangeHandler}/>
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
                                    value={this.state.animal.name} 
                                    onChange={this.formChangeHandler}/>
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
                                    value={this.state.animal.description} 
                                    onChange={this.formChangeHandler}/>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <button className="ui button">Submit</button>
                    </div>
                </form>
                <hr />
                    <div>
                        <form className="ui form search">
                            <div className="field">
                            <input 
                                onChange={this.handleChange} 
                                type="text" 
                                placeholder="Search..." 
                                value={this.state.searchTerm} />
                            </div>
                        </form>
                    </div>
                    <div className='animal'>
                        {animal}
                    </div>
                </div>
            <Sidebars 
                likes={this.state.likes}
                dislikes={this.state.dislikes}
                deleteLike={this.deleteLikeHandler}
                deleteDislike={this.deleteDislikeHandler}
                />
            </div>
        );
    };
};

export default Animals;