import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ id, image, price, title }) {
  const navigate = useNavigate();

  function handleCardClick(id) {
    localStorage.setItem("id", id);
    navigate(`/productsdetails/${id}`);
  }

  return (
    <div
      onClick={() => handleCardClick(id)}
      className="max-w-cardsmw w-full shadow-xl bg-white rounded-2xl cursor-pointer"
    >
      <div className="px-4 pt-4 w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-xl"
        />
      </div>
      <div className="w-full p-8 text-center flex flex-col gap-y-2">
        <h2 className="text-xl font-semibold tracking-wider text-col3 capitalize">
          {title}
        </h2>
        <span className="text-col5 text-base">${price}</span>
      </div>
    </div>
  );
}

export default Card;
