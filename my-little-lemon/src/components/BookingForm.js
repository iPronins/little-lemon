import React from "react";
import { useState } from "react";
import bckground from "../images/restaurant.jpg"



const BookingForm = (props) => {

    const [occasion, setOccasion] = useState("");
    const [guests, setGuests] = useState("");
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");

    const validateForm = () => {
        return !!(date && times && guests && occasion);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isFormValid = validateForm();
        if (!isFormValid) {
            return;
        }
        props.submitForm(e);
    };

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    return (
        <header>
            <section className = "booking-section">
                <img className="background-img" src={bckground} alt=""/>
                <h2>Reserve a Table</h2>
                <form data-testid="booking-form" className="booking-form" onSubmit={handleSubmit}>
                    <fieldset className="formField">
                        <div className="formField-line">
                            <label htmlFor="book-date">Choose Date:</label>
                            <input className="formField-input" id="book-date" value={date} onChange={(e) => handleChange(e.target.value)}
                                   type="date" required/>
                        </div>
                        <div className="formField-line">
                            <label htmlFor="book-time">Choose Time:</label>
                            <select className="formField-input" id="book-time" value={times}
                                    onChange={(e) => setTimes(e.target.value)} required>
                                <option value="">Select a Time</option>
                                {props.availableTimes.availableTimes.map(availableTimes => {
                                    return <option key={availableTimes}>{availableTimes}</option>
                                })}
                            </select>
                        </div>
                        <div className="formField-line">
                            <label htmlFor="book-guests">Number of Guests:</label>
                            <input className="formField-input" id="book-guests" min="1" value={guests}
                                   onChange={(e) => {
                                       setGuests(e.target.value)
                                   }} type={"number"} placeholder={0} max={10} required></input>
                        </div>
                        <div className="formField-line">
                            <label htmlFor="book-occasion">Occasion:</label>
                            <select className="formField-input" id="book-occasion" key={occasion} value={occasion}
                                    onChange={(e) => setOccasion(e.target.value)} required>
                                <option value="">Select an Option</option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>
                        <div className="btnReceive">
                            <input data-testid="submit-button" aria-label="On Click" type={"submit"} value={"Make Your Reservation"}></input>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;