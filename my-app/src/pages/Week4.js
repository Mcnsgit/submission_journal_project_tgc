import React from 'react';

function Week4() {
    return (
        <main>
            <section className="week-summary">
                <h2>JS DOM & Intro to MongoDB</h2>
                <div className="topic">
                    <h2>JS DOM</h2>
                    <h3>What is the DOM?</h3>
                    <ul>
                        <li>DOM = Document Object Model</li>
                        <li>A representation of a webpage that JS can use.</li>
                        <li>Changes that JS makes to the DOM alter the webpage.</li>
                    </ul>
                    <h3>Tree-like structure</h3>
                    <p>• A tree of objects<br/>• Each object represents an element on the page<br/>• Allows JavaScript to access and manipulate the different elements</p>
                    <img src="/assets/images/tree_like_structure.png" alt="DOM Tree" />
                    <h3>What can we do?</h3>
                    <p>• Selecting Elements, Reading/Changing Elements, Responding to User Events</p>
                    <h3>Document Object</h3>
                    <p>• Document is a global object representing the HTML and content of the page<br/>• With JS, you can select and control elements of the currently loaded webpage.<br/>e.g., Change the heading to a different colour</p>
                </div>
                <div className="topic">
                    <div className="dom-code">
                        <h3>Event Listeners</h3>
                        <pre>
                            {`const heading = document.getElementById('heading');
const input = document.getElementById('input');
const button = document.getElementById('button');
const image = document.getElementById('image');

button.addEventListener('click', () => {
    image.src = input.value;
});`}
                        </pre>
                    </div>
                </div>
                <div className="topic">
                    <h2>SQL vs noSQL</h2>
                    <p>SQL is a 'declarative' programming language used to manage and manipulate data stored in relational databases.</p>
                    <p>SQL is used to create, modify, and query relational databases, which organize data into tables consisting of rows and columns</p>
                    <p>SQL is a Standard language used across different database management systems (DBMS) such as; Oracle, MySQL, Microsoft SQL Server, PostgreSQL. Widely used in various industries and applications:
                        <ul>
                            <li>Banking systems</li>
                            <li>Healthcare</li>
                            <li>e-commerce websites</li>
                        </ul>
                    </p>
                    <div>
                        <h3>MongoDB</h3>
                        <ul>
                            <li>Open Source</li>
                            <li>Uses JSON-like documents</li>
                            <li>Highly Scalable and Flexible</li>
                            <li>No pre-defined schemas</li>
                            <li>Tables and data structures are mutable</li>
                            <li>Can run on a single server, or can be distributed</li>
                        </ul>
                    </div>
                    <label htmlFor="mongosh">Mongo Shell:</label>
                    <textarea name="mongosh" id="mongosh" placeholder="Enter your MongoDB commands here"></textarea>
                    <h3>Syntax</h3>
                    <h4>Looking at the data</h4>
                    <pre>
                        {`select database: use <database name>
find data: db.<collection>.find()

add a record: db.author.insertOne({data})

Adding multiples: db.author.insertMany([{document 1}, {document 2}])

Create a new collection: db.createCollection('<collection name>')
e.g: db.createCollection("Books")

Classified: Internal Personal and Confidential

Update:

The MongoDB shell provides the following methods to update documents in a collection:

To update a single document:
• To update multiple documents:
• To replace a document: db.collectionName.updateOne()
db.collectionName.updateMany()
db.collectionName.replaceOne()

Library> db.author.updateOne({surname: "Feist"}, {$set: {DOB: "23/12/1945"}})

Delete

• To delete multiple documents: db.collectionName.deleteMany().
• To delete a single document: db.collectionName.deleteOne().

db.author.deleteOne({surname: "Feist"})

References:
https://www.mongodb.com/docs/manual/
https://www.w3schools.com/mongodb/index.php`}
                    </pre>
                </div>
            </section>
        </main>
    );
}

export default Week4;
