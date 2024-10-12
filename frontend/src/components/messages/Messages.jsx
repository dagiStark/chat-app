import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";
import MessageSkeleton from "../skeleton/MessageSkeleton";
import useListenMessages from "../../hooks/useListenMessages";
import React, { useEffect, useRef } from "react";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  const lastMessageRef = useRef(null);
  useListenMessages();

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]); // Re-run the effect when messages change

  return (
    <div className="px-4 flex-1 overflow-auto scroll-container">
      {loading ? (
        <MessageSkeleton />
      ) : (
        messages.map((message, index) => (
          <Message
            key={index}
            message={message}
            ref={index === messages.length - 1 ? lastMessageRef : null} // Assign ref to last message
          />
        ))
      )}
    </div>
  );
};

export default Messages;
