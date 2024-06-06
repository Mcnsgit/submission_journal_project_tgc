import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeSnippet = ({ code, language, title }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div className="code-snippet-container">
            <SyntaxHighlighter  title={title} language={language} style={dark}>
                {code}

            </SyntaxHighlighter>


            <button className="copy-button" onClick={handleCopy}>
                {copied ? 'Copied!' : 'Copy'}
            </button>
        </div>
    );
};

export default CodeSnippet;
