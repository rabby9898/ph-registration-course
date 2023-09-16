import React from "react";
import { FiDollarSign } from "react-icons/fi";
import { BsBook } from "react-icons/bs";
const Card = ({ course, handleSelectBtn }) => {
  const { id, image, title, description, price, credit } = course;
  return (
    <>
      <div className="card w-full lg:w-11/12 bg-base-100 shadow-xl">
        <img className="p-5 rounded-lg" src={image} alt="courses image" />

        <div className="card-body ">
          <h2 className="card-title text-lg lg:text-xl text-[#1C1B1B] font-semibold md:mb-2 lg:mb-4">
            {title}
          </h2>
          <p className="text-sm text-[#737272]">{description}</p>
          <div className="w-full flex flex-col lg:flex-row justify-between my-4 items-baseline gap-4 lg:gap:0">
            <div className="flex items-center gap-4">
              <FiDollarSign className="text-base lg:text-lg inline"></FiDollarSign>
              <p className="text-base lg:text-lg text-[#737272]">
                Price: {price}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <BsBook className="text-base lg:text-lg inline"></BsBook>
              <p className="text-base lg:text-lg text-[#737272]">
                Credit: {credit}hr
              </p>
            </div>
          </div>

          <button
            onClick={() => handleSelectBtn(course)}
            className="btn btn-primary border-0 capitalize text-lg text-white bg-[#2F80ED] rounded-lg mb-4"
          >
            Select
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
