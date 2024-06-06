import React from 'react';

function Week8() {
    return (
        <main>
            <div className="week-summary">
                <h2 className="week-summary__title">Week 8: Advanced React Techniques, C# Integration, and Deployment</h2>
                <div className="week-summary__content">
                    <div className="topic">
                        <h3>Fetching Data and Error Handling in React</h3>
                        <p>Learned to enhance React applications by fetching data from APIs using the Fetch API combined with async/await syntax. Implemented robust error handling mechanisms to improve user experience during API data retrieval failures.</p>
                    </div>

                    <div className="topic">
                        <h3>Integrating React with C# Backend Services</h3>
                        <p>Explored integration techniques between React and C# to create dynamic, full-stack applications. Projects included a Dice Roller app and a Distance Converter, highlighting the process of connecting React frontend with C# backend services.</p>
                        <ul>
                            <li>Dice Roller C# App - A console application simulating dice rolls, showcasing basic C# functionality.</li>
                            <li>Distance Converter - Demonstrated unit conversion logic in C#, accessed through React components.</li>
                        </ul>
                    </div>

                    <div className="topic">
                        <h3>Deployment Techniques for React Applications</h3>
                        <p>Covered the deployment process for React applications using services like GitHub Pages and Netlify, ensuring our React projects are accessible online. Addressed common deployment challenges and best practices for a successful launch.</p>
                    </div>
                </div>
                <div className="topic">
                <div className="project-details">
                    <h3>Projects and Exercises</h3>
                    <p>Applied the week's concepts in a series of hands-on projects and exercises, further cementing our understanding of React's advanced features, backend integration with C#, and deployment strategies.</p>
                    <ul>
                        <li><strong>Add Track:</strong> Implemented a React form to add music tracks to a database, practicing Fetch API usage.</li>
                        <li><strong>Search Tracks:</strong> Developed a search interface in React to query and display tracks from the database.</li>
                    </ul>
                    <a href="tech-test-addTrack.html" className="button">View Add Track Project</a>
                    <a href="tech-test-Index.html" className="button">View Search Track Project</a>
                </div>
                </div>
            </div>
        </main>
    );
}

export default Week8;