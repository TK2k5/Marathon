const Login = () => {
  return (
    <div className="h-screen bg-gray-100 flex flex-col justify-center items-center gap-4">
      <img
        className="h-[100px] w-[100px]"
        src=".\src\assets\logo.jpg"
        alt="logo"
      />
      <div className="w-[500px] bg-white p-6 rounded-md flex flex-col gap-4 items-center shadow-lg shadow-black">
        <h1 className="text-2xl text-black font-mono">Login</h1>
        <form className="flex flex-col w-[400px] gap-6 ">
          <div className="relative">
            <input
              type="text"
              className="pl-10 pr-4 py-2 shadow shadow-red-400 border border-red-500 outline-none rounded-sm w-full"
              placeholder="Username"
            />
            <div
              className="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              className="pl-10 pr-4 py-2 shadow shadow-red-400 border border-red-500 outline-none rounded-sm w-full"
              placeholder="Password"
            />
            <div
              className="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>
          </div>
        </form>
        <button className="bg-red-600 text-white text-xl text-bold font-mono w-[200px] mt-4 shadow shadow-red-400 p-2 hover:opacity-50">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
