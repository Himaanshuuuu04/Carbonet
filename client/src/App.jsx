import Home from "./routes/Home";
import Login from "./routes/Login";
import SparklesCore from "./components/bg";

import { HashRouter, Routes, Route} from "react-router-dom";
import Signup from "./routes/SignUp";
import ForgotPassword from "./routes/ForgotPassword";
export default function App() {
 

  return (
    <>
    <div className='w-full  inset-0 h-screen fixed'>
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
     
     {/* <Provider store={store}> */}
       {/* <GenreProvider>
         <AuthProvider>
           <LikedMoviesProvider>
             <SearchProvider>
               <AiRecommendationProvider>
                 <FriendProvider> */}
                   <HashRouter>
                     <Routes>
                       {/* <Route path="/Login" element={<Login />} />
                       <Route path="/ProfileComplete" element={<ProfileComplete />} />
                       <Route path="*" element={<NotFound />} />
                       <Route element={<AuthenticatedRoutes />}> */}
                        <Route path="Login" element={<Login />} / >
                        <Route path="/" element={<Home />} / >
                        <Route path="/Signup" element={<Signup />} / >
                        <Route path="/ForgotPassword" element={<ForgotPassword/>} / >
                         {/* <Route path="/Home" element={<Home />}/ >
                         <Route path="/Moviedetails/:media_type/:id" element={<Moviedetails />} />
                         <Route path="/Favourite" element={<Favourite />} />
                         <Route path="/TopRated" element={<TopRated />} />
                         <Route path="/Friends" element={<Friends />} />
                         <Route path="WatchHistory" element={<WatchHistroy />} /> */}
                       {/* </Route> */}
                     </Routes>
                   </HashRouter>
                 {/* </FriendProvider>
               </AiRecommendationProvider>
             </SearchProvider>
           </LikedMoviesProvider>
         </AuthProvider>
       </GenreProvider>  */}
     {/* </Provider> */}
   {/* </BackgroundGradientAnimation> */}
   </>
  )
}


