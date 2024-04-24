import PropTypes from 'prop-types';

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
