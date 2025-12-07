import PropTypes from 'prop-types';

function Message({ text, time, author }) {
    return (
        <>
            <h4>Author No.: {author}</h4>
            <p>{text}</p>
            <p>Post time: {time}</p>
        </>
    );
}

Message.propTypes = {
    author: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
}

export default Message;