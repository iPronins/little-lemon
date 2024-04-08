import React from 'react';
import brothers1Img from '../images/Mario and Adrian A.jpg'
import brothers2Img from '../images/Mario and Adrian B.jpg'
const About = () => {
    return (
        <article id="about-us" className="about-container">
            <section className="about-description">
                <div className="description-container">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Embrace the captivating allure of Little Lemon Restaurant,
                        a family-owned haven meticulously curated by brothers
                        Mario and Adrian, nestled in the Mediterranean-inspired
                        enclave East of Chicago. Our culinary odyssey invites you
                        to savor an array of exquisite flavors, marrying tradition
                        with innovation. Immerse yourself in the warmth of genuine
                        hospitality, where every visit becomes an unforgettable
                        journey for you and your cherished companions.
                    </p>
                </div>
            </section>
            <section className="about-images">
                <ul className="overlapping-images">
                    <li className="img-right">
                        <img src={brothers2Img} alt=""/>
                    </li>
                    <li className="img-left">
                        <img src={brothers1Img} alt=""/>
                    </li>
                </ul>
            </section>
        </article>
    );
};

export default About;