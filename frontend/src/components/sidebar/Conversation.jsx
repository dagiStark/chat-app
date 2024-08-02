import PropTypes from "prop-types";
import useConversation from "../../zustad/useConversation";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = (selectedConversation?._id === conversation._id)
  
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer 
          ${isSelected ? "bg-sky-500" : ""}
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar online">
          <div className="w-16 rounded-full">
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
