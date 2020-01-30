import React, {useState} from 'react';
import Axios from 'axios';

const AddMovie = props => {

    const [ newMovie, setNewMovie ] = useState({
        id: null,
        title: null,
        director: null,
        metascore: null,
        stars: []
    });
    console.log(newMovie)
    const handleAdd = e => {
        e.preventDefault();
        Axios.post(`http://localhost:5000/api/movies`, newMovie)
        .then(res => {
            props.history.push('/')
        })
        .catch(err => console.log(err))
    }

    const handleChange = e => {
        let newArr = [...newMovie.stars]
        newArr[e.target.name] = e.target.value

        console.log(newArr)
        setNewMovie({
            ...newMovie,
            stars: [...newArr],
            [isNaN(e.target.name) && e.target.name] : isNaN(e.target.name) && e.target.value
        })
    }

    return(
        <>
        <main>
            <label>Title:<input type="text" onChange={handleChange} name="title" /></label>
            <label>Director:<input type="text" onChange={handleChange} name="director"/></label>
            <label>Score:<input type="text" onChange={handleChange} name="metascore"/></label>
            <label>Stars:
                <input type="text" onChange={handleChange} name={0}/>
                <input type="text" onChange={handleChange} name={1}/>
                <input type="text" onChange={handleChange} name={2}/>
            </label>
            <button onClick={handleAdd}>Add Movie</button>
        </main>
        </>
    )
}

export default AddMovie;