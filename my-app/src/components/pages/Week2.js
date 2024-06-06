import React from 'react';
import Header from '../Header';
// import PageComponent from '../PageComponent';
import CodeSnippet from '../CodeSnippet';
import Topic from '../Topic.js';


const Week2 = () => (
    <div>
        <Header title='Week 2' /> 
        <main>
            <WeekSummary />
        </main>
    </div>
);

const WeekSummary = () => (
    <div className="week-summary">
        <h2 className="week-summary__title">CSS & Relational Databases</h2>
        <div className="week-summary__content">
            <Topic 
                title="Data Types - SQL"
                content={`
                    <ul>
                        <li><strong>INT(size):</strong> Integer. Whole numbers. Parameter specifies the maximum display width (up to 255).</li>
                        <li><strong>FLOAT(p):</strong> A floating-point number. Can hold decimal places.</li>
                        <li><strong>DECIMAL(size, d):</strong> Fixed decimal point number. The total number of digits is specified in 'size', and the number of digits after the decimal point in 'd'. Maximum 'size' is 65, and 'd' is 30.</li>
                        <li><strong>CHAR(size):</strong> A fixed-length string. The 'size' parameter specifies the column length in characters, up to 255.</li>
                        <li><strong>VARCHAR(size):</strong> A variable-length string. The 'size' parameter specifies the maximum string length in characters, up to 65535.</li>
                        <li><strong>DATE:</strong> A date. Format: YYYY-MM-DD. Supported range is '1000-01-01' to '9999-12-31'.</li>
                        <li><strong>BOOLEAN:</strong> True or False.</li>
                    </ul>
                `}
            />
            <CodeSnippet 
                className="code-snippet"
                
                language="sql"
                title="Members Table"
                code={`
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
                `}
            />
            <Topic 
                title="CSS Enhancements and Properties"
                content={`
                    <ul>
                        <li><strong>Transform Property:</strong> Used for rotating, scaling, skewing, and moving elements.</li>
                        <li><strong>Box Shadow:</strong> Adds shadow effects around elements.</li>
                        <li><strong>Position:</strong> Controls the positioning of elements.</li>
                        <li><strong>Background Property:</strong> Used for setting background images and colors for elements.</li>
                        <li><strong>Flexbox:</strong> A layout model that allows responsive design with flexible arrangements of elements within a container.</li>
                        <li><strong>Grid Layout:</strong> Provides a grid-based layout system for designing complex layouts.</li>
                        <li><strong>Transitions:</strong> For creating smooth animations on CSS property changes.</li>
                        <li><strong>Media Queries:</strong> Essential for creating responsive designs, allowing CSS to adapt to different screen sizes and devices.</li>
                    </ul>
                `}
            />
        </div>
    </div>
);



// const CodeBlock = ({ content }) => (
//     <div className="code-block">
//         <code className="code-block__content">
//             {content}
//         </code>
//     </div>
// );

export default Week2;
