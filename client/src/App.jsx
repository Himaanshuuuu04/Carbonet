import React from 'react';
import Home from "./routes/Home";
import Login from "./routes/Login";
import SparklesCore from "./components/bg";
import { HashRouter, Routes, Route } from "react-router-dom";
import Signup from "./routes/SignUp";
import ForgotPassword from "./routes/ForgotPassword";
import { useSelector, useDispatch } from "react-redux";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import AuthenticatedRoutes from "./routes/AuthenticatedRoutes";
import ProfileComplete from './routes/ProfileComplete';
import Dashboard from "./routes/DashBoard";
import About from "./routes/About";

export default function App() {
  return (
    <Provider store={store}>
      <div className='w-full inset-0 h-screen bg-gradient-to-r from-green-950 via-black to-green-950 fixed -z-50'>
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.2}
          maxSize={1}
          particleDensity={40}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={1}
        />
      </div>

      <HashRouter>
        <Routes>
          {/* Non-authenticated Routes */}
          <Route path="/Signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="Login" element={<Login />} />
          <Route path="*" element={<Home />} />
          <Route path="/About" element={<About />} />

          {/* Authenticated Routes (Protected) */}
          {/* <Route element={<AuthenticatedRoutes />}> */}
            <Route path="/ProfileComplete" element={<ProfileComplete />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          {/* </Route> */}
        </Routes>
      </HashRouter>
    </Provider>
  );
}
