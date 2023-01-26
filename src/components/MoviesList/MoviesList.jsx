import { Link, useLocation } from "react-router-dom";
import image from '../../images/no.jpg';

const MoviesList = ({ movies }) => {
    const location = useLocation();
    // console.log(movies);
    
    return (
        <div>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                        <div state={{from: location}} to={`/movies/${movie.id}`}>
                            {(movie.poster_path === null) ? 
                                <img src={image} alt={movie.title} />
                                : <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                            }

                            <p>{movie.title}</p>
                        </div>
                    </Link>
                </li>
            ))}
        </div>
    )
}
export default MoviesList;
