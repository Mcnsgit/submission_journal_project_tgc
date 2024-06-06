import React from 'react';
import Header from '../Header';
import Footer from '../Footer.js';
import Topic from '../Topic';
// import PageComponent from '../PageComponent';
const Week1 = () => (
    <>
        <Header title='Week 1 - JavaScript Fundamentals'/>    
        <main>
            <WeekSummary />
            <Footer/>
        </main>
    </>
);

const WeekSummary = () => (
    <div className="week-summary">
        <div className="week-summary__title">

<h2>
    JavaScript Fundamentals    </h2>
        </div>
        <Topic 
            content="This week focused on JavaScript fundamentals and an introduction to databases. The key topics included data
            types, variable and constant declaration, data structures like arrays and objects, and understanding
            different types of loops such as for and while loops. We also touched upon database basics, SQL operations,
            and CRUD operations in SQL databases."
        />
        <Section 
            title="Improvements and Achievements"
            content="I improved my understanding of JavaScript's control flow and error handling, particularly in using
            try/catch blocks. I am most proud of successfully implementing a complex function using array methods."
        />
        <Section 
            title="Challenges and Discoveries"
            content="The main challenge was understanding asynchronous JavaScript code. However, through this challenge, I
            discovered the power of promises and async/await in managing asynchronous operations."
        />
        <Summary 
            content="Overall, the week was highly productive. I have a better grasp of JavaScript basics and SQL database
            management, laying a strong foundation for more advanced topics in the coming weeks."
        />
        <figure className="image-code">
            <img className="image-code" src="../assets/images/week1-code.png" alt="Week 1 Code" />
            <figcaption className="week1-image">Coding Session in Progress</figcaption>
        </figure>
    </div>
);


const Section = ({ title, content }) => (
    <section>
        <h3>{title}</h3>
        <p>{content}</p>
    </section>
);

const Summary = ({ content }) => (
    <section>
        <h3>Week Summary</h3>
        <p>{content}</p>
    </section>
);

export default Week1;
