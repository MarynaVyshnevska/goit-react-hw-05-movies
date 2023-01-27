import css from './MovieCard.module.css';

const MovieCard = ({
    original_title,
    title,
    overview,
    vote_average,
    genresOfMovie,
    imdb_id,
    homepage,
    release }) => {
    
    return (
        <div>
            <p className={css.title}>{title} ({release})</p>
            {title !== original_title && (
                <p>
                    <span className={css.title}>{original_title}</span>
                    <span className={css.text}>(original title)</span>
                </p>
            )}
                        
            <ul className={css.list}>
                <li>{imdb_id !== null && (<a href={`https://www.imdb.com/title/${imdb_id}`} className={css.link}>IMDB</a>)}</li>
                <li>{homepage !== null && (<a href={homepage} className={css.link}>HomePage</a>)}</li>
            </ul>
            <p className={css.infoTitle}>User Score: {vote_average}</p>
            <p className={css.infoTitle}>Overview</p>
            <p className={css.infoText}>{overview}</p>
            <p className={css.infoTitle}>Genres</p>
            <p className={css.infoText}>{genresOfMovie.join(", ")}</p>
            
        </div>
    )
}

export default MovieCard;