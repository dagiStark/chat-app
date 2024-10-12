import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"
import Conversations from "./Conversations"


const Sidebar = () => {
  return (
    <div className="flex flex-col p-4 bg-[#402e58]">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  )
}

export default Sidebar
