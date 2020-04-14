import React from 'react';

const searchAnimal = ({handleChange, searchTerm}) => (
    <form className="ui form search">
        <div className="field">
        <input 
            onChange={handleChange} 
            type="text" 
            placeholder="Search Animal Type..." 
            value={searchTerm} />
        </div>
    </form>
);

export default searchAnimal;