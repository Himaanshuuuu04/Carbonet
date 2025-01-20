import React from "react";
import Navbar from "../components/Navbar";
const About = () => {
  return (
    <div className=" flex flex-col justify-center items-center p-20     overflow-auto ">
        <header className="fixed top-0 left-0 right-0 px-6 py-6 z-50">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                  <Navbar />
                </div>
              </header>
      <div className="  bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-20  ">
      <div className="space-y-8">
        <h1 className="text-center text-6xl font-extrabold text-white">
          About Carbonet
        </h1>
        <p className="mt-4 text-center text-lg text-gray-300">
          At <strong>Carbonet</strong>, we are dedicated to uncovering the hidden costs of our digital habits and empowering individuals to make environmentally conscious choices. Let’s talk about the invisible carbon footprint of the internet and its impact on our planet.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-green-400">
          Video Calls: A Modern Necessity with a Hidden Cost
        </h2>
        <p className="mt-2 text-gray-300">
          Video calls became our lifeline during the pandemic, with Zoom's daily participants surging from 10 million in 2019 to over 600 million today. But this convenience comes at a cost. A one-hour Zoom call produces between 150 to 1,000 grams of CO<sub>2</sub>, requires up to 12 liters of water, and uses the land mass equivalent of an iPad Mini for its data centers. Multiply that by 55 billion hours of meetings annually, and the impact becomes staggering. Pro tip: Switching to audio-only reduces emissions by 96%!
        </p>

        <h2 className="mt-6 text-2xl font-bold text-green-400">
          Streaming Video: Entertainment’s Heavy Toll
        </h2>
        <p className="mt-2 text-gray-300">
          Platforms like Netflix stream over 18 million terabytes of data monthly. In 2020, Netflix reported that one hour of streaming emits 100 grams of CO<sub>2</sub>. That’s equivalent to driving a gas-powered car one mile! And Netflix isn’t alone — YouTube emits 6.5 million metric tons of CO<sub>2</sub> annually, while TikTok doubles that at 14.7 million metric tons. These numbers highlight the immense environmental cost of our binge-watching habits.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-green-400">
          AI: A Double-Edged Sword
        </h2>
        <p className="mt-2 text-gray-300">
          Training AI models like ChatGPT consumes vast amounts of energy. Training GPT-3 alone released 500 metric tons of CO<sub>2</sub>, equal to the annual energy use of 120 U.S. homes. Yet, AI also holds the key to optimizing energy efficiency and solving some of these challenges. Tools like BCOOLER are being developed to reduce AI’s environmental impact.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-green-400">
          What You Can Do
        </h2>
        <ul className="list-disc mt-2 ml-6 text-gray-300 space-y-2">
          <li>Switch to audio-only for calls to cut emissions by 96%.</li>
          <li>Use eco-friendly search engines like Ecosia to plant trees.</li>
          <li>Turn off autoplay on video platforms to reduce unnecessary streaming.</li>
          <li>Recycle electronics or donate functioning devices instead of discarding them.</li>
        </ul>

        <h2 className="mt-6 text-2xl font-bold text-green-400">
          Join Us in Building a Sustainable Digital World
        </h2>
        <p className="mt-2 text-gray-300">
          At Carbonet, we believe in harnessing technology to create a greener planet. Together, we can make a lasting impact by making informed choices and demanding accountability from tech companies. Let’s shape a future where innovation and sustainability go hand in hand.
        </p>
        </div>
      </div>
    </div>
  );
};

export default About;
