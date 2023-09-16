import React from "react";

const Cart = ({ item, index }) => {
  return (
    <>
      <p className="text-sm lg:text-base text-[#737272] my-4">{`${index + 1}. ${
        item.title
      }`}</p>
    </>
  );
};

export default Cart;
