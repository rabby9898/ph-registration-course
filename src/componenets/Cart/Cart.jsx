import React from "react";

const Cart = ({ item, index }) => {
  return (
    <>
      <li className="text-sm lg:text-base text-[#737272] my-4">{`${
        index + 1
      }. ${item}`}</li>
    </>
  );
};

export default Cart;
