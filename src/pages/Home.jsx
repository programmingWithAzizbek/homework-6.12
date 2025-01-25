import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header.jsx";
import img1 from "../assets/images/img1.webp";
import img2 from "../assets/images/img2.webp";
import img3 from "../assets/images/img3.webp";
import img4 from "../assets/images/img4.webp";

function Carousel({ images }) {
  return (
    <div className="w-carouselw h-carouselh p-4 rounded-2xl bg-col1 flex items-center justify-start overflow-x-scroll space-x-4 scrollbar-hide">
      {images.map((image, index) => (
        <div
          key={index}
          className="flex-none w-80 h-full bg-white rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

function Home() {
  const images = [img1, img2, img3, img4];

  return (
    <>
      <Header />
      <section>
        <div className="max-w-6xl mx-auto px-8 py-20 flex justify-between items-center">
          <div>
            <h1 className="max-w-xl text-slate-600 font-bold text-6xl">
              We are changing the way people shop
            </h1>
            <p className="text-slate-600 text-lg max-w-lg mt-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              repellat explicabo enim soluta temporibus asperiores aut obcaecati
              perferendis porro nobis.
            </p>
            <NavLink
              className="mt-10 inline-block bg-blue-500 rounded-md py-3 px-3 text-white text-opacity-85"
              to={"/products"}
            >
              OUR PRODUCTS
            </NavLink>
          </div>
          <Carousel images={images} />
        </div>
      </section>
    </>
  );
}

export default Home;
