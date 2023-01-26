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
            <p className="">{original_title} ({release})</p>
            <p className="">{title}</p>
            <ul>
                <li>{imdb_id !== null && (<a href={`https://www.imdb.com/title/${imdb_id}`}>IMDB</a>)}</li>
                <li>{homepage !== null && (<a href={homepage}>HomePage</a>)}</li>
            </ul>
            <p className="">User Score: {vote_average}</p>
            <p className="">Overview</p>
            <p className="">{overview}</p>
            <p className="">Genres</p>
            <p className="">{genresOfMovie.join(", ")}</p>
            
        </div>
    )
}

export default MovieCard;