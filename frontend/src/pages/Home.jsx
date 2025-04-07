import MovieCarde from '../components/MovieCard'
import { useState } from 'react'
import '../css/Home.css'

function Home() {

    const movies = [
        {id:1, title:"David's film_1", release_date:"2024"},
        {id:2, title:"David's film_2", release_date:"2024"},
        {id:3, title:"Franck's film_3", release_date:"2024"},
        {id:4, title:"Bertrand's film_4", release_date:"2024"}
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("---------")
    }

    const [searchQuery, setSearchQuery] = useState("");

    return <div className="home">

        <form onSubmit={handleSearch} className="search-form">
            <input type="text" 
                placeholder="Search for movies..." 
                className="search-input" 
                value={searchQuery}
                onChange={(e)=> setSearchQuery(e.target.value)}
            />
            <button type="submit" className='search-button'>Search</button>
        </form>

        <div className="movies-grid">
            {movies.map((movie) => (movie.title.toLowerCase().startsWith(searchQuery) &&
               ( <MovieCarde movie={movie} key={movie.id} />)
            ))}
        </div>
    </div>
}

export default Home