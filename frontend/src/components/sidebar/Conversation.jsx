import PropTypes from "prop-types";
import useConversation from "../../zustad/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-[rgba(21,19,34,255)] rounded p-2 py-1 cursor-pointer 
          ${isSelected ? "bg-gradient-to-r from-[rgba(21,17,35,1)] to-[rgba(21,17,35,0)]" : ""}
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} />
          </div>
        </div>
        <div>
          <p className="font-bold text-gray-200">{conversation.fullName}</p>
        </div>
      </div>
      {!lastIdx ? <div className="divider my-0 py-0 h-1" /> : null}
    </>
  );
};

export default Conversation;

Conversation.propTypes = {
  conversation: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    profilePic: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  lastIdx: PropTypes.bool.isRequired,
};
