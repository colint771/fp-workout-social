import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Auth from "../utils/auth";
import Header from "../components/Header";
import treadmillIcon from "../assets/images/treadmill.png"
import resistanceIcon from "../assets/images/fitness.png"

export default function Exercise() {
    const loggedIn = Auth.loggedIn();
    const navigate = useNavigate()

    if(!loggedIn) {
        return <Navigate to="/login" />;
    }
    return (
        <div>
            <Header />
            <div className="exercise sd-flex flex-column align-items-center">
                <h2 className='title'>Add Exercise!</h2>
                <div>
                    <button className='cardio-btn d-flex flex-column  align-items-center justify-content-center' onClick={() => navigate("/exercise/cardio")}>
                        <img alt="treadmill" src={treadmillIcon} className="exercise-icon" />
                        Cardio
                    </button>
                </div>
                <div>
                    <button className='resistance-btn d-flex flex-column  align-items-center justify-content-center' onClick={() => navigate("/exercise/resistance")}>
                        <img alt="resistance" src={resistanceIcon} className="exercise-icon" />
                        Resistance
                    </button>
                </div>
            </div>
        </div>
    );
}