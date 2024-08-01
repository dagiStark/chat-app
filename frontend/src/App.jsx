import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
import "./App.css";

function App() {
  const {authUser} = useAuthContext();
  return (
    <div className="flex items-center justify-center p-4 h-screen">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path="/signup" element={authUser ? <Navigate to = "/"/> : <SignUp />} />
        <Route path="/login" element={authUser ? <Navigate to = "/"/> : <Login />} />
      </Routes>
    </div>
  );
}

export default App;
