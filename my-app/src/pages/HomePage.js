import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import '../App.css';

const HomePage = () => {
    return (
        <div>
            <Header title="My Software Development Journal" />
            <main>
                <div className="container">
                    <section className="about" id="about">
                        <AboutSection />
                    </section>
                
                <section className="skills__container">
                    <div className="skills__title-container">
                        <h2>Skills</h2>
                    </div>
                    <div className="skills__image-container">
                        <div className="skills">
                            <div className="skills__item"><img src="/images/logo_html5_icon.png" alt="HTML5" className="skills__image"/></div>
                            <div className="skills__item"><img src="/images/logo_css3_icon.png" alt="CSS3" className="skills__image"/></div>
                            <div className="skills__item"><img src="/images/logo_javascript_icon.png" alt="JavaScript" className="skills__image"/></div>
                            <div className="skills__item"><img src="/images/logo_react_icon.png" alt="React" className="skills__image"/></div>
                            <div className="skills__item"><img src="/images/logo_python_icon.png" alt="Python" className="skills__image"/></div>
                            <div className="skills__item"><img src="/images/logo_firebase_icon.png" alt="Firebase" className="skills__image"/></div>
                        </div>
                    </div>
                    </section>
                    <div className="week-summary">
                        <div className="week-summary__content">
                            <h2 className="week-summary__title">Week 1: JS Fundamentals</h2>
                            <p>This week focused on JavaScript fundamentals and an introduction to databases...</p>
                            <div class="week-summary__content">
                                <p>This week focused on JavaScript fundamentals and an introduction to databases. We covered data types, variable and constant declaration, data structures like arrays and objects, and different types of loops such as for and while. Additionally, we introduced database basics, SQL operations, and CRUD operations in SQL databases.</p>
                            </div>
                    </div>
                    <div class="week-summary__improvements">
                        <h3>Improvements and Achievements</h3>
                        <p>I improved my understanding of JavaScript's control flow and error handling, particularly in using try/catch blocks. I am most proud of successfully implementing a complex function using array methods.</p>
                    </div>
                    <div class="week-summary__challenges">
                        <h3>Challenges and Discoveries</h3>
                        <p>The main challenge was understanding asynchronous JavaScript code. However, this challenge led me to discover the power of promises and async/await in managing asynchronous operations.</p>
                    </div>
                    <div class="week-summary__summary">
                        <h3>Week Summary</h3>
                        <p>Overall, the week was highly productive. I have a better grasp of JavaScript basics and SQL database management, laying a strong foundation for more advanced topics in the coming weeks.</p>
                    </div>
                    <figure class="week-summary__figure">
                        <img src="/images/week1.png" alt="Week 1 Highlights" class="week-summary__image"/>
                            <figcaption>Coding Session in Progress</figcaption>
                    </figure>
                    <h2 class="week-summary__title">Week 2: CSS & Relational Databases</h2>
                    <div class="week-summary__content">
                        <div class="week-summary__sql-container">
                            <h3>Data Types - SQL</h3>
                            <p>Explored various SQL data types, including INT, FLOAT, DECIMAL, CHAR, VARCHAR, DATE, and BOOLEAN, understanding their specific uses and limitations. Reference: <a href="https://www.w3schools.com/sql/sql_datatypes.asp"  target="_blank" rel="noopener noreferrer">SQL Data Types at W3Schools</a>.</p>
                            <h4>Sample SQL Commands:</h4>
                            <p>Demonstrated creating and inserting data into a 'Members' table with SQL commands, reinforcing the practical application of SQL data types in database design and management.</p>
                        </div>
                        <div class="week-summary__css-container">
                            <h3>CSS Enhancements and Properties</h3>
                            <p>Dived into CSS, exploring properties such as Transform, Box Shadow, Position, Background, Flexbox, Grid Layout, Transitions, and Media Queries. These properties are crucial for enhancing the visual appeal, layout, and responsiveness of web pages.</p>
                        </div>
                    </div>
                    <button type="button" class="week-summary__button" onclick="location.href='./pages/week2.html'">Week 2</button></div>
                <article class="week-summary" id="week-3">
                    <h2 class="week-summary__title">Week 3 - HTML, CSS & Relational Databases</h2>
                    <div class="week-summary__content">
                        <p>This week, we advanced our CSS skills with a comprehensive study of Flexbox, mastering the art of alignment and responsive design. Concurrently, we delved into the world of relational databases, understanding key concepts like data inconsistency, redundancy, and the crucial role of foreign keys. Through practical SQL exercises, we explored relationships within databases and the process of normalization to optimize database design.</p>
                    </div>
                    <button type="button" class="week-summary__button" onclick="location.href='./pages/week3.html'">Week 3</button>
                </article>
                <section class="week-summary" id="week-4">
                    <h2 class="week-summary__title">Week 4 - JS DOM & Intro to MongoDB</h2>
                    <div class="week-summary__content">
                        <p>Week 4 brought us to the doorstep of dynamic web development with an in-depth exploration of the JavaScript Document Object Model (DOM). We learned how to manipulate web pages in real-time, responding to user interactions. The introduction to MongoDB offered a shift towards NoSQL databases, emphasizing flexibility, scalability, and the powerful query capabilities inherent to MongoDB's document-oriented approach.</p>
                    </div>
                    <button type="button" class="week-summary__button" onclick="location.href='./pages/week4.html'">Week 4</button>
                </section>
                <section class="week-summary" id="week-5">
                    <h2 class="week-summary__title">Week 5 - Advanced JavaScript & NodeJS</h2>
                    <div class="week-summary__content">
                        <p>Continuing our journey, Week 5 focused on advanced JavaScript features, including ES6+ syntax, asynchronous programming with Promises and Async/Await, and NodeJS for server-side development. Practical sessions on building RESTful APIs with Express.js were conducted, highlighting the integration of MongoDB to develop full-stack applications.</p>
                    </div>
                    <button type="button" class="week-summary__button" onclick="location.href='./pages/week5.html'">Week 5</button>
                </section>
                <section class="week-summary" id="week-6">
                    <h2 class="week-summary__title">Week 6 - Connecting the Stack</h2>
                    <div class="week-summary__content">
                        <p>This week was about connecting the dots between the client and server, focusing on API requests, REST principles, and the intricacies of managing data flow between MongoDB and a NodeJS backend. We explored how to structure our applications for scalability and maintainability, diving deep into CRUD operations and effective database management strategies.</p>
                    </div>
                    <button type="button" class="week-summary__button" onclick="location.href='./pages/week6.html'">Week 6</button>
                </section>
                <section class="week-summary" id="week-7">
                    <h2 class="week-summary__title">Week 7 - Paradigms, React, intro to C#,</h2>
                    <div class="week-summary__content">
                        <p>Week 7 marked our transition into the React JS ecosystem, exploring its core concepts, component-based architecture, and state management. Through hands-on projects, we applied our knowledge of props, state, and the React lifecycle to build interactive UIs. The week concluded with an exploration of React's Virtual DOM, demonstrating its efficiency in updating the user interface.</p>
                    </div>
                    <button type="button" class="week-summary__button" onclick="location.href='./pages/week7.html'">Week 7</button>
                </section>
                <section class="week-summary" id="week-8">
                    <h2 class="week-summary__title">Week 8 - React APIs, C# & project development planning </h2>
                    <div class="week-summary__content">
                        <p>Week 8 delved into advanced React concepts, including hooks, context, and routing. </p>
                    </div>
                    <button type="button" class="week-summary__button" onclick="location.href='./pages/week8.html'">Week 8</button>
                </section>
                <section class="projects">
                    <section class="project-details">
                        <h3 class="project__title">Project Details</h3>
                    </section>
                </section>
                <section class="contact">
                    <h3 class="contact-form__title">Contact Me</h3>
                    <form class="contact-form">
                        <input type="text" placeholder="Name" class="contact-form__input" />
                            <input type="email" placeholder="Email" class="contact-form__input" />
                                <textarea placeholder="Message" class="contact-form__textarea"></textarea>
                                <button type="submit" class="contact-form__button">Send</button>
                            </form>
                        </section></div>
                    </main>
                    <Footer />
                </div>
                );
};

                export default HomePage;
