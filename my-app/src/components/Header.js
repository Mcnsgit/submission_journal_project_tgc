import React from 'react';
import { Link } from 'react-router-dom';


const NavigationMenu = ({ title }) => {
    return (
        <div>
            <div class="header-h1">
        <h1> {title}</h1>
        </div>
    <nav class="navigation-menu">
    <div class="menu-item">
        <span>Home</span>
            <div class="sub-menu">
                <Link to="/homepage">Home</Link>
            </div>
        </div>
        <div class="menu-item">
            <span>About Me</span>
            <div class="sub-menu">
                <Link to="/About">About Me</Link >
                <Link to="/portfolio">Portfolio</Link >
                <Link to="/cv">CV</Link >
            </div>
        </div>
        <div class="menu-item">
            <span>TGC - Software Development Course</span>
            <div class="sub-menu">
                <Link to="/week1">Week 1</Link >
                <Link to="/week2">Week 2</Link >
                <Link to="/week3">Week 3</Link >
                <Link to="/week4">Week 4</Link >
                <Link to="/week5">Week 5</Link >
                <Link to="/week6">Week 6</Link >
                <Link to="/week7">Week 7</Link >
                <Link to="/week8">Week 8</Link >
                <Link to="/week9">Week 9</Link >
                <Link to="/week10">Week 10</Link >
                <Link to="/week11">Week 11</Link >
            </div>
        </div>
        <div class="menu-item">
            <span>Challenges & Projects </span>
            <div class="sub-menu">
                <Link to="/projects_challenges/relational_Databases">Relational Databases</Link >
                <Link to="/projects_challenges/js_challenges">JavaScript</Link >
                <Link to="/projects_challenges/sql_challenge">SQL</Link >
                <Link to="/employability">Employability</Link >
            </div>
        </div>
    </nav>
    </div>
    );
}

export default NavigationMenu;

