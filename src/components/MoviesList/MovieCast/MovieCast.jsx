import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getMovieCast} from "service/movies.service";
import { toast } from 'react-toastify';
import Spinner from 'components/Spinner/Spinner';
import NotFound from 'components/NotFound/NotFound';
import image from './actor-logo.png';

const MovieCast = () => {
    const { movieId } = useParams();
    const [actors, setActors] = useState([]);
    const [loading, setLoading] = useState(false);
    const defaultImg = image;

    useEffect(() => {
        setLoading(true);
        getMovieCast(movieId).then(setActors)
            .catch(() => {
                toast.error('🦄 :( Oops ', {
                    theme: "colored",
                });
            })
            .finally(() => setLoading(false));
    }, [movieId])

    if (loading) {
        return <Spinner/>
    }
    
    if (actors.length === 0) {
        return <NotFound/>
    }

    console.log(movieId);
    console.log(actors);
    return (
        <div>
            <h1>test</h1>
            <ul>
                {/* {actors.cast.map(({ character, id, name, original_name, profile_path }) => {
                    <li key={id}>
                        <img
                            src={profile_path === null ? defaultImg : `https://image.tmdb.org/t/p/w500${profile_path}`} 
                            alt={name}
                        />
                    </li>
                })} */}
            </ul>
        </div>
    )
}

export default MovieCast;