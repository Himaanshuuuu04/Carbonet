import Navbar from "../components/Navbar";
import { TextGenerateEffect } from "../components/text-generate-effect";
import { ContainerScroll } from "../components/container-scroll-animation";
import { Link } from "react-router-dom";
import { CardContainer, CardBody, CardItem } from "../components/3d-card";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-950 via-black to-green-950 flex flex-col items-center text-white">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 px-6 py-6 backdrop-blur-md shadow-lg z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-green-400">CarbonCalc</h1>
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
            className="mx-auto mt-8  rounded-2xl object-cover w-full max-w-5xl shadow-lg"
            draggable="false"
          />
        </ContainerScroll>

        <div className="max-w-5xl mx-auto my-16 px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                How does it work?
              </h2>
              <p className="text-xl text-gray-500">
                CarbonCalc is a free online tool that helps you measure, track,
                and reduce your carbon footprint from internet usage.
              </p>
            </div>
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
              <li className="bg-white rounded-lg shadow-lg">
                <div className="px-6 py-8">
                  <h3 className="text-lg font-medium leading-6">
                    Measure
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Use our simple calculator to get an estimate of your carbon
                    footprint from internet usage.
                  </p>
                </div>
              </li>
              <li className="bg-white rounded-lg shadow-lg">
                <div className="px-6 py-8">
                  <h3 className="text-lg font-medium leading-6">
                    Track
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Sign up for a free account to track your progress and get
                    insights on how to reduce your carbon footprint.
                  </p>
                </div>
              </li>
              <li className="bg-white rounded-lg shadow-lg">
                <div className="px-6 py-8">
                  <h3 className="text-lg font-medium leading-6">
                    Reduce
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Get tips and recommendations on how to reduce your carbon
                    footprint from internet usage.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Discover the Magic of 3D Interaction
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Hover over this card to experience a stunning 3D perspective effect.
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={5}
              rotateZ={1}
              className="w-full mt-4"
            >
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover card:shadow-xl"
                alt="floating image"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                translateX={-40}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                translateX={40}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
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
