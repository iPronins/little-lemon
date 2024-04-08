import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck} from "@fortawesome/free-regular-svg-icons";
import {Link} from "react-router-dom";

const ConfirmedBooking = () => {
    return (
        <Link to="/">
            <div className="confirm">
                <div className="reservation-confirmation">
                    <h1>Booking has been confirmed!</h1>
                    <div className="icon">
                        <FontAwesomeIcon icon={faCircleCheck}/>

                    </div>
                </div>
            </div>
        </Link>

    );
};

export default ConfirmedBooking;