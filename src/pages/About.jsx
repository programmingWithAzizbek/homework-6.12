import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";

function About() {
  return (
    <>
      <Header />
      <section>
        <div className="max-w-6xl mx-auto px-8 py-20 flex justify-center items-center">
          <div>
            <div className="w-full flex gap-x-6 justify-center">
              <h2 className="text-6xl -tracking-wide text-col3 font-bold mt-aboutmt">
                We love
              </h2>
              <span className="bg-col3 px-6 py-4 tracking-widest text-4xl font-bold text-col2 rounded-2xl">
                comfy
              </span>
            </div>
            <p className="text-lg line-height-abouttextlh max-w-2xl text-slate-700 mt-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              quae quam blanditiis vitae, dolor non eveniet ipsum voluptatibus,
              quia optio aut! Perferendis ipsa cumque ipsam nostrum
              reprehenderit ad illo sed officiis ea tempore! Similique eos
              minima sit porro, ratione aspernatur!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
