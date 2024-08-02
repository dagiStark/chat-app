import {IoSearchSharp} from 'react-icons/io5'
import { useState } from 'react';
import useConversation from '../../zustad/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search, setSearch] = useState("")
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!search) return
    
    const conversation = conversations.find((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()))
    if(conversation){
      setSelectedConversation(conversation)
      setSearch("")
    }else{
      toast.error("No user found")
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit} action="" className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered rounded-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit' className="btn btn-circle bg-sky-500 text-white">
          <IoSearchSharp className="w-6 h-6 outline-none" />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
