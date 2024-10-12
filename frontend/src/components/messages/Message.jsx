import { useAuthContext } from "../../context/AuthContext";
import PropTypes from "prop-types";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const bubbleColor = fromMe ? "bg-[#7045a1] text-white" : "bg-[#c7c7c7] text-[#171412]";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className={`chat-bubble  ${bubbleColor}`}>{message.message}</div>
    </div>
  );
};

export default Message;

Message.propTypes = {
  message: PropTypes.shape({
    senderId: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
};
