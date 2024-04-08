import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import underConstruction from "../images/underConstruction.jpg"
const UnderConstruction = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/");
    };

    const handleChange = (e) => {
        setEmail(e);
    }

    return (
        <section className="under-construction-container">
            <section className="under-construction-information-container">
                <h3>This functionality is not yet implemented.</h3>
                <h5>Sign up to be the first to know when it is ready.</h5>
                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <fieldset className="contact-form-field">
                            <div>
                                <input id="notify-email" value={email} placeholder="Enter your email here" onChange={(e) => handleChange(e.target.value)}
                                       type="email" required/>
                            </div>
                            <div className="btn-notify">
                                <input aria-label="On Click" type={"submit"} value={"Notify Me"}></input>
                            </div>
                        </fieldset>
                    </form>

                </div>
                <div className="under-construction-social-container">
                    <ul className="under-construction-social">
                        <li>
                            <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook}/></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram}/></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter}/></a>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="under-construction-image-container" >
                <img className="under-construction-image" src={underConstruction} alt=""/>
            </section>
        </section>
    );
};

export default UnderConstruction;