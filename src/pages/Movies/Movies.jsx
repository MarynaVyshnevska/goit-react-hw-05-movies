import MoviesList from "components/MoviesList/MoviesList";
import { useEffect, useState } from "react";
import { FiSearch } from 'react-icons/fi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getMoviesByQuery } from "service/movies.service";
import Spinner from "components/Spinner/Spinner";
import { toast } from "react-toastify";
import NotFound from "components/NotFound/NotFound";

const Movies = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [page, setPage] = useState(1);
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
                }
                setMovies(movies.results);

            })
            .catch(() => {
                toast.error('🦄 :( We coudnot find any movie ', {
                    theme: "colored",
                });
            })
            .finally(() => setLoading(false));
        
    }, [query]);

    const handleChange = event => {
        event.preventDefault();
        const searchInfo = event.currentTarget.query.value.toLowerCase();
        if (searchInfo === '') {
            return toast('🦄 Please, enter word for search', {
                    theme: "colored",
            });
        }
        setQuery(searchInfo);
        
    }
    // console.log(movies);
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
            {(movies.length !== 0) ?
                <MoviesList movies={movies} />
                : <NotFound />
            
            }

        </div>    
    )    
};

export default Movies;