import React from 'react';
import Header from '../components/Header';

function Week1() {
    return (
        <div>
        <Header title='Week 1 - JavaScript Fundamentals'/>   
        <main>
            <div className="week-summary">
                <div className="topic">
                    <h2> JS Fundamentals</h2>
                    <p>
                        This week focused on JavaScript fundamentals and an introduction to databases. The key topics included data
                        types, variable and constant declaration, data structures like arrays and objects, and understanding
                        different types of loops such as for and while loops. We also touched upon database basics, SQL operations,
                        and CRUD operations in SQL databases.
                    </p>
                    <section>
                        <h3>Improvements and Achievements</h3>
                        <p>
                            I improved my understanding of JavaScript's control flow and error handling, particularly in using
                            try/catch blocks. I am most proud of successfully implementing a complex function using array methods.
                        </p>
                    </section>
                    <section>
                        <h3>Challenges and Discoveries</h3>
                        <p>
                            The main challenge was understanding asynchronous JavaScript code. However, through this challenge, I
                            discovered the power of promises and async/await in managing asynchronous operations.
                        </p>
                    </section>
                        <h3>Week Summary</h3>
                        <p>
                            Overall, the week was highly productive. I have a better grasp of JavaScript basics and SQL database
                            management, laying a strong foundation for more advanced topics in the coming weeks.
                        </p>
                </div>
                <figure className="image-code">
                <img className="image-code" src="../assets/images/week1-code.png" alt="Week 1 Code" />
                    <figcaption className="week1-image">Coding Session in Progress</figcaption>
                </figure>
            </div>
        </main>
        </div>
    );
}

export default Week1;