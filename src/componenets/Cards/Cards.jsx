import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";

const Cards = () => {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);
  const [credit, setCredit] = useState(0);
  const [remaining, setRemaining] = useState(20);

  const handleSelectBtn = (course) => {
    const isExist = cart.find((item) => item === course.title);
    if (isExist) {
      return alert("You Have Already Choose this course!");
    } else {
      const newCart = [...cart, course.title];
      setCart(newCart);
    }
    const newCredit = credit + course.credit;
    if (newCredit > 20) {
      return alert("You Can not select more than 20 credit hour");
    } else {
      setCredit(newCredit);
    }
    const remainingHour = 20 - newCredit;

    if (remainingHour < 0) {
      setRemaining(0);
    } else {
      setRemaining(remainingHour);
    }
  };
  useEffect(() => {
    fetch("courseData.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <>
      <div className="flex px-5 py-4 lg:px-32 lg:py-10">
        <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course) => (
            <Card
              key={course.id}
              course={course}
              handleSelectBtn={handleSelectBtn}
            ></Card>
          ))}
        </div>

        <div className="w-1/5 h-fit bg-white shadow-xl rounded-xl p-5">
          <div>
            <h3 className="text-lg text-[#2F80ED] font-bold my-5">
              Credit Hour Remaining {remaining} hr
            </h3>
            <hr />
          </div>
          <h3 className="text-xl text-[#1C1B1B] font-bold my-4">Course Name</h3>
          <div className="mb-5">
            <ol>
              {cart.map((item, index) => (
                <Cart key={index} index={index} item={item}></Cart>
              ))}
            </ol>
          </div>
          <hr />
          <div>
            <h3 className="text-lg font-semibold my-5">
              Total Credit Hour: {credit}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
