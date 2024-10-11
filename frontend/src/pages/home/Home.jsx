import RightSideBar from "../../components/app/RightSideBar"
import MessageContainer from "../../components/messages/MessageContainer"
import Sidebar from "../../components/sidebar/Sidebar"

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[700px] md:w-[60%] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding
     backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessageContainer />
      <RightSideBar />
    </div>
  )
}

export default Home
