import React from 'react';
import CodeSnippet from '../components/CodeSnippet';


const Week7 = () => {
    const imageSrc = '../assets/images/pascal.png'; // Replace with the correct path

    // Code snippets as string literals
    const divExample = "<div>Hello React</div>";
    const welcomeComponentExample = "function Welcome(props) { return <h1>Hello, {props.name}</h1>; }";
    const greetingComponentExample = "function Greeting(props) { return <h1>Hello, {props.name}!</h1>; }";
    const appComponentExample = "function App() { return (<div><Welcome name=\"Sara\" /></div>); }";
    const elementExample = "const element = <h1>Hello, world</h1>; ReactDOM.render(element, document.getElementById('root'));";


    return (
        <div>
            <main>
                <div className="week-summary">
                    <h2>Introduction to React JS</h2>
                    <div className="topic">
                        <h3>Understanding React JS</h3>
                        <p>This week, we embarked on exploring React JS, focusing on its role in creating interactive user interfaces (UI). We learned the significance of components and props in building reusable and manageable code structures.</p>
                        <CodeSnippet codeString={divExample} language="jsx" />
                    </div>
                    <div className="topic">
                        <h3>Components in React</h3>
                        <p>Components are the building blocks of any React application, and we dove deep into understanding how to write our own. We discussed the differences between class components and functional components.</p>
                        <CodeSnippet codeString={welcomeComponentExample} language="jsx" />
                    </div>
                    <div className="topic">
                        <h3>Introduction to Props</h3>
                        <p>Props (short for properties) are a way of passing data from parent to child components, making it possible to dynamically render content.</p>
                        <CodeSnippet codeString={greetingComponentExample} language="jsx" />
                    </div>
                    <div className="topic">
                        <h3>React's Virtual DOM Explained</h3>
                        <p>We explored how React creates a virtual DOM to efficiently update the user interface by comparing changes in the virtual DOM with the actual DOM.</p>
                        <CodeSnippet codeString={elementExample} language="jsx" />
                    </div>
                    <div className="topic">
                        <h3>Component Composition and Reusability</h3>
                        <p>React encourages the composition of components to create complex UIs while maximizing reusability and manageability.</p>
                        <CodeSnippet codeString={appComponentExample} language="jsx" />
                    </div>
                    <section class="paradigms">
                        <h2>Paradigms</h2>
                        <div class="topic">
                            <h3>Imperative</h3>
                            <p><b>• Procedural</b> •  which groups instructions into procedures,</p>
                            <p> <b>•Object-oriented</b> which groups instructions with the part of the state they
                                operate on</p>
                            <h3>Declarative</h3>
                            <p><b>• Functional</b> in which the desired result is declared as the value of a series
                                of function applications,</p>
                            <p><b>• Logic</b> in which the desired result is declared as the answer to a question
                                about a system of facts and rules,</p>
                            <p> <b>• Mathematical</b> in which the desired result is declared as the solution of
                                an optimization problem</p>
                            <p> <b>• Reactive</b> in which the desired result is declared with data streams and the
                                propagation of change</p>
                            <h3>Imperative languages</h3>
                            <p>
                                An imperative language uses a
                                sequence of statements to determine
                                how to reach a certain goal.

                                These statements are said to change
                                the state of the program as each one is
                                executed in turn.
                                <b>Examples: Pascal, C, Basic</b></p>
                            <div class="image"><img src={imageSrc} alt="pascal"></img></div>
                            <div class="topic">
                                <h3>Introduction to Programming Paradigms</h3>
                                <p>This week, we delved into various programming paradigms, exploring their characteristics, differences, and applications. We focused on understanding the principles behind each paradigm and how they influence the way we write and organize code.</p>
                            </div>

                            <div class="topic">
                                <h3>Paradigms Covered</h3>
                                <ul>
                                    <li><strong>Imperative Programming:</strong> Including procedural programming that groups instructions into procedures and object-oriented programming which groups instructions with the part of the state they operate on.</li>
                                    <li><strong>Declarative Programming:</strong> Including functional programming where the desired result is declared as the value of a series of function applications, and logic programming where the desired result is declared as the answer to a question about a system of facts and rules.</li>
                                    <li><strong>Reactive Programming:</strong> The desired result is declared with data streams and the propagation of change.</li>
                                </ul>
                            </div>

                            <div class="topic">
                                <h3>Key Concepts and Learning</h3>
                                <ul>
                                    <li><strong>What is a Paradigm?</strong> A paradigm is a standard, perspective, or set of ideas - a way of looking at programming.</li>
                                    <li><strong>Imperative languages</strong> like Pascal, C, and Basic use a sequence of statements to reach a goal, changing the program's state as execution progresses.</li>
                                    <li><strong>Declarative approaches</strong> simplify code writing by focusing on what the program should achieve rather than how to achieve it.</li>
                                    <li><strong>Practical Applications:</strong> We applied these paradigms in coding exercises, highlighting their suitability for various tasks and scenarios.</li>
                                </ul>
                                <p>Throughout the week, we engaged in hands-on projects to solidify our understanding of each paradigm, applying them to real-world problems and scenarios.</p>
                            </div>
                            <section class="data-handling">
                                <h2>Data Handling Across Paradigms</h2>
                                <div class="topic">
                                    <p>We explored how different paradigms handle data, from simple procedures and functions in procedural programming to sophisticated object-oriented designs that encapsulate data and behaviors.</p>
                                    <ul>
                                        <li><strong>Event-Driven Programming:</strong> Emphasized the role of events in modern applications, transitioning from simple procedural logic to more complex interactions dictated by user actions or system triggers.</li>
                                        <li><strong>Object-Oriented Programming:</strong> Focused on the concept of classes and objects, offering a deeper dive into encapsulation, inheritance, and polymorphism.</li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </section>
                    </div>
            </main>

        </div>
    );
}

export default Week7;