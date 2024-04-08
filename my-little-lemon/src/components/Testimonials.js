import React from 'react';
import Review from "../components/Review"
import reviews from "../reviews";

const Testimonials = () => {
    return (
        <section className="testimonials-container">
            {reviews.map((review,index) => (
                <Review key={index} {...review}/>
            ))}
        </section>
    );
};

export default Testimonials;