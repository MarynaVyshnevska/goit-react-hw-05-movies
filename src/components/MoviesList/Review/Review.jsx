import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieReviews } from "service/movies.service";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Spinner from "components/Spinner/Spinner";
import image from '../../../images/review-1.png';
import css from './Review.module.css';


const Review = () => {
    const { movieId } = useParams();
    const [review, setReview] = useState([]);
    const [loading, setLoading] = useState(false);
    const defaultImg = image;

    useEffect(() => {
        setLoading(true);
        getMovieReviews(movieId).then(data => setReview(data.results))
            .catch(() => {
                Notify.failure('🦄 :( This movie has not any review ');
            })
            .finally(() => setLoading(false));
    }, [movieId]);

    if (loading) {
        return <Spinner/>
    };

   
    // console.log(review.length);

    return (
        <div>
            {review.length === 0 &&
                <div className={css.boxError}>
                    <p className={css.text}>We did not find any reviews, but you can be the first if you leave one</p>
                    <img
                        src={defaultImg} alt="no reviews" className={css.imgError} />
                </div>
            }
            <ul className={css.box}>
                {review !== null &&
                    review.map(({ author, content, id, created_at }) => {
                        return (
                            <li key={id} className={css.item}>
                                <p className={css.author}>Author: {author}</p>
                                <p className={css.data}>{created_at.slice(0, 10)}</p>
                                <p className={css.text}>{content}</p>
                            </li>
                        )
                    })
                }    
            </ul>
        </div>

    )

}

export default Review;

