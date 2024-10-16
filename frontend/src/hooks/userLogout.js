import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import { useState } from "react";

const userLogout = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://chat-app-api-one-blond.vercel.app/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
         throw new Error("Logout failed");
       }
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem("chat-user");
      setAuthUser(null);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, logout };
};

export default userLogout;
