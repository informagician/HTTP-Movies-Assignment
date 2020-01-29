import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateMovie = () => {

    const [ movie, setMovie ] = useState();

    const { id } = useParams();
    console.log(movie);

    useEffect(() => {
        Axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => setMovie({ ...res.data }))
      .catch(err => console.log(err.response));
    }, [id,])

    const handleUpdate = e => {
        e.preventDefault();

        Axios.put(`http://localhost:5000/`,)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    const handleChange = index => e => {
        e.persist();
        let newArr = [...movie.stars]
        newArr[index] = e.target.value

        console.log(newArr)
        setMovie({
            ...movie,
            stars: [...newArr],
            [e.target.name] : e.target.value
        })
    }
    
    return (
        movie != undefined
        ? (
        <main>
            <label>Title:<input type="text" value={movie.title} onChange={handleChange} name="title" /></label>
            <label>Director:<input type="text" value={movie.director} onChange={handleChange} name="director"/></label>
            <label>Score:<input type="text" value={movie.metascore} onChange={handleChange} name="metascore"/></label>
            <label>Stars:
                {movie.stars.map((item, index) => (
                    <li key={item}>
                        <input type="text" value={item} onChange={handleChange(index)} name={index}/>
                    </li>
                ))}
            </label>
            <button onClick={handleUpdate}>Update</button>
        </main>
        ) : (
            <h1>No Movies Found</h1>
        )
    )
}

export default UpdateMovie;