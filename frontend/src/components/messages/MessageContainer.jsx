import { useEffect } from "react";
import useConversation from "../../zustad/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import CallIcon from "@mui/icons-material/Call";
import PersonIcon from "@mui/icons-material/Person";
import VideocamIcon from "@mui/icons-material/Videocam";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col bg-[#ffffff]">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-[#ffffff] px-4 py-2 mb-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 rounded-full">
                <img
                  src={selectedConversation.profilePic}
                  alt="profile picture"
                />
              </div>
              <span className="text-gray-900 font-bold">
                {selectedConversation.fullName}
              </span>
            </div>
            <div className="flex gap-3">
              <CallIcon />
              <PersonIcon />
              <VideocamIcon />
            </div>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-black font-semibold flex flex-col items-center gap-2">
        <p>Welcome to chatBot</p>
        <p>Select chat to get started</p>
        <TiMessages />
      </div>
    </div>
  );
};
