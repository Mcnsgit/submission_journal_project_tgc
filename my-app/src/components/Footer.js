import React from 'react';

const Footer = () => (
    <footer>
        <div className="external_links_logos"> 
            {externalLinks.map(({ href, title, imgSrc, imgAlt }) => (
                <a key={href} href={href} title={title}>
                    <img src={imgSrc} alt={imgAlt}/> 
                </a>
            ))}
        </div>
        <div className="external-links">
            <p>© 2024 Journal by Miguel Cardiga. All rights reserved.</p>
        </div>
    </footer>
);

const externalLinks = [
    { href: "https://www.github.com/mcnsgit", title: "GitHub Profile", imgSrc: "assets/images/github-logo.svg", imgAlt: "GitHub Logo" },
    { href: "https://www.codewars.com/users/Mcnsgit", title: "Codewars Profile", imgSrc: "assets/images/codewars-logo.svg", imgAlt: "Codewars Logo" }
];

export default Footer;
