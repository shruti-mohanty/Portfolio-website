import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Shruti Mohanty
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#102aef] leading-tight">
            <span className="text-white">I am a </span>
            <span className="text-[#102aef] font-bold">
              <Typewriter
                words={["Fullstack Developer", "Student", "Coder"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            Hi, I'm Shruti Mohanty. I'm passionate about web development and
            coding. I enjoy building creative and user-friendly websites. I'm
            currently learning and growing my skills in frontend and backend
            development. I love problem-solving and always look forward to new
            challenges that help me improve.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/16mMhz0G1LUxcIGp8rL_LPywPOWzg4K6A/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #310bf1, #1479e4)",
              boxShadow: "0 0 2px #250ef4, 0 0 2px #0b1dec, 0 0 40px #1c0eee",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-blue-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Shruti Mohanty"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(19,15,243,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
