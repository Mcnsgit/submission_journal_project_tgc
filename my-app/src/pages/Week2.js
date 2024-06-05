import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Week2() {
    return (
            <div>
        <Header title='Week 2' /> 
        <main>
            <div className="week-summary">
                <h2 class="week-summary__title">CSS & Relational Databases</h2>
                <div class="week-summary__content">
                    <div class="topic">
                        <h3 class="topic__title">Data Types - SQL</h3>
                        <p class="topic__content">
                            <b>Reference:
                                <a href="https://www.w3schools.com/sql/" target="_blank" rel="noopener noreferrer" class="topic__link">W3Schools<Link to="/sql-data-types" class="topic__link">SQL Data Types</Link>
                                    SQL Data Types at W3Schools
                                </a>
                            </b>
                        </p>
                        <ul class="topic__list">
                            <li class="topic__item"><strong>INT(size):</strong> Integer. Whole numbers. Parameter specifies the maximum display width (up to 255).</li>
                            <li class="topic__item"><strong>FLOAT(p):</strong> A floating-point number. Can hold decimal places.</li>
                            <li class="topic__item"><strong>DECIMAL(size, d):</strong> Fixed decimal point number. The total number of digits is specified in 'size', and the number of digits after the decimal point in 'd'. Maximum 'size' is 65, and 'd' is 30.</li>
                            <li class="topic__item"><strong>CHAR(size):</strong> A fixed-length string. The 'size' parameter specifies the column length in characters, up to 255.</li>
                            <li class="topic__item"><strong>VARCHAR(size):</strong> A variable-length string. The 'size' parameter specifies the maximum string length in characters, up to 65535.</li>
                            <li class="topic__item"><strong>DATE:</strong> A date. Format: YYYY-MM-DD. Supported range is '1000-01-01' to '9999-12-31'.</li>
                            <li class="topic__item"><strong>BOOLEAN:</strong> True or False.</li>
                        </ul>
                        <div class="code-block">
                            <code class="code-block__content">
                                CREATE TABLE Members (
                                MemberNumber int,
                                LastName varchar(255),
                                FirstName varchar(255),
                                Address varchar(255),
                                Town varchar(255),
                                PostCode varchar(255)
                                );
                                INSERT INTO Members VALUES
                                (1, 'Mather', 'Paul', '123 Tutor Street', 'Manchester', 'M20 Y2B'),
                                (2, 'Clark', 'Phillip', '18 Lyon Grove', 'Manchester', 'M9 J77'),
                                (3, 'Wilson', 'Sarah', 'Oak House, Oakwood Lane', 'Stockport', '5K3 9JJ');
                            </code>
                        </div>
                    </div>
                    <div class="topic">
                        <h3 class="topic__title">CSS Enhancements and Properties</h3>
                        <p class="topic__content">Throughout this week, we delved into CSS by exploring various properties that enhance the visual appeal and layout of web pages. Key CSS properties we covered include:</p>
                        <ul class="topic__list">
                            <li class="topic__item"><strong>Transform Property:</strong> Used for rotating, scaling, skewing, and moving elements.</li>
                            <li class="topic__item"><strong>Box Shadow:</strong> Adds shadow effects around elements.</li>
                            <li class="topic__item"><strong>Position:</strong> Controls the positioning of elements.</li>
                            <li class="topic__item"><strong>Background Property:</strong> Used for setting background images and colors for elements.</li>
                            <li class="topic__item"><strong>Flexbox:</strong> A layout model that allows responsive design with flexible arrangements of elements within a container.</li>
                            <li class="topic__item"><strong>Grid Layout:</strong> Provides a grid-based layout system for designing complex layouts.</li>
                            <li class="topic__item"><strong>Transitions:</strong> For creating smooth animations on CSS property changes.</li>
                            <li class="topic__item"><strong>Media Queries:</strong> Essential for creating responsive designs, allowing CSS to adapt to different screen sizes and devices.</li>    
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    </div>
    );
}

export default Week2;