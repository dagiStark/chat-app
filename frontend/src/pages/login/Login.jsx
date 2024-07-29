import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
       backdrop-blur-lg bg-opacity-0"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-300 ">
          Login
        </h1>

        <form action="">
          <div>
            <label className="label" htmlFor="">
              <span className="text-base label-text">username</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>
          <div>
            <label className="label" htmlFor="">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>

          <Link
            to={"/signup"}
            className="text-sm hover:underline hover:text-blue-500 mt-2 inline-block"
          >
            Don&apos;t have account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
