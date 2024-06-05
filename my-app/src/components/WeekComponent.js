import React from 'react';
import ImageDisplay from './ImageDisplay'; // Replace with your actual import path
import LiveDemo from './liveDemo'; // Replace with your actual import path
import CodeSnippet from './CodeSnippet'; // Replace with your actual import path

const WeekComponent = () => {
    const imageSrc = '../assets/images/pascal.png'; // Replace with the correct path
    const liveDemoUrl = 'http://example.com'; // Replace with the actual URL to your live demo

    // Code snippets as string literals
    const divExample = `<div>Hello React</div>`;
    const welcomeComponentExample = `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`;
    const greetingComponentExample = `
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}`;
    const appComponentExample = `
function App() {
  return (<div><Welcome name="Sara" /></div>);
}`;
    const elementExample = `
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));`;

    return (
        <div>
            <ImageDisplay src={imageSrc} alt="Pascal" caption="Pascal" />
            <LiveDemo src={liveDemoUrl} title="Live Demo" />
            <CodeSnippet codeString={divExample} language="jsx" />
            <CodeSnippet codeString={welcomeComponentExample} language="jsx" />
            <CodeSnippet codeString={greetingComponentExample} language="jsx" />
            <CodeSnippet codeString={appComponentExample} language="jsx" />
            <CodeSnippet codeString={elementExample} language="jsx" />
        </div>
    );
};

export default WeekComponent;
