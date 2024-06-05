const LiveDemo = ({ demoUrl, projectName }) => {
    return (
        <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            Check out the demo for {projectName}
        </a>
    );
};
export default LiveDemo;

