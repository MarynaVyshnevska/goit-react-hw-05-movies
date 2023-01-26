import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";


const MovieDetails = () => {
    const { movieId } = useParams();
    const [details, setDetails] = useState({});
    const location = useLocation();

    return (
        <div>
            <button>Back</button>
            
        </div>
    )

}

export default MovieDetails;