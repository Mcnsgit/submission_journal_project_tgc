import React from 'react';
import ImageDisplay from '../ImageDisplay'; // Adjust the path to where your component is located
import LiveDemo from '../liveDemo';

const Week6 = () => {
    return (
        <main>
            <div className="week-summary">
                <h2>Week 6 - JS Intermediate & MongoDB with NodeJS</h2>
                <div className="topic">
                    <h2>Topic: Connecting the stack</h2>
                    <p>Key Terms</p>
                    <ul>
                        <li>Client — the client is the person or software who uses the API. It can be a
                            developer, for example
                            you, as a developer, can use Twitter API to read and write data from Twitter,
                            create a new tweet
                            and do more actions in a program that you write. Your program will call
                            Twitter's API. The client
                            can also be a web browser. When you go to Twitter website, your browser is the
                            client who calls
                            Twitter API and uses the returned data to render information on the screen.</li>
                        <li>Resource - a resource can be any object the API can provide information about.
                            In Instagram's API,
                            for example, a resource can be a user, a photo, a hashtag. Each resource has a
                            unique identifier.
                            The identifier can be a name or a number.</li>
                    </ul>
                    <h3>API Requests</h3>
                    <ul>
                        <li>GET is used to retrieve a resource (information) from the server. This is the
                            default request
                            method</li>
                        <li>POST is used to create a new resource on the server.</li>
                        <li>PUT is used to update an existing resource on the server.</li>
                        <li>PATCH is similar to PUT request, the difference is that it only modifies parts
                            of the content of an
                            existing resource.</li>
                        <li>DELETE is used to delete a resource from the server.</li>
                    </ul>
                    <h3>API process</h3>
                    <div className="image-gallery">
                        <ImageDisplay src="../assets/images/creatingApiProcess.png" alt="API Process" />
                        <ImageDisplay src="../assets/images/mongoAtlasLogin.png" alt="MongoDB Atlas Login" />
                        <ImageDisplay src="../assets/images/nodeJsDependencies.png" alt="Node.js Dependencies" />
                    </div>
                </div>
                <ul>
                    <li>External modules or packages</li>
                    <li>Need to be installed in the node server folder</li>
                    <li>Extend its functionality or provide specific features.</li>
                    <li>Specified in a package.json file.</li>
                </ul>
                <p>When a Node.js application is installed or deployed, these dependencies are fetched
                    from online package
                    registries, such as npm (Node Package Manager), and installed along with the
                    application.</p>
                <p>Shopping List</p>
                <ul>
                    <li>MongoDB Database</li>
                    <li>Server application written in node.js</li>
                    <li>express</li>
                    <li>mongoose</li>
                    <li>HTML file</li>
                    <li>May want associated CSS as well if required</li>
                </ul>
                <div class="topic">
                    <article class="Project Management">
                        <h2>Project Management</h2>
                        <h3>Software Development Life Cycle</h3>
                        <LiveDemo src="../assets/images/developmentLifeCycle.png" alt="SDLC"></LiveDemo>
                        <h3>Analysis</h3>
                        <p>- Understand the problem that needs to be solved. How can the current
                            situation be improved?</p>
                        <p>- Study current processes, identify strengths and weaknesses.</p>
                        <p>- Understand the underpinning data</p>
                        <p>Create: Software specification.</p>
                        <h3>Design</h3>
                        <p>- Using the software specification, design a solution.</p>
                        <p>- This might involve interface designs, data dictionaries, flowcharts,
                            pseudocode, class diagrams
                            etc.</p>
                        <p>Create: Software Designs</p>
                        <h3>Development</h3>
                        <p>Create the solution using the appropriate programming languages and tools.
                        </p>
                        <h3>Testing</h3>
                        <p>Test the solution against the requirements. Does it do what the client
                            wanted?</p>
                        <p>Correct any issues found.</p>
                        <p>Create: Test log</p>
                        <h3>Deployment</h3>
                        <p>Roll the software out. This may be done in stages with a parallel 'test
                            phase' where both old and
                            new systems are run side by side so that any issue do not impact on client
                            business.</p>
                        <p>Create: snag lists.</p>
                        <h3>Maintenance</h3>
                        <p>Once the software is live, it will need to be maintained. This may involve
                            bug fixes, updates,
                            new features etc.</p>
                        <p>Create: Maintenance log.</p>
                        <h2>Agile</h2>
                        <ul>
                            <li>Concept</li>

                            <li>Determine scope</li>
                            <li>Requirements and features</li>
                        </ul>
                        <ul>
                            <li>Inception</li>
                            <li>Team assembly</li>
                            <li>Design work - mock ups</li>
                        </ul>
                        <ul>
                            <li>Iteration (construction/development)</li>
                        </ul>
                        <ul>
                            <li>Developers work on a simple functional model</li>
                            <li>Loop through feedback and refinement loops.</li>
                        </ul>
                        <ul>
                            <li>Release</li>
                            <li>QA testing</li>
                            <li>Produce final iteration and release product</li>
                        </ul>
                        <ul>

                            <li>Maintenance</li>

                            <li>Support</li>
                            <li>Resolve bugs</li>
                            <li>Training</li>
                        </ul>
                        <ul>
                            <li>Retirement</li>
                        </ul>
                        <h3>Some Approaches to Agile</h3>
                        <p>Kanban is a simple, visual means of managing projects that enables teams to
                            see the progress so far
                            and what's coming up next.</p>
                        <p>Scrum focuses on breaking a project down into sprints and only planning and
                            managing one sprint at
                            a time.</p>
                        <p>Extreme Programming (XP) was designed for Agile software development
                            projects. It focuses on
                            continuous development and customer delivery and uses intervals or sprints.
                            It also focuses on
                            Pair Programming.</p>
                        <h2>Scrum and Sprint</h2>
                        <p>Scrum team structure involves three distinct roles. The three Scrum roles
                            are:</p>
                        <ul>
                            <li>Product owner</li>
                            <li>Scrum master</li>
                            <li>Development team member</li>
                        </ul>
                        <p>These Scrum roles are often different from official job titles, meaning that
                            the development team,
                            for example, can be comprised of testers, designers, programmers, and more.
                        </p>
                        <p>Scrum teams are usually ten or less people.</p>
                        <p>For Scrum to be effective, there has to be strong communication,
                            accountability, and collaboration
                            between team members.</p>
                        <p>Transparency: Product owners need to be clear and precise about requirements.
                            The development
                            team should also be transparent about roadblocks and impediments so they can
                            be resolved
                            quickly.</p>
                        <p>Accountability: Members of the Scrum team are accountable to themselves and
                            to the delivery of
                            the final sprint goal.</p>
                        <p>Self-organization: Every member of the team should understand their role and
                            responsibilities and
                            be proactive in problem-solving.</p>
                        <h3>Meetings</h3>
                        <p>Scrum team members should understand what role they play and how their
                            participation in each Scrum
                            event brings them closer to the sprint goal and overall project goal.</p>
                        <p>The events and meetings Scrum teams attend are:</p>
                        <ul>
                            <li>Scrum sprint planning meeting occurs before every Scrum sprint.
                                Determine the goal of the
                                sprint</li>
                            <li>Daily stand-up meetings: A short event. Update the rest of the team
                                about individual
                                progress and impediments.</li>
                            <li>Scrum of Scrums meetings: Ideally, one representative from each Scrum
                                team in the
                                organization will meet to synchronize efforts, discuss
                                interdependencies, and inform each
                                other of potential cross-team impediments.</li>
                            <li>Sprint review: Review the outcome of the sprint.</li>
                            <li>Sprint retrospective: Review issues from the previous sprint. This
                                enables teams to improve
                                and overcome any process obstacles that proved tricky during the sprint
                            </li>
                        </ul>


                    </article>

                </div>
            </div>
        </main>
    );
}
export default Week6;