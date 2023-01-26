import { useEffect, useState  } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import { getTrendingMovies } from "service/movies.service";
import { GiSeaStar } from 'react-icons/gi';
import Spinner from "components/Spinner/Spinner";
// import css from './Home.module.css';

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        getTrendingMovies()
            .then(movies => setTrendingMovies(movies.results))
            .catch(() => {
                toast.warn('🦄 Oops! We cannot loading this list right now', {
                    theme: "colored",
                });
            }).finally(()=> setLoading(false));
    }, [])
    
    return (
        <> 
            <h1>Trending today</h1>
            {loading && <Spinner />}
            <ul>
                {trendingMovies.length > 0 && trendingMovies.map(({title, id}) => {
                    return (
                        <li key={id}>
                            <Link to={`/movies/${id}`} state={{ from: location }}>
                                <GiSeaStar size='16px'/>{title}
                            </Link>
                        </li>
                    )
                })}    
            </ul>
        </>)
}

export default Home;
