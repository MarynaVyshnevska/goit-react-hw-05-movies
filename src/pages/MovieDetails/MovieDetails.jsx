import { Suspense, useEffect, useState } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useParams, useLocation, Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { getMovieDetails } from "service/movies.service";
import Spinner from "components/Spinner/Spinner";
import NotFound from "components/NotFound/NotFound";
import image from '../../images/no.jpg';
import MovieCard from "components/MoviesList/MovieCard/MovieCard";


const MovieDetails = () => {
    const { movieId } = useParams();
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();


    useEffect(() => {
        setLoading(true);
        getMovieDetails(movieId).then(setDetails)
            .catch(() => {
                Notify.failure('🦄 :( Oops ');
            })
            .finally(() => setLoading(false));
    }, [movieId]);

    if (loading) {
        return <Spinner/>
    }
    
    if (!details) {
        return <NotFound/>
    }

    // console.log(details);
    const { release_date,
            original_title,
            title,
            overview,
            vote_average,
            genres,
            backdrop_path,
            imdb_id,
            homepage } = details;
    
    const release = release_date.slice(0, 4);
    const genresOfMovie = genres.map(genre => genre.name);
    const defaultImg = image;
    // https://www.imdb.com/title/tt8884364/
    
    return (
        <div>
            {/* <button>
                <Link to={location.state?.from ?? '/'}>
                    Back
                </Link>
            </button> */}
            <button
                onClick={() => navigate(location.state?.from ?? '/')}
            >
                {/* <Link to={}> */}
                    Back
                {/* </Link> */}
            </button>
            <section>
                <div>
                    <img
                        src={backdrop_path === null ? defaultImg : `https://image.tmdb.org/t/p/w500${backdrop_path}`}
                        alt={title}
                        className=''
                    />
                </div>
                <MovieCard original_title={original_title} title={title} overview={overview} vote_average={vote_average} genresOfMovie={genresOfMovie} imdb_id={imdb_id} homepage={homepage} release={release} />
                
            </section>
            <section>
                <p>Additional Informational</p>
                <ul>
                    <li key='cast'>
                        <NavLink to='cast' state={location.state}>
                            Cast
                        </NavLink>
                    </li>
                    <li key='reviews'>
                        <NavLink to='reviews' state={location.state}>
                            Reviews
                        </NavLink>
                    </li>
                </ul>
            </section>
            <Suspense fallback={<Spinner/>}>
                <Outlet/>
            </Suspense>
        </div>
    )

}

export default MovieDetails;