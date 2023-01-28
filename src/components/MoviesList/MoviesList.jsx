import { Link, useLocation } from "react-router-dom";
import image from '../../images/no.jpg';
import css from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
    const location = useLocation();
    // console.log(movies);
    
    return (
        <ul className={css.box}>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`} state={{ from: location }} className={css.itemCard}>
                        {(movie.poster_path === null) ? 
                            <img src={image} alt={movie.title} className={css.itemImg}/>
                            : <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className={css.itemImg}/>
                        }
                        <p className={css.itemTitle}>{movie.title}</p>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
export default MoviesList;
