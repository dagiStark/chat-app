import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log(conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto">
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  );
};

export default Conversations;
