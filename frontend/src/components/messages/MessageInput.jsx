import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import { useState } from "react";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { sendMessage, loading } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <div className="flex items-center">
          <AttachFileIcon />
          <input
            type="text"
            placeholder="Send a message..."
            className="border text-sm rounded-lg block w-full p-2.5 bg-white text-black outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="absolute inset-y-0 end-0  flex items-center pe-3"
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              <SentimentSatisfiedAltIcon />
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default MessageInput;
