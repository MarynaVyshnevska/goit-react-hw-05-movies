import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getMovieCast} from "service/movies.service";
import { toast } from 'react-toastify';
import Spinner from 'components/Spinner/Spinner';
import NotFound from 'components/NotFound/NotFound';
import image from '../../../images/actor-logo.png';
import css from './Cast.module.css';


const Cast = () => {
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

    // console.log(movieId);
    // console.log(actors.cast);
    return (
        <div>
            <ul className={css.list}>
                {actors.cast.length > 0 &&
                    actors.cast.map(({ character, id, name, original_name, profile_path }) => {
                    return (
                        <li key={id} className={css.item}>
                            <img
                                src={profile_path === null ? defaultImg : `https://image.tmdb.org/t/p/w500${profile_path}`} 
                                alt={name}
                                className={css.itemImg}
                            />
                            <p className={css.itemName}>{name}</p>
                            {original_name !== name && (<p className={css.itemName}>{original_name}</p>)}
                            <p className={css.itemCharacter}>as {character}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Cast;

