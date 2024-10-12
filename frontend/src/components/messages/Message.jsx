import { useAuthContext } from "../../context/AuthContext";
import PropTypes from "prop-types";
import React, { forwardRef } from "react";

const Message = forwardRef(({ message }, ref) => {
  const { authUser } = useAuthContext();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const bubbleColor = fromMe ? "bg-[#7045a1] text-white" : "bg-[#c7c7c7] text-[#171412]";

  return (
    <div className={`chat ${chatClassName}`} ref={ref}>
      <div className={`chat-bubble ${bubbleColor}`}>{message.message}</div>
    </div>
  );
});

Message.displayName = 'Message';

Message.propTypes = {
  message: PropTypes.shape({
    senderId: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
};

export default Message;
