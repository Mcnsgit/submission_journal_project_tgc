
import React from 'react';
import '../App.css';

const HeroSection = () => {
    return (
        <div className="hero">
            <h1>Welcome to My Journal</h1>
            <div className="hero-background"></div>
            <button type="button" onClick={() => window.location.href='/HomePage'}>Learn More</button>
            <p> - A summary of my learning journey in Software Development - </p>
        </div>
    );
};

export default HeroSection;