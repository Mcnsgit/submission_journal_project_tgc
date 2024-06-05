import React from 'react';

function Week5() {
    return (
        <main>
            <div className="week-summary">
                <h2 className="week-summary__title">Week 5: JS Intermediate & Development Lifecycle / NodeJS</h2>
                <div className="topic">
                    <article>
                        <h3>JavaScript Execution Context</h3>
                        <h4>JavaScript Engine:</h4>
                        <ul>
                            <li>Single threaded - only one task at a time</li>
                            <li>Every browser has its own JavaScript Engine</li>
                            <li>They need an engine to understand JavaScript code</li>
                            <li>It interprets the code, and then executes it</li>
                        </ul>
                        <h4>Execution Context:</h4>
                        <ul>
                            <li>The Execution Context handles the execution of the code</li>
                            <li>During runtime, the parser parses the source code and allocates memory for variables and functions</li>
                            <li>The source code is then generated and executed</li>
                        </ul>
                        <p>
                            <a href="https://www.freecodecamp.org/news/how-javascript-works-behind-the-scene-javascript-execution-context/" target="_blank" rel="noopener noreferrer">freeCodeCamp - How JavaScript Works Behind the Scene</a>
                        </p>
                        <h4>Call Stack</h4>
                        <ul>
                            <li>The Call Stack is a data structure that uses the Last In, First Out (LIFO) principle to temporarily store and manage function invocation (call)</li>
                            <li>When a function is invoked (called), the function, its parameters, and variables are pushed into the call stack to form a stack frame</li>
                            <li>When the function returns, the stack frame is popped from the stack</li>
                        </ul>
                        <div className="Task-container">
                            <h5> Tasks</h5>
                            <p>
                                Add to the call stack the maximum and correct calling of the functions that were created. Then write the order of the functions in the call stack
                            </p>
                            <div className="Task">
                                <h4>Task 1</h4>
                                <pre>
                                    {`// Stack funcB() , Global Execution Context
let funcA = () => {
    return 'funcA'
}

let funcB = () => {
    return 'funcB'
}

let funcC = () => {
    return 'funcC'
}

let funcD = () => {
    return 'funcD'
}


let which1 = funcB()
let which2 = funcC()
let which3 = funcD()
let which4 = funcA()

//Answer: Stack = funcA(), funcD(), funcC(), funcB(), funcA() , Global Execution Context`}
                                </pre>
                            </div>
                            <div className="Task">
                                <h4>Task 2</h4>
                                <pre>
                                    {`let checker = (input) => {
    if (input.length <= 5){
        return '6 characters or more'
    } else {
        return input
    }
}

let multiply = (num) => {
    return num * 9/5
}

let adder = (num) => {
    return multiply(num) + 32
}

let rand = () => {
    return Math.round(Math.random()) > 0 ? true : false
}

let option = () => {
    let decision = rand()
    if (decision) {
        return 'decision is yes'
    } else {
        return 'decision is no'
    }
}

let name = checker('Aragon')
let pass = option()
let convert = adder(15)
let multi = multiply(4)
let nextStage = rand()

//Answer: Stack = rand(), multiply(), multiply(), Adder(),rand(),Option(), chacker(), Globag Execution Context`}
                                </pre>
                            </div>
                            <div className="topic">
                                <h2> Databases with MongoDB</h2>
                                <h3> MongoDB Terms/Concepts</h3>
                                <ul>
                                    <li> <mark>Database</mark> - A collection of data</li>
                                    <li> <mark>Collection</mark> - A table of data</li>
                                    <li> <mark>Document</mark> - A row in a collection</li>
                                    <li> <mark>Field</mark> - A column in a row</li>
                                </ul>
                                <table>
                                    <tr>
                                        <th>SQL Terms/Conceptd</th>
                                        <th>MongoDB Terms/Concepts</th>
                                    </tr>
                                    <tr>
                                        <td>Database</td>
                                        <td>Database</td>
                                    </tr>
                                    <tr>
                                        <td>Table</td>
                                        <td>Collection</td>
                                    </tr>
                                    <tr>
                                        <td>Row</td>
                                        <td>Document or BSON documents </td>
                                    </tr>
                                    <tr>
                                        <td>Column</td>
                                        <td>Field</td>
                                    </tr>
                                    <tr>
                                        <td>Primary Key</td>
                                        <td>Primary Key</td>
                                    </tr>
                                    <tr>
                                        <td>table joins</td>
                                        <td>$lookup, embedded documents</td>
                                    </tr>
                                </table>
                                <h3>Arrays in MongoDB </h3>
                                <h4> Example: </h4>
                                <pre>
                                    {`"db.cars.insertOne({
Model: "C'eed",
Version: "GT Line",
Fuel:
    ["Petrol", "Hybrid"],
Colours:
    ["Metallic Bronze",
    "Metallic Blue",
    "White",
    "Black"]
)"`}
                                </pre>
                                <h4>Querying arrays</h4>
                                <p> The following example queries for all documents where the field 'Fuel' value is an array with exactly two elements in the specified order:</p>
                                <pre>{`db.cars.find( { Fuel: ["Petrol", "Hybrid"] } )`}</pre>
                                <h4>Querying arrays using $all</h4>
                                <p> The following example queries for all documents where the field 'Fuel' value is an array with exactly two elements in the specified order:</p>
                                <pre>{`db.cars.find( { Fuel: { $all: ["Petrol", "Hybrid"] } } )`}</pre>
                                <h4> Querying in Compass</h4>
                                <img src="../assets/images/queryingInCompass.png" alt="compass"></img>
                                    <h3> Operators</h3>
                                    <p>
                                        The following operators can be used in queries to compare values:

                                        <ul>
                                            <li> <mark>$eq</mark> - Equal to</li>
                                            <li> <mark>$gt</mark> - Greater than</li>
                                            <li> <mark>$gte</mark> - Greater than or equal to</li>
                                            <li> <mark>$lt</mark> - Less than</li>
                                            <li> <mark>$lte</mark> - Less than or equal to</li>
                                            <li> <mark>$ne</mark> - Not equal to</li>
                                            <li> <mark>$in</mark> - In</li>
                                        </ul>
                                    </p>
                                    <h3> Aggregation</h3>
                                    <p>
                                        Aggregation operations allow you to group, sort, perform calculations, analyze data, and much more.
                                        Aggregation pipelines can have one or more "stages". The order of these stages are important. Each stage acts upon the results of the previous stage.
                                    </p>
                                    <h4> Example - Count</h4>
                                    <pre>
                                        {`Vehicles db.cars.aggregate([{$count: "Model"}]) [ { Model: 6 } ]   
Vehicles db.cars.aggregate([{$group: {_id: "$Model"}, count: {$sum: 1}}])`}
                                    </pre>
                                    <h4> Example - Grouping</h4>
                                    <pre>
                                        {`db.Books.aggregate([{$group: {_id: "$genre"}}])`}
                                    </pre>
                                    <h4> Example - Sorting</h4>
                                    <pre>
                                        {`db.Books.aggregate([ {$sort: {"genre": -1}}])

-1 : descending
+1 : ascending`}
                                    </pre>
                            </div>
                        </div>
                        <div className="reference-links">
                            <h5>Reference Links</h5>
                            <ul>
                                <li><a href="https://www.freecodecamp.org/news/how-javascript-works-behind-the-scene-javascript-execution-context/" target="_blank" rel="noopener noreferrer">freeCodeCamp - How JavaScript Works Behind the Scene</a></li>
                                <li><a href="https://dev.to/bipinrajbhar/how-javascript-works-web-apis-callback-queue-and-event-loop-2p3e" target="_blank" rel="noopener noreferrer">Dev.to - How JavaScript Works Web APIs, Callback Queue and Event Loop</a></li>
                                <li><a href="https://www.freecodecamp.org/news/javascript-async-await/" target="_blank" rel="noopener noreferrer">freeCodeCamp - JavaScript Async/Await</a></li>
                                <li><a href="https://www.geeksforgeeks.org/what-is-the-call-stack-in-javascript/" target="_blank" rel="noopener noreferrer">GeeksforGeeks - "What is the Call Stack in JavaScript"</a></li>
                                <li><a href="https://www.w3schools.com/mongodb/mongodb_aggregations_intro.php" target="_blank" rel="noopener noreferrer">W3Schools - MongoDB Aggregation</a></li>
                            </ul>
                        </div>
                    </article>
                </div>
            </div>
        </main>
        
    )
;} 
    export default Week5;
