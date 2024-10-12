import RightSideBar from "../../components/app/RightSideBar";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div
      className="flex sm:h-[450px] md:h-[700px] rounded-lg overflow-hidden bg-clip-padding
     backdrop-filter "
    >
      <Sidebar />
      <MessageContainer />
      <RightSideBar />
    </div>
  );
};

export default Home;
