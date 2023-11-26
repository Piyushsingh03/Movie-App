import MovieCard from "./MovieCard";
import "./App.css";
import SearchIcon from './search.svg';
import { useEffect, useState } from "react";

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=683eccb6";

const movie1 = {
    "Poster":"https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg",
    "Title" :"The Amazing Spiderman 2 Webb Cut",
    "Type":"movie",
    "Year":"2021",
    "imdbID":"tt18351128"
}



const App = () => {

const [movies, setMoives] = useState([]);
const [searchItem, setSearchItem] = useState('');


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMoives(data.Search);
    }

    useEffect(() => {
        searchMovies(searchItem);
    }, []);


    return (
        <div className='app'>
            <h1>MoviesFlix</h1>

            <div className="search">
                <input placeholder="Search for movies" type="text"
                    value={searchItem}
                    onChange={(ev) => setSearchItem(ev.target.value)}
                />
                <img src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchItem)}
                />
            </div>

{
    movies?.length>0 ?(
        <div className="container">
          {movies.map((film)=>(
            <MovieCard movie={film}/>
          ))}

        </div>
    ):(
        <div className="empty">
            <h2>No Movies Found</h2>
        </div>
    )
}

           
        </div>

    );
}

export default App;
