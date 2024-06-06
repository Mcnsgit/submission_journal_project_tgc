import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ title }) => (
    <div>
        <div className="header-h1">
            <h1>{title}</h1>
        </div>
        <nav className="navigation-menu">
            {menuItems.map((item, index) => (
                <MenuItem key={index} item={item} />
            ))}
        </nav>
    </div>
);

const menuItems = [
    { label: "Home", links: ["/homepage"] },
    { label: "About Me", links: ["/About", "/portfolio", "/cv"] },
    { label: "TGC - Software Development Course", links: ["/week1", "/week2", "/week3", "/week4", "/week5", "/week6", "/week7", "/week8", "/week9", "/week10", "/week11"] },
    { label: "Challenges & Projects", links: ["/projects_challenges/relational_Databases", "/projects_challenges/js_challenges", "/projects_challenges/sql_challenge", "/employability"] }
];

const MenuItem = ({ item }) => (
    <div className="menu-item">
        <span>{item.label}</span>
        <div className="sub-menu">
            {item.links.map((link, index) => (
                <Link key={index} to={link}>{link.split('/').pop().replace('_', ' ')}</Link>
            ))}
        </div>
    </div>
);

export default Header;
