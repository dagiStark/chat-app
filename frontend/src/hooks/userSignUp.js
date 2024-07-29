import { useState } from "react";
import toast from "react-hot-toast";

const userSignUp = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState(false);

  const signUp = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();
      localStorage.setItem("chat-user", JSON.stringify(data))

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {loading, signUp};
};

export default userSignUp;
