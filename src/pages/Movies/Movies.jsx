import MoviesList from "components/MoviesList/MoviesList";
import { useEffect, useState } from "react";
import { FiSearch } from 'react-icons/fi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getMoviesByQuery } from "service/movies.service";
import Spinner from "components/Spinner/Spinner";
import NotFound from "components/NotFound/NotFound";

const Movies = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);
    // const location = useLocation();

    useEffect(() => {
        if (query === '') {
            return 
        }
        setLoading(true);

        getMoviesByQuery(query)
            .then(movies => {
                if (movies.results.length < 1) {
                    Notify.warning(' :( We coudnot find any movie');
                    setNotFound(true);
                    console.log('test');
                }
                setMovies(movies.results);

            })
            .catch(() => {
                Notify.failure('🦄 :( We coudnot find any movie ');
            })
            .finally(() => setLoading(false));
        
    }, [query]);

 
    
    const handleChange = event => {
        event.preventDefault();
        setNotFound(false);
        const searchInfo = event.currentTarget.query.value.toLowerCase();
        if (searchInfo === '') {
            return Notify.info('🦄 Please, enter word for search');
        }
        setQuery(searchInfo);
        
    }
    // console.log(notFound);
    return (
        <div>
            <h1>Search movie</h1>
            <form onSubmit={handleChange}>
                <input
                    type='text'
                    name='query'
                    autoFocus
                    placeholder="Enter movie's title"
                />
                <button type="submit">
                    <FiSearch size='12px' />
                    Search
                </button>
            </form>
            {loading && <Spinner />}
            {movies.length !== 0 && <MoviesList movies={movies} />}
            {notFound && <NotFound/>}
        </div>    
    )    
};

export default Movies;