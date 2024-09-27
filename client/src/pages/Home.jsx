import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex mx-6 justify-center">
      <div className="w-screen h-96 flex flex-col justify-center">
        <div className="flex flex-col justify-center mx-6">
          <h1 className="text-5xl font-logo my-4">Vidhi-Lekhak </h1>
          <p className="text-2xl font-logo mb-4">Your Trusted Legal Document Generator</p>
          <p className="text-lg">
            Vidi-Lekhak helps you effortlessly generate any legal document in India. Our smart tool automates the
            creation of legal documents based on user input, ensuring compliance with local laws, and significantly
            reducing the workload for legal teams. Whether it's contracts, agreements, or other legal forms, Vidi-Lekhak
            provides quick, accurate, and reliable documents tailored to your specific needs.
          </p>
        </div>
        <div className="m-4">
          <Link
            to="/select"
            className="w-80 p-2 justify-center top-[10px] text-white text-[25px] font-semibold font-['Akshar'] bg-slate-950 rounded-lg px-5 py-1"
          >
            Start Generating ...
          </Link>
        </div>
      </div>
      <div className="my-12">
        <img src="../src/assets/hero.png" alt="hero" />
      </div>
    </div>
  );
};

export default Home;
