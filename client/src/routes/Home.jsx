import Navbar from "../components/Navbar";
import { TextGenerateEffect } from "../components/text-generate-effect";
import { ContainerScroll } from "../components/container-scroll-animation";
import { Link } from "react-router-dom";
import { CardContainer, CardBody, CardItem } from "../components/3d-card";

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

        {/* About the Environmental Impact */}
        <section className="max-w-5xl mx-auto my-16 px-4 sm:px-6 lg:px-8 text-left">
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-4">
            The Internet's Hidden Carbon Footprint
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Every online activity, from streaming videos to AI-powered
            assistants, contributes to carbon emissions. Data centers and AI
            systems consume immense amounts of energy, equating to the energy
            usage of entire nations. Learn how your digital habits impact the
            planet and how you can make a difference.
          </p>
        </section>

        {/* Features Section */}
        <div className="max-w-5xl mx-auto my-16 px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                How CarbonCalc Helps
              </h2>
              <p className="text-xl text-gray-500">
                Use our tools to measure, track, and reduce your digital
                carbon footprint effectively.
              </p>
            </div>
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
              <li className="bg-white/10 rounded-lg shadow-lg">
                <div className="px-6 py-8">
                  <h3 className="text-lg font-bold leading-6">Measure</h3>
                  <p className="mt-2 text-base text-gray-200">
                    Use our calculator to estimate your carbon footprint from
                    internet usage and streaming.
                  </p>
                </div>
              </li>
              <li className="bg-white/10 rounded-lg shadow-lg">
                <div className="px-6 py-8">
                  <h3 className="text-lg font-bold leading-6">Track</h3>
                  <p className="mt-2 text-base text-gray-200">
                    Sign up for an account to track your emissions over time and
                    gain actionable insights.
                  </p>
                </div>
              </li>
              <li className="bg-white/10 rounded-lg shadow-lg">
                <div className="px-6 py-8">
                  <h3 className="text-lg font-bold leading-6">Reduce</h3>
                  <p className="mt-2 text-base text-gray-200">
                    Get tips on how to adopt sustainable digital habits and
                    reduce energy consumption.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* AI and Energy Consumption Section */}
        <section className="max-w-5xl mx-auto my-16 px-4 sm:px-6 lg:px-8 text-left">
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-4">
            The Role of AI in Carbon Emissions
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            AI systems, while transformative, are energy-intensive. Training
            large AI models consumes vast resources, with each query using up to
            30-40 times more energy than smaller, specific models. As AI usage
            expands, it’s essential to balance innovation with sustainability.
          </p>
          <Link
            to="/learn-more"
            className="text-green-400 hover:underline text-lg font-medium"
          >
            Learn more about sustainable AI
          </Link>
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
