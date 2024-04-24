import PropTypes from 'prop-types';

/**
 * Represents a message component to display error or success messages.
 * @const {Function} Message - Functional component for displaying messages.
 * @param {Object} props - The props object containing properties for the message.
 * @param {string} props.text - The text content of the message.
 * @param {string} props.color - The color of the message text and border.
 * @returns {JSX.Element} - JSX element representing the message.
 */
const Message = ({ text, color }) => {
  return (
    <div className='message-container' style={{ borderColor: color, color }}>
      <h3>{text}</h3>
    </div>
  );
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Message;
