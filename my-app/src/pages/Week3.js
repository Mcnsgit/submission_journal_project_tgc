
import React from 'react';
import PageComponent from '../components/PageComponent';

function Week3() {
    return (
        <div>

            <PageComponent>
                <section class="week-summary" id="week-3">
                    <h2 class="week-summary__title">Week 3 - HTML, CSS & Relational Databases</h2>
                    <div class="topic">
                        <h3 class="topic__title">CSS Flexbox and Alignment</h3>
                        <p class="topic__description">In Week 3, we continued our journey with CSS, focusing on learning the Flexbox layout model and understanding the nuances of CSS alignment properties.</p>
                        <div class="flexbox-summary">
                            <ul class="flexbox-summary__list">
                                <li class="flexbox-summary__item"><strong>Flexbox:</strong>
                                    Flexbox, or the Flexible Box Layout, is a one-dimensional layoutmethod
                                    for
                                    laying out items in rows or columns. We learned how to create flexible and responsive web
                                    layouts</li>
                            </ul>
                            <div class="Flexbox">
                                <h3 class="flexbox-summary__title">Flexbox</h3>
                                <ul class="flexbox-summary__list">
                                    <li class="flexbox-summary__item"><strong>Introduction:</strong> Explored the concept of Flexbox and its benefits in
                                        creating flexible
                                        and responsive layouts.</li>
                                    <li class="flexbox-summary__item"><strong>Flex Container:</strong> Discussed the properties of the flex container such
                                        as
                                        <code class="code-block__content">display: flex</code>, <code class="code-block__content">flex-direction</code>, <code class="code-block__content">flex-wrap</code>, and
                                        <code class="code-block__content">justify-content</code> which define how flex items are laid out in the flex
                                        container.
                                    </li>
                                    <li class="flexbox-summary__item"><strong>Flex Items:</strong> Explored flex item properties including
                                        <code class="code-block__content">flex-grow</code>,
                                        <code class="code-block__content">flex-shrink</code>, and <code class="code-block__content">flex-basis</code> to control the sizing and
                                        ordering of items
                                        within a flex container.
                                    </li>
                                    <li class="flexbox-summary__item"><strong>CSS Alignment:</strong> Learned about various CSS properties used for
                                        aligning elements, such as
                                        <code class="code-block__content">align-items</code>, <code class="code-block__content">align-self</code>, and
                                        <code class="code-block__content">align-content</code>, crucial for
                                        precise positioning within flex containers.</li>
                                    <li class="flexbox-summary__item"><strong>Responsive Design:</strong> Applied Flexbox in practical scenarios to create
                                        responsive web designs that adapt to different screen sizes, enhancing the user experience.</li>
                                    <li class="flexbox-summary__item"><strong>Real-world Projects:</strong> Implemented Flexbox in several mini-projects,
                                        understanding its importance in modern web development and its role in creating fluid, scalable layouts.
                                    </li>
                                </ul>
                                <p class="flexbox-summary__conclusion">The knowledge gained this week has been pivotal in understanding the layout challenges
                                    and how Flexbox
                                    provides elegant solutions, making web design more efficient and visually appealing.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="topic">
                    <h3 class="topic__title">Relational Databases</h3>
                    <h4 class="topic__subtitle">Data inconsistency</h4>
                    <p class="topic__description">Occurs when identical data in different locations are not synchronized, leading to format differences or mismatches.</p>
                    <h4 class="topic__subtitle">Data redundancy</h4>
                    <p class="topic__description">Refers to the repetition of the same data in multiple locations.</p>

                    <h4 class="topic__subtitle">Foreign key</h4>
                    <p class="topic__description">A field or a combination of fields in a table that establishes a link between data in two tables, controlling the data stored in the foreign key table.</p>

                    <h4 class="topic__subtitle">Advantages</h4>
                    <ul class="topic__list">
                        <li class="topic__item">Ease of management and scalability.</li>
                        <li class="topic__item">Flexibility in data modification without altering the database structure.</li>
                        <li class="topic__item">Reduced data redundancy and inconsistency.</li>
                        <li class="topic__item">Enhanced security with selective access controls.</li>
                    </ul>

                    <h4 class="topic__subtitle">Types of Relational Databases</h4>
                    <ul class="topic__list">
                        <li class="topic__item">One-to-one: A single record in one table is linked to a single record in another.</li>
                        <li class="topic__item">One-to-many: A record in one table associates with multiple records in another.</li>
                        <li class="topic__item">Many-to-many: Multiple records in one table associate with multiple records in another.</li>
                    </ul>

                    <h5 class="topic__subsubtitle">Many-to-many Relationship Challenges</h5>
                    <p class="topic__description">Managing this relationship requires a junction table to link the two tables, as the database can't directly reference the relationship.</p>

                    <h6 class="topic__subsubsubtitle">Example of Many-to-many Relationship</h6>
                    <p class="topic__description">A customer may have multiple orders, each order can contain multiple products, and each product can be in multiple orders.</p>

                    <h4 class="topic__subtitle">Normalization</h4>
                    <p class="topic__description">A process to optimize database design by dividing tables to minimize redundancy and dependency.</p>

                    <h5 class="topic__subsubtitle">First Normal Form - 1NF</h5>
                    <ul class="topic__list">
                        <li class="topic__item">Atomicity: A single cell holds a single value.</li>
                        <li class="topic__item">Uniqueness: Each row is unique with a primary key.</li>
                        <li class="topic__item">No duplicate rows or columns.</li>
                    </ul>

                    <h5 class="topic__subsubtitle">Second Normal Form - 2NF</h5>
                    <ul class="topic__list">
                        <li class="topic__item">Must be in 1NF.</li>
                        <li class="topic__item">No partial dependency; non-key attributes fully depend on the primary key.</li>
                    </ul>

                    <h5 class="topic__subsubtitle">Third Normal Form - 3NF</h5>
                    <ul class="topic__list">
                        <li class="topic__item">Meets 2NF requirements.</li>
                        <li class="topic__item">No transitive functional dependency.</li>
                    </ul>

                    <p class="topic__description">Normalization Levels:</p>
                    <ul class="topic__list">
                        <li class="topic__item">1NF: Primary key defined, no duplicates.</li>
                        <li class="topic__item">2NF: Already in 1NF, full dependency on primary key.</li>
                        <li class="topic__item">3NF: Meets 2NF, all attributes only depend on the primary key.</li>
                    </ul>
                </div>
                <div class="topic">

                    <h3 class="topic__title">SQL - Working with Multiple Tables</h3>
                    <p class="topic__description">Exploring SQL queries with multiple tables, focusing on JOIN operations and data normalization.</p>
                    <p class="topic__description"> This code creates two tables, "members" and "bows", and inserts data into them</p>

                    <div class="code-block">
                        <code class="code-block__content">
                            CREATE TABLE members (
                            memberID VARCHAR(6),
                            surname VARCHAR (20),
                            firstName VARCHAR (20),
                            member Type VARCHAR (10),
                            BowID INT
                            );
                        </code>
                    </div>
                    <div class="code-block">
                        <code class="code-block__content">
                            CREATE TABLE bows (
                            bowID INT,
                            bowType VARCHAR (20),
                            bowDraw INT
                            );
                        </code>
                    </div>
                    <div class="code-block">
                        <code class="code-block__content">
                            INSERT INTO members VALUES
                            ('52367', 'Mather', 'Paul', 'Senior', 22),
                            ('52157', 'Adamson', 'Sarah', 'Senior', 23),
                            ('31056', 'Williams', 'Ashley', 'Junior', 24),
                            ('50201', 'Mahr', 'Rashid', 'Senior', 25);
                        </code>
                    </div>
                    <div class="code-block">
                        <code class="code-block__content">
                            INSERT INTO bows
                            VALUES
                            (22, 'Longbow', 42),
                            (23, 'Recurve', 30),
                            (24, 'Recurve', 16),
                            (25, 'Compound', 50);
                        </code>
                    </div>
                    <p class="topic__description">The code performs a SELECT query to retrieve the surnames of members and the types of bows they have. It uses the INNER JOIN keyword to join the "members" and "bows" tables based on the bowID column. The result will be the surnames from the "members" table and the bow types from the "bows" table for the matching bowIDs.
                    </p>
                    <div class="code-block">
                        <code class="code-block__content">
                            SELECT members. surname, bows. bowType
                            FROM members
                            INNER JOIN bows ON members. bowID = bows .bowID
                        </code>
                    </div>
                </div>
            </PageComponent>
        </div>
    );
}

export default Week3;