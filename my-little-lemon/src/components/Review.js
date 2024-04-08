import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

const Review = (props) => {
    const displayRatingStars = () => {
        const stars = [];

        for (let i = 0; i < props.rating; i++){
            stars.push(<FontAwesomeIcon key={`solid-${i}`} icon={faStarSolid} />);
        }

        for (let i = props.rating; i < 5; i++) {
            stars.push(<FontAwesomeIcon key={`regular-${i}`} icon={faStarRegular} />);
        }

        return stars;
    }
    return (
        <article className="review">
            <div className="rating">
                {displayRatingStars()}
            </div>
            <div className="person-info">
                <div className="flex-item">
                    <img className="reviewerImg" src={props.image} alt=""/>
                </div>
                <div className="flex-item">
                    <p className="flex-item person-text">{props.name}</p>
                </div>
            </div>
            <div className="review-text">
                <p>"{props.review}"
                </p>
            </div>
        </article>
    );
};

export default Review;