const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
       backdrop-blur-lg bg-opacity-0"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-300 ">
          SignUp
        </h1>

        <form action="">
          <div>
            <label className="label" htmlFor="">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
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
            />
          </div>

          {/* Gender check box */}
          <div className="flex gap-4">
            <label className="cursor-pointer label">
              <span className="label-text m-3">Male</span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-info"
              />
            </label>
            <label className="cursor-pointer label">
              <span className="label-text m-3">Female</span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-info"
              />
            </label>
          </div>
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-500 mt-2 inline-block"
          >
            Already have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2 hover:border-blue-500 border-2">SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
