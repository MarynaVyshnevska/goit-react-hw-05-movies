import { Suspense, useEffect, useState } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useParams, useLocation, NavLink, Outlet, useNavigate } from "react-router-dom";
import { getMovieDetails } from "service/movies.service";
import { BsChevronDoubleLeft } from 'react-icons/bs';

import Spinner from "components/Spinner/Spinner";
import NotFound from "components/NotFound/NotFound";
import MovieCard from "components/MoviesList/MovieCard/MovieCard";

import image from '../../images/no.jpg';
import css from './MovieDetails.module.css';


const items = [
    { name: 'Cast', link: 'cast' },
    { name: 'Reviews', link: 'reviews' },
];
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
    
    const activeStyle = {
        backgroundColor: 'var(--color-bg-accent)',
        color: 'var(--color-accent-lite)',
    }
    return (
        <div>
            <button 
                type="button"
                className={css.back}
                onClick={() => navigate(location.state?.from ?? '/')}
            >
                <BsChevronDoubleLeft/> Back <BsChevronDoubleLeft/>
            </button>
            <section className={css.box}>
                <div className={css.posterBox}>
                    <img
                        src={backdrop_path === null ? defaultImg : `https://image.tmdb.org/t/p/w500${backdrop_path}`}
                        alt={title}
                        className={css.poster}
                    />
                </div>
                <MovieCard original_title={original_title} title={title} overview={overview} vote_average={vote_average} genresOfMovie={genresOfMovie} imdb_id={imdb_id} homepage={homepage} release={release} />
                
            </section>
            <section className={css.footer}>
                <p className={css.infoTitle}>Additional Informational</p>
                <ul className={css.btnInfoList}>
                    {items.map(({ name, link }) => (
                        <li key={link}>
                            <NavLink
                                to={link}
                                state={location.state}
                                className={css.btnInfo}
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined}
                            >
                               {name}
                            </NavLink>
                        </li>
                    ))}

                </ul>
            </section>
            <Suspense fallback={<Spinner/>}>
                <Outlet/>
            </Suspense>
        </div>
    )

}

export default MovieDetails;

