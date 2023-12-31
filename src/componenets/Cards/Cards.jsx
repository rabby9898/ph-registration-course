import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import toast from "react-hot-toast";

const Cards = () => {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);
  const [credit, setCredit] = useState(0);
  const [remaining, setRemaining] = useState(20);
  const [total, setTotal] = useState(0);

  const handleSelectBtn = (course) => {
    const isExist = cart.find((item) => item.id === course.id);
    if (isExist) {
      return toast.error("You have already chose this course!");
    } else {
      const newCredit = credit + course.credit;
      if (newCredit > 20) {
        return toast.error("You can't select more than 20 credit hour!");
      } else {
        setCredit(newCredit);

        const remainingHour = 20 - newCredit;

        if (remainingHour < 0) {
          setRemaining(0);
        } else {
          setRemaining(remainingHour);
        }
        const newCart = [...cart, course];
        setCart(newCart);
        const newTotal = total + course.price;
        setTotal(newTotal);
      }
    }
  };

  useEffect(() => {
    fetch("courseData.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row px-5 py-8 lg:px-32 lg:py-10 gap-6">
        <div className="w-full md:w-4/6 lg:w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course) => (
            <Card
              key={course.id}
              course={course}
              handleSelectBtn={handleSelectBtn}
            ></Card>
          ))}
        </div>

        <div className="w-full md:w-1/3 lg:w-1/5 h-fit bg-white shadow-xl rounded-xl p-5">
          <div>
            <h3 className="text-base lg:text-lg text-[#2F80ED] font-bold my-5">
              Credit Hour Remaining {remaining} hr
            </h3>
            <hr />
          </div>
          <h3 className="text-base lg:text-xl text-[#1C1B1B] font-bold my-4">
            Course Name
          </h3>
          <div className="mb-10">
            <div>
              {cart.map((item, index) => (
                <Cart key={index} index={index} item={item}></Cart>
              ))}
            </div>
          </div>
          <hr />
          <div>
            <h3 className="text-base lg:text-lg font-semibold my-5">
              Total Credit Hour: {credit}
            </h3>
            <hr />
            <h3 className="text-base lg:text-lg text-[#737272] font-semibold my-5">
              Total Price: {total} USD
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
