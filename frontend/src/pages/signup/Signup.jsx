import { Link } from "react-router-dom";
import { useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import userSignUp from "../../hooks/userSignUp";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const {loading, signUp} = userSignUp();

  const handleCheckBox = (gender) => {
    setInputs({ ...inputs, gender });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    await signUp(inputs)
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
       backdrop-blur-lg bg-opacity-0"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-300 ">
          SignUp
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label" htmlFor="">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="label" htmlFor="">
              <span className="text-base label-text">username</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="label" htmlFor="">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="**************"
              className="input input-bordered input-primary w-full max-w-xs"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              required
              minLength={6}
            />
          </div>
          <div>
            <label className="label" htmlFor="">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="**************"
              className="input input-bordered input-primary w-full max-w-xs"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
              required
              minLength={6}
            />
          </div>

          {/* Gender check box */}
          <GenderCheckBox onchangeHandle={handleCheckBox} selectedGender={inputs.gender}/>
         
          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-blue-500 mt-2 inline-block"
          >
            Already have an account?
          </Link>
          <div>
            <button
              type="submit"
              className="btn btn-block btn-sm mt-2 hover:border-blue-500 border-2"
              disabled = {loading}
            >
              {loading ? <span className="loading loading-spinner"></span> : "SignUp"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default SignUp;