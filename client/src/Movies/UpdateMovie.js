import React from 'react';
import Axios from 'axios';

const UpdateMovie = () => {

    const handleUpdate = e => {
        e.preventDefault();
        Axios.put(`http://localhost:5001/`, movie)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    return (
        <main>
            <label><input type="text" /></label>
            <label><input type="text" /></label>
            <label><input type="text" /></label>
            <label><input type="text" /></label>
            <button onClick={handleUpdate}>Update</button>
        </main>
    )
}

export default UpdateMovie;