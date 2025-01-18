import React from "react";

const Login = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-8">
        <h2 className="text-center text-3xl font-extrabold text-white">
          Welcome Back
        </h2>
        <p className="mt-2 text-center text-sm text-gray-300">
          Don't have an account?{" "}
          <a href="#" className="font-medium text-blue-400 hover:text-blue-300">
            Sign up here
          </a>
        </p>

        <form className="mt-8 space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-200"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 w-full px-4 py-2 border border-white/20 rounded-lg shadow-sm bg-black placeholder-white/20 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-200"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 w-full px-4 py-2 border border-white/20 rounded-lg shadow-sm bg-black placeholder-white/20 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-200">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-500 border-gray-600 rounded focus:ring-blue-400"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <a
              href="#"
              className="text-sm text-blue-400 hover:text-blue-300 font-medium"
            >
              Forgot your password?
            </a>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 text-white font-semibold bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="mt-6">
          <p className="text-center text-sm text-gray-300">Or continue with</p>
          <div className="mt-4 flex flex-col space-y-3">
            <button
              className="w-full flex items-center justify-center px-4 py-2 bg-white text-black font-medium rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
              onClick={() => alert("Google OAuth")}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
                alt="Google logo"
                className="h-5 w-5 mr-2"
              />
              Sign in with Google
            </button>
            <button
              className="w-full flex items-center justify-center px-4 py-2 bg-black text-white font-medium rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
              onClick={() => alert("GitHub OAuth")}
            >
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub logo"
                className="h-5 w-5 mr-2"
              />
              Sign in with GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
