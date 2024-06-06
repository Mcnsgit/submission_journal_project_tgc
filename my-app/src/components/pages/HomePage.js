import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import AboutSection from "../AboutSection";
import '../../App.css';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const HomePage = () => {
    const [selectedWeek, setSelectedWeek] = useState("Week 1");

    const handleWeekChange = (event) => {
        setSelectedWeek(event.target.value);
    };

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
                                {['html5', 'css3', 'javascript', 'react', 'python', 'firebase'].map(skill => (
                                    <div key={skill} className="skills__item">
                                        <img 
                                            src={`/images/logo_${skill}_icon.png`} 
                                            alt={skill.toUpperCase()} 
                                            className="skills__image"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    <div className="weekly-summaries__container">
                        <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300 }}>
                            <InputLabel shrink htmlFor="select-week">Weekly Summaries</InputLabel>
                            <Select
                                value={selectedWeek}
                                onChange={handleWeekChange}
                                label="Weekly Summaries"
                                inputProps={{
                                    id: 'select-week',
                                }}
                            >
                                {Object.keys(weekSummaries).map((week) => (
                                    <MenuItem key={week} value={week}>
                                        {weekSummaries[week].title}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className="week-summary__container">
                        <WeekSummary selectedWeek={selectedWeek} />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

const weekSummaries = {
    "Week 1": {
        title: "Week 1: JS Fundamentals",
        summary: [
            "This week focused on JavaScript fundamentals and an introduction to databases. The key topics included data types, variable and constant declaration, data structures like arrays and objects, and understanding different types of loops such as for and while loops. We also touched upon database basics, SQL operations, and CRUD operations in SQL databases.",
            "Improvements and Achievements: I improved my understanding of JavaScript's control flow and error handling, particularly in using try/catch blocks. I am most proud of successfully implementing a complex function using array methods.",
            "Challenges and Discoveries: The main challenge was understanding asynchronous JavaScript code. However, through this challenge, I discovered the power of promises and async/await in managing asynchronous operations.",
            "Week Summary: Overall, the week was highly productive. I have a better grasp of JavaScript basics and SQL database management, laying a strong foundation for more advanced topics in the coming weeks."
        ],
        imageUrl: "../../../assets/images/week1.png",
        imageAlt: "Week 1 Highlights",
        caption: "Coding Session in Progress"
    },
    "Week 2": {
        title: "Week 2: CSS & Relational Databases",
        summary: [
            "Data Types - SQL: Explored various SQL data types, including INT, FLOAT, DECIMAL, CHAR, VARCHAR, DATE, and BOOLEAN, understanding their specific uses and limitations. Reference: SQL Data Types at W3Schools.",
            "Sample SQL Commands: Demonstrated creating and inserting data into a 'Members' table with SQL commands, reinforcing the practical application of SQL data types in database design and management.",
            "CSS Enhancements and Properties: Throughout this week, we delved into CSS by exploring various properties that enhance the visual appeal and layout of web pages. Key CSS properties we covered include: - Transform Property: Used for rotating, scaling, skewing, and moving elements. - Box Shadow: Adds shadow effects around elements. - Position: Controls the positioning of elements. - Background Property: Used for setting background images and colors for elements. - Flexbox: A layout model that allows responsive design with flexible arrangements of elements within a container. - Grid Layout: Provides a grid-based layout system for designing complex layouts. - Transitions: For creating smooth animations on CSS property changes. - Media Queries: Essential for creating responsive designs, allowing CSS to adapt to different screen sizes and devices."
        ],
        imageUrl: "/images/week2.png",
        imageAlt: "Week 2 Highlights",
        caption: "CSS and SQL in Action"
    },
    "Week 3": {
        title: "Week 3: HTML, CSS & Relational Databases",
        summary: [
            "This week, we advanced our CSS skills with a comprehensive study of Flexbox, mastering the art of alignment and responsive design. Concurrently, we delved into the world of relational databases, understanding key concepts like data inconsistency, redundancy, and the crucial role of foreign keys. Through practical SQL exercises, we explored relationships within databases and the process of normalization to optimize database design."
        ],
        imageUrl: "/images/week3.png",
        imageAlt: "Week 3 Highlights",
        caption: "HTML and CSS Mastery"
    },
    "Week 4": {
        title: "Week 4 - JS DOM & Intro to MongoDB",
        summary: [
            "Week 4 brought us to the doorstep of dynamic web development with an in-depth exploration of the JavaScript Document Object Model (DOM). We learned how to manipulate web pages in real-time, responding to user interactions. The introduction to MongoDB offered a shift towards NoSQL databases, emphasizing flexibility, scalability, and the powerful query capabilities inherent to MongoDB's document-oriented approach."
        ],
        imageUrl: "/images/week4.png",
        imageAlt: "Week 4 Highlights",
        caption: "JS DOM and MongoDB"
    },
    "Week 5": {
        title: "Week 5 - Advanced JavaScript & NodeJS",
        summary: [
            "Continuing our journey, Week 5 focused on advanced JavaScript features, including ES6+ syntax, asynchronous programming with Promises and Async/Await, and NodeJS for server-side development. Practical sessions on building RESTful APIs with Express.js were conducted, highlighting the integration of MongoDB to develop full-stack applications."
        ],
        imageUrl: "/images/week5.png",
        imageAlt: "Week 5 Highlights",
        caption: "Advanced JS and NodeJS"
    },
    "Week 6": {
        title: "Week 6 - Connecting the Stack",
        summary: [
            "This week was about connecting the dots between the client and server, focusing on API requests, REST principles, and the intricacies of managing data flow between MongoDB and a NodeJS backend. We explored how to structure our applications for scalability and maintainability, diving deep into CRUD operations and effective database management strategies."
        ],
        imageUrl: "/images/week6.png",
        imageAlt: "Week 6 Highlights",
        caption: "Connecting the Stack"
    },
    "Week 7": {
        title: "Week 7 - Paradigms, React, intro to C#",
        summary: [
            "Week 7 marked our transition into the React JS ecosystem, exploring its core concepts, component-based architecture, and state management. Through hands-on projects, we applied our knowledge of props, state, and the React lifecycle to build interactive UIs. The week concluded with an exploration of React's Virtual DOM, demonstrating its efficiency in updating the user interface."
        ],
        imageUrl: "/images/week7.png",
        imageAlt: "Week 7 Highlights",
        caption: "React and C#"
    },
    "Week 8": {
        title: "Week 8 - React APIs, C# & project development planning",
        summary: [
            "Week 8 delved into advanced React concepts, including hooks, context, and routing. It also covered C# basics and project development planning."
        ],
        imageUrl: "/images/week8.png",
        imageAlt: "Week 8 Highlights",
        caption: "React APIs and C#"
    }
    // Add more week summaries as needed
};

const WeekSummary = ({ selectedWeek }) => {
    const { title, summary, imageUrl, imageAlt, caption } = weekSummaries[selectedWeek];

    return (
        <div className="week-summary">
            <h2 className="week-summary__title">{title}</h2>
            <div className="week-summary__content">
                {summary.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
                <img src={imageUrl} alt={imageAlt} className="week-summary__image" />
                <p className="week-summary__caption">{caption}</p>
            </div>
        </div>
    );
};

export default HomePage;
