import React from 'react';
import { Link } from 'react-router-dom';
import weatherImage from '../../assets/images/weather.gif';
import CalculatorImg from '../../assets/images/Calculator.gif';
import TryToTouchMe from '../../assets/images/trytotouchme.gif';
import MoviesSuggestion from '../../assets/images/movie.gif';
import Letmein from '../../assets/images/login.gif';
import './Home.css'; 

const Home = () => {
    return (
        <div className="cards-list">
            <Link to="/Weather" className="card 1">
                <div className="card_image"> 
                    <img src={weatherImage} alt="Card Image 1" />
                </div>
                <div className="card_title title-white">
                    <p>Weather</p>
                </div>
            </Link>

            <Link to="/Calculator" className="card 2">
                <div className="card_image">
                    <img src={CalculatorImg} alt="Card Image 2" />
                </div>
                <div className="card_title title-white">
                    <p>Calculator</p>
                </div>
            </Link>

            <Link to="/TryToTouchMe" className="card 3">
                <div className="card_image">
                    <img src={TryToTouchMe} alt="Card Image 3" />
                </div>
                <div className="card_title">
                    <p>Try to touch me</p>
                </div>
            </Link>

            <Link to="/Movies" className="card 4">
                <div className="card_image">
                    <img src={MoviesSuggestion} alt="Card Image 4" />
                </div>
                <div className="card_title title-black">
                    <p>Movies suggestion</p>
                </div>
            </Link>

            <Link to="/Login" className="card 2">
                <div className="card_image">
                    <img src={Letmein} alt="Card Image 2" />
                </div>
                <div className="card_title title-white">
                    <p>Login</p>
                </div>
            </Link>
        </div>
    );
}

export default Home;
