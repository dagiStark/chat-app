import useSendMessage from "../../hooks/useSendMessage";
import { useState } from "react";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const { sendMessage, loading } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  const addEmoji = (e) => {
    const sym = e.unified.split("_");
    const emoji = String.fromCodePoint(parseInt(sym[0], 16));
    setMessage(message + emoji);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <div className="flex items-center">
          <AttachFileIcon style={{ transform: "rotate(45deg)" }} />
          <input
            type="text"
            placeholder="Send a message..."
            className="border text-sm rounded-lg block w-full p-2.5 bg-white text-black outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={() => setShowEmoji(!showEmoji)}
            className="absolute inset-y-0 end-0  flex items-center pe-3 cursor-pointer hover:text-[#7045a1]"
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              <SentimentSatisfiedAltIcon />
            )}
          </button>
        </div>
      </div>
      {showEmoji && (
        <div className="absolute top-0 left-0 z-10">
          <Picker data={data} onEmojiSelect={addEmoji} />
        </div>
      )}
    </form>
  );
};

export default MessageInput;
