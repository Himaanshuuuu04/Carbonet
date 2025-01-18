import React from "react";

const ForgotPassword = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-8">
        <h2 className="text-center text-3xl font-extrabold text-white">
          Forgot Your Password?
        </h2>
        <p className="mt-2 text-center text-sm text-gray-300">
          Enter your email address and we'll send you a link to reset your password.
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
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 text-white font-semibold bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            >
              Send Reset Link
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-sm text-gray-300">
          Remembered your password?{" "}
          <a href="#" className="font-medium text-blue-400 hover:text-blue-300">
            Sign in here
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
