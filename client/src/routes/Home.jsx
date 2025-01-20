import Navbar from "../components/Navbar";
import { TextGenerateEffect } from "../components/text-generate-effect";
import { ContainerScroll } from "../components/container-scroll-animation";
import { Link } from "react-router-dom";
import { CardContainer, CardBody, CardItem } from "../components/3d-card";
import { Meteors } from "../components/Meteors";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center text-white">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 px-6 py-6 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Navbar />
        </div>
      </header>

      {/* Main Content */}
      <main className="mt-20 text-center px-4 w-full">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-bold text-white -mb-5">
                Experience the Impact of
              </h1>
              <TextGenerateEffect
                words="Tracking Your Carbon Footprint"
                className="text-5xl font-extrabold text-green-400 mt-4 mb-5"
              />
            </>
          }
        >
          <img
            src="https://measure.galleryclimatecoalition.org/static/dashboard.png"
            alt="hero"
            className="mx-auto mt-8 rounded-2xl object-cover w-full max-w-5xl shadow-lg"
            draggable="false"
          />
        </ContainerScroll>

        <div className="max-w-5xl mx-auto my-16 px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                How does it work?
              </h2>
              <p className="text-xl text-gray-500">
                CarboNet is a free online tool that helps you measure, track,
                and reduce your carbon footprint from internet usage.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
              {/* Measure Card */}
              <div className="bg-white/10 relative shadow-xl border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
                <h1 className="font-bold text-xl text-white mb-4 relative z-50 text-center">Measure</h1>
                <p className="text-white/50 font-normal text-base text-slate-500 mb-4 relative z-50 text-center">
                  Use our simple calculator to get an estimate of your carbon
                  footprint from internet usage.
                </p>
                <Meteors number={7} />
              </div>

              {/* Track Card */}
              <div className="bg-white/10 relative shadow-xl border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
                <h1 className="font-bold text-xl text-white mb-4 relative z-50 text-center">Track</h1>
                <p className="text-white/50 font-normal text-base text-slate-500 mb-4 relative z-50 text-center">
                  Sign up for a free account to track your progress and get
                  insights on how to reduce your carbon footprint.
                </p>
                <Meteors number={7} />
              </div>

              {/* Reduce Card */}
              <div className="bg-white/10 relative shadow-xl border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
                <h1 className="font-bold text-xl text-white mb-4 relative z-50 text-center">Reduce</h1>
                <p className="text-white/50 font-normal text-base text-slate-500 mb-4 relative z-50 text-center">
                  Get tips and recommendations on how to reduce your carbon
                  footprint from internet usage.
                </p>
                <Meteors number={7} />
              </div>
            </div>
          </div>
        </div>
        {/* New Section: Key Points about Carbon Emission */}
        <section className="mt-16 py-12">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white mb-6">
              Key Points on Carbon Emission from Internet Usage
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
              {/* Data Centers Card */}
              <div className="bg-white/10 relative shadow-xl border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
                <h1 className="font-bold text-xl text-white mb-4 relative z-50 text-center">Data Centers</h1>
                <p className="text-white/50 font-normal text-base text-slate-500 mb-4 relative z-50 text-center">
                  Data centers, which power cloud services, consume large amounts of energy and contribute significantly to carbon emissions.
                </p>
                <Meteors number={7} />
              </div>

              {/* Streaming & Video Calls Card */}
              <div className="bg-white/10 relative shadow-xl border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
                <h1 className="font-bold text-xl text-white mb-4 relative z-50 text-center">Streaming & Video Calls</h1>
                <p className="text-white/50 font-normal text-base text-slate-500 mb-4 relative z-50 text-center">
                  Streaming high-definition videos and making video calls require high-bandwidth networks and result in increased energy usage.
                </p>
                <Meteors number={7} />
              </div>

              {/* Energy-Hungry Devices Card */}
              <div className="bg-white/10 relative shadow-xl border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
                <h1 className="font-bold text-xl text-white mb-4 relative z-50 text-center">Energy-Hungry Devices</h1>
                <p className="text-white/50 font-normal text-base text-slate-500 mb-4 relative z-50 text-center">
                  Devices like smartphones, laptops, and computers that consume energy while connected to the internet are a major source of emissions.
                </p>
                <Meteors number={7} />
              </div>

              {/* Network Infrastructure Card */}
              <div className="bg-white/10 relative shadow-xl border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
                <h1 className="font-bold text-xl text-white mb-4 relative z-50 text-center">Network Infrastructure</h1>
                <p className="text-white/50 font-normal text-base text-slate-500 mb-4 relative z-50 text-center">
                  The network infrastructure required to support internet services, including routers, towers, and fiber optics, all consume power.
                </p>
                <Meteors number={7} />
              </div>

              {/* The Impact of Cloud Storage Card */}
              <div className="bg-white/10 relative shadow-xl border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
                <h1 className="font-bold text-xl text-white mb-4 relative z-50 text-center">The Impact of Cloud Storage</h1>
                <p className="text-white/50 font-normal text-base text-slate-500 mb-4 relative z-50 text-center">
                  Storing files and data on the cloud contributes to increased energy consumption in data centers, leading to higher carbon emissions.
                </p>
                <Meteors number={7} />
              </div>

              {/* Search Engine Queries Card */}
              <div className="bg-white/10 relative shadow-xl border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
                <h1 className="font-bold text-xl text-white mb-4 relative z-50 text-center">Search Engine Queries</h1>
                <p className="text-white/50 font-normal text-base text-slate-500 mb-4 relative z-50 text-center">
                  Simple tasks like searching for information online require significant computational power, resulting in hidden carbon emissions.
                </p>
                <Meteors number={7} />
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-4 bg-black/30 backdrop-blur-md text-center text-sm text-gray-400 mt-12 w-full">
        © 2025 CarbonCalc. All rights reserved. |{" "}
        <a href="/privacy" className="text-green-400 hover:underline">
          Privacy Policy
        </a>
      </footer>
    </div>
  );
}
