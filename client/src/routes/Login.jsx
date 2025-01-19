import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtp, requestOtp } from "../redux/slice/authSlice"; // Update with correct path
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();  // Using navigate for redirection after successful login
  const { loading, error, otpSent, islogged, userId } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  // Redirect user if they are already logged in
  useEffect(() => {
    if (islogged) {
      navigate("/dashboard");  // Redirect to dashboard if logged in
    }
  }, [islogged, navigate]);

  const handleRequestOtp = async (e) => {
    e.preventDefault();
    if (email) {
      await dispatch(requestOtp(email));
      toast.success("OTP sent to your email!", { position: "top-right", autoClose: 3000 });
    } else {
      toast.warn("Please enter your email", { position: "top-right", autoClose: 3000 });
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (otp && userId) {
      try {
        const resultAction = await dispatch(verifyOtp({ secret: otp }));
        if (verifyOtp.fulfilled.match(resultAction)) {
          toast.success("Login successful! Redirecting...", { position: "top-right", autoClose: 3000 });
          setTimeout(() => {
            navigate("/dashboard");  // Redirect to dashboard after successful login
          }, 3000);
        }
      } catch (error) {
        toast.error("Failed to verify OTP. Please try again.", { position: "top-right", autoClose: 3000 });
      }
    } else {
      toast.warn("Please enter OTP and make sure the user ID is valid", { position: "top-right", autoClose: 3000 });
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-8">
        <h2 className="text-center text-3xl font-extrabold text-white">
          {otpSent ? "Verify OTP" : "Welcome Back"}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-300">
          {otpSent ? (
            "Enter the OTP sent to your email"
          ) : (
            <>
              Don't have an account?{" "}
              <a
                href="#SignUp"
                className="font-medium text-green-400 hover:text-green-300 transition-colors duration-200"
              >
                Sign up here
              </a>
            </>
          )}
        </p>

        {otpSent ? (
          <form className="mt-8 space-y-6" onSubmit={handleVerifyOtp}>
            <div>
              <label
                htmlFor="otp"
                className="block text-sm font-medium text-gray-200"
              >
                OTP
              </label>
              <input
                id="otp"
                name="otp"
                type="text"
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="mt-1 w-full px-4 py-2 border border-white/20 rounded-lg shadow-sm bg-black placeholder-white/20 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Enter your OTP"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 text-white font-semibold bg-green-600 hover:bg-green-500 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 transition-colors duration-200"
              disabled={loading}
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleRequestOtp}>
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
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full px-4 py-2 border border-white/20 rounded-lg shadow-sm bg-black placeholder-white/20 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 text-white font-semibold bg-green-600 hover:bg-green-500 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 transition-colors duration-200"
              disabled={loading}
            >
              {loading ? "Requesting..." : "Request OTP"}
            </button>
          </form>
        )}

        {error && (
          <p className="mt-4 text-center text-sm text-red-500">{error}</p>
        )}

        {islogged && (
          <p className="mt-4 text-center text-sm text-green-500">
            Logged in successfully!
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
