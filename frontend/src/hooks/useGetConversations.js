import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://chat-app-api-one-blond.vercel.app/api/users");
        if (res.status === 401) {
          // Redirect to login if unauthorized
          window.location.href = "/login"; // Adjust to your login page route
        } else {
          const data = await res.json();
          if (data.error) {
            throw new Error(data.error);
          }
          setConversations(data);
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getConversations();
  }, []);
  return { loading, conversations };
};

export default useGetConversations;
