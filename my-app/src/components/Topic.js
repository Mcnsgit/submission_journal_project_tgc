const Topic = ({ title, content }) => (

<div className="topic">
        <h3 className="topic__title">{title}</h3>
        <p className="topic__content" dangerouslySetInnerHTML={{ __html: content }} />
    </div>

);

export default Topic;