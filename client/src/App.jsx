import Home from "./routes/Home";
import Login from "./routes/Login";
import SparklesCore from "./components/bg";
// import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import Signup from "./routes/SignUp";
import ForgotPassword from "./routes/ForgotPassword";
import { useSelector, useDispatch } from "react-redux"
import { checkSession } from "./redux/slice/authSlice"
import { store } from "./redux/store";
import { Provider } from "react-redux";
import AuthenticatedRoutes from "./routes/AuthentiictedRoutes";
import Dashboard from "./routes/DashBoard";
export default function App() {
  //  const dispatch = useDispatch();
  //   const {islogged,profileCompleted,loading,error} = useSelector((state) => state.auth);
  //   useEffect(() => {
  //     document.title = "Carbonet";
  //   }) 

  return (
    <>
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
        {/* <BackgroundGradientAnimation> */}


        <HashRouter>
          <Routes>

            <Route element={<AuthenticatedRoutes />}>

              <Route path="/Signup" element={<Signup />} />

              <Route path="/" element={<Home />} />
              <Route path="/ForgotPassword" element={<ForgotPassword />} />
            </Route>
            <Route path="Login" element={<Login />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
        </HashRouter>

      </Provider>
    </>
  )
}


