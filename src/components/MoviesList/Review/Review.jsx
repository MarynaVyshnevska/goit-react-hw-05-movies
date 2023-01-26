import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieReviews } from "service/movies.service";
import { toast } from 'react-toastify';
import image from '../../../images/review-1.png';
import Spinner from "components/Spinner/Spinner";


const MovieReview = () => {
    const { movieId } = useParams();
    const [review, setReview] = useState([]);
    const [loading, setLoading] = useState(false);
    const defaultImg = image;

    useEffect(() => {
        setLoading(true);
        getMovieReviews(movieId).then(data => setReview(data.results))
            .catch(() => {
                toast.error('🦄 :( This movie has not any review ', {
                    theme: "colored",
                });
            })
            .finally(() => setLoading(false));
    }, [movieId]);

    if (loading) {
        return <Spinner/>
    };

   
    console.log(review.length);

    return (
        <div>
            {review.length === 0 &&
                <li>
                    <p className="">We did not find any reviews, but you can be the first if you leave one</p>
                    <img src={defaultImg} alt="no reviews" className=""/>
                </li>
            }
            <ul>
                {review !== null &&
                    review.map(({ author, content, id, created_at }) => {
                        return (
                            <li key={id}>
                                <p>Author: {author}</p>
                                <p>Date: {created_at.slice(0, 10)}</p>
                                <p>Article; {content}</p>
                            </li>
                        )
                    })
                }    
            </ul>
            {/* {review.length === null &&
                <div>
                    <p className="">We did not find any reviews, but you can be the first if you leave one</p>
                    <img src={defaultImg} alt="no reviews" className=""/>
                </div>
            } */}
            
        </div>

    )

}

export default MovieReview;