import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import project from '../components/project';
import CodeSnippet from '../components/CodeSnippet';
import '../App.css';
import ImageDisplay from '../components/ImageDisplay';
import ImageGallery from '../components/ImageDisplay';

const Domtasks = () => {
    const codeString = `submit.addEventListener("click", () => {
        placeholder.style.color = "goldenrod";
        placeholder.innerHTML = "<i>" + input.value + "</i>";
    });`;

    return (
        <div>
            <Header />
            <main>
                <h1>Changing the DOM Tasks</h1>
                <div class="Dom-task">
                    <h2>1 - Add Event Listener</h2>
                    <h4>Can you change the background colour?</h4>
                    <p>
                        <ul>
                            <li>Add an event listener method to the selected element</li>
                            <li>Use a click event</li>
                            <li>Change the colour of the element when the event is triggered (when clicked)</li>
                        </ul>
                    </p>
                    <CodeSnippet codeString={codeString} language="javascript" className="code-snippet">
                        document.getElementById("heading").style.backgroundColor = "green";
                    </CodeSnippet>
                    <ImageDisplay img src="../assets/images/addEventListener_dom_colour.png" alt="change colour of heading" />
                </div>
                <div class="Dom-task">
                    <h2>2 - Selecting an Element By Its ID</h2>
                    <h4>input text value property</h4>
                    <h5>Task</h5>
                    <p>
                        <ul>
                            <li>Store the heading, input, and button elements in variables to use later</li>
                            <li>Make the button listen for a click event</li>
                            <li>Get the 'value' from the input element and use it to change the colour of the heading</li>
                        </ul>
                    </p>
                    <ImageDisplay img src="../assets/images/selectinganElementByItsId.png" alt="selecting an element" />
                </div>
                <div class="Dom-task">
                    <h3>3 - Select Elements of Particular Type</h3>
                    <p> We can use getElementsByTagName("p") This returns an HTML Collection (an array-like collection of HTML elements)</p>
                    <p> This means we can use square brackets to select an element in a specific position and use a loop to iterate through</p>
                    <CodeSnippet codeString={codeString} language="javascript" className="code-snippet">
                        const list = document.getElementsByTagName("li");
                    </CodeSnippet>
                </div>
                <div class="Dom-task">
                    <h4>Task</h4>
                    <p> Select the elements using getElementsByTagName()</p>
                    <p>Use a for loop to change the text colour of each element in the list to orange</p>
                    <p>Use getElementsByClassName() to select the elements with the class "not-orange" and change them to red</p>
                    <ImageDisplay img src="../assets/images/selectinganElementByItsId.png" alt="selecting an element" />
                </div>
                <div class="Dom-task">
                    <h3>4 - querySelector and querySelectorAll</h3>
                    <p>The querySelector() method is used to select an element based on its ID or class.</p>
                    <p>The querySelectorAll() method is used to select all elements based on their class.</p>
                    <CodeSnippet codeString={codeString} language="javascript" className="code-snippet">
                        document.querySelectorAll("li");
                        document.querySelector("li");
                        document.querySelector("#heading");
                        document.querySelector(".list-parent");
                        document.querySelector(".green");
                    </CodeSnippet>
                    <h4>These code lines are functionally identical</h4>
                    <CodeSnippet codeString={codeString} language="javascript" className="code-snippet">const myElement = document.getElementById("myId");</CodeSnippet>
                    <CodeSnippet codeString={codeString} language="javascript" className="code-snippet">const myElement = document.querySelector("#myId");</CodeSnippet>
                    <h4>Task - Use a loop to display all even items with text colour "light green"</h4>
                    <ImageDisplay img src="../assets/images/evenqueryselector.png" alt="querySelector" />
                    <h4>Task - Use a loop to display all items in the colours of the rainbow</h4>
                    <ImageDisplay img src="../assets/images/rainbowqueryselector.png" alt="querySelector" />
                </div>
                <div class="Dom-task">
                    <h3>5 - textContent and innerHTML</h3>
                    <h4>Task</h4>
                    <p> Store the elements with the IDs 'placeholder', 'input', 'submit', and 'list'</p>
                    <p>Add a click event listener to the button and update the response to place the text input in the heading</p>
                    <p>Replace the textContent with the following:</p>
                    <CodeSnippet codeString={codeString} language="javascript" className="code-snippet">
                        submit.addEventListener("click", () = {
                            placeholder.style.color = "goldenrod"}
                        placeholder.innerHTML = "&lt;i&gt;" + input.value + "&lt;/i&gt;")
                    </CodeSnippet>
                    <ImageDisplay img src="../assets/images/textContentandinnerHTML.png" alt="textContent" />
                </div>
                <div class="Dom-task">
                    <h3>6 - Changing Element Attributes</h3>
                    <p> Create a variable called 'image' and assign the element with the ID of 'image' to it</p>
                    <p>Do the same for the 'input' and 'button' elements</p>
                    <p>Add an event listener that changes the source of the image when the "submit" button is clicked</p>
                    <ImageDisplay img src="../assets/images/ChangingElementAttributes.png" alt="ChangingElementAttributes" />
                </div>
                <div class="Dom-task">
                    <h3>7 - Styling Elements with JS</h3>
                    <p>Store the image in a variable and view its style in a console.log</p>
                    <p>This should display all the style properties</p>
                    <p>Add code inside the function:</p>
                    <CodeSnippet codeString={CodeSnippet} language="javascript" className="code-snippet">const button = document.getElementById("submit");
                        button.addEventListener("click", () = { });
                    </CodeSnippet>
                    <ImageDisplay img src="../assets/images/stylingElementswithJS.png" alt="StylingElementswithJS" />
                </div>
                <div class="Dom-task">
                    <h3>8 - Creating New Elements with JS</h3>
                    <p>
                        Store the <code>input</code> and <code>button</code> in a variable.
                    </p>
                    <p>
                        Create a 'list' item when the user clicks the 'submit' button:
                    </p>
                    <ol>
                        <li>
                            Use the <code>createElement</code> method to create a list item and
                            add the text content with the <code>input.value</code>.
                        </li>
                        <li>
                            Use a console.log to view the created item.
                        </li>
                        <li>
                            Grab the 'ul' element and use the <code>appendChild</code> method to add
                            the new '<code>li</code>' item to it.
                        </li>
                        <li>
                            Use <code>getElementsByTagName</code> to store the unordered list.
                        </li>
                        <li>
                            Use the <code>appendChild</code> method on the list you just stored.
                        </li>
                        <li>
                            <u>Stretch</u>
                            <ol>
                                <li>Clear the input value when the user clicks the submit button.</li>
                                <li>
                                    Add a feature where the user can show/hide the list.
                                </li>
                            </ol>
                        </li>
                    </ol>
                    <img src="../assets/images/CreatingNewElementswithJS.png" alt="CreatingNewElementswithJS" />
                    <img src="../assets/images/creatingNewElementsHidden.png" alt="CreatingNewElementswithJS2" />
                </div>
                <div class="Dom-task">
                    <h3>9 - Removing Elements</h3>
                    <p>
                        Update your app.js file to submit items that will be added to the list
                        (previous exercise).
                    </p>
                    <p>
                        Store the 'remove' button in a variable.
                    </p>
                    <p>
                        Use the 'last-child' with querySelector.
                    </p>
                    <p>
                        Use the <code>removeChild</code> method on the list.
                    </p>
                    <img src="../assets/images/RemovingElements.png" alt="RemovingElements" />
                </div>
                <div class="Dom-task">
                    <h3>10 - setTimeout</h3>
                    <p>
                        <code>setTimeout</code> is a method that allows us to execute a piece of
                        code after a certain amount of time has passed. It requires 1 parameter, and
                        the 2nd is the delay. A function, Amount of milliseconds to wait, if no
                        parameter then will be 0, Can add more which are additional arguments.
                    </p>
                    <CodeSnippet codeString={codeString} language="javascript" className="code-snippet">
                        setTimeout(() ={console.log("Hello World")}, 3000);</CodeSnippet>
                    <ImageDisplay img src="../assets/images/setTimeout.png" alt="setTimeout" />
                </div>
                <div class="Dom-task">
                    <h3>11 - Changing Element Classes</h3>
                    <img src="../assets/images/ChangingElementClasses.png" alt="ChangingElementClasses" />
                </div>
                <div class="Dom-task">
                    <h3>12- Event Object</h3>
                    <img src="../assets/images/EventObject.png" alt="EventObject" />
                </div>
                <Footer />
            </main>

        </div>
    )
};
export default DomTasks;


