import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const AboutMe = () => {

    return (
        <>
        <Header />
        <body>
            <div class="container-aboutme">
                <h1>About  Miguel Cardiga</h1>
                    <section class="personal-info">
                        <div class="topic">
                            <p>GitHub: <a href="https://www.github.com/mcnsgit">Mcnsgit</a></p>
                            <p>Codewars: <a href="https://www.codewars.com/users/Mcnsgit">Mcnsgit</a></p>
                            <p>Location: Salford, Greater Manchester</p>
                            <p>Email: <a href="mailto:cardigamiguel221@gmail.com">cardigamiguel221@gmail.com</a></p>
                        </div>
                    </section>
                    <div class="topic">
                        <section class="personal-summary">
                            <h3>Personal Summary</h3>
                            <p>Transitioning from a diverse background in Photo Editing and Digital Marketing to the field of software development and information systems. Skilled in Python, HTML, CSS, and JavaScript with a user-focused approach and strong problem-solving skills.</p>
                        </section>
                    </div>
                    <div class="topic">
                        <section class="professional-experience">
                            <h3>Professional Experience</h3>
                            <ul>
                                <li><strong>Founder and Creative Director, McNasty Studios</strong> (May 2021 - Present)</li>
                                <li><strong>Curator/Exhibitor, Natural Selection Salford</strong> (May 2022)</li>
                                <li><strong>Exhibitor, Salford Pride - LGBT Exhibition</strong> (February 2022)</li>
                                <li><strong>Stylist Sales Associate, Allsaints Gloucester</strong> (Nov 2017 - Jul 2018)</li>
                            </ul>
                        </section>
                    </div>
                    <div class="topic">
                        <section class="skills">
                            <h3>Skills and Accomplishments</h3>
                            <ul>
                                <li> Python</li>
                                <li> JavaScript</li>
                                <li> HTML</li>
                                <li> CSS</li>
                                <li> Flutter</li>
                                <li> Node.js</li>
                                <li> SQL </li>
                                <li> GitHub & Git version control</li>
                                <li> Creative problem Solver</li>
                                <li> Knowledge of GDPR and Data Protection Act 2018</li>
                                <li> Microsoft Office Suite</li>
                                <li> Digital marketing Skills: SEO, Social Media Marketing, Content Marketing, KPIS, etc. </li>
                                <li> Adobe Creative Suite</li>
                            </ul>
                        </section>
                    </div>
                    <div class="topic">
                        <section class="education">
                            <h3>Education and Professional Training</h3>
                            <ul>
                                <li>Skills Bootcamp Software Development - TGC (Current)</li>
                                <li>Level 2 in Software Development (2023)</li>
                                <li>Level 2 in Cyber Security (2023)</li>
                                <li>Level 3 Digital Marketing Bootcamp (2022) - Novi Digital</li>
                                <li>BA in Photography (2020-2022) - University of Salford</li>
                                <li>level 4 Fashion Image Making and Styling (2018-2019)</li>
                                <li>Level 3 Extended Diploma in Photography (2016-2018)</li>
                                <li>8 A* - C GCSE's 2013-2016</li>
                            </ul>
                        </section>
                    </div>
                </div>
            <Footer />
        </body>  
        </>
    )
}
;
export default AboutMe
