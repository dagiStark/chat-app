import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";
import MessageSkeleton from "../skeleton/MessageSkeleton";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  useListenMessages();
  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading ? (
        <MessageSkeleton />
      ) : (
        messages.map((message, index) => (
          <Message key={index} message={message} />
        ))
      )}
    </div>
  );
};

export default Messages;
