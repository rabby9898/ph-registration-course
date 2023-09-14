import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
  const [courses, setCourses] = useState([]);
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
            <Card course={course}></Card>
          ))}
        </div>

        <div className="w-1/5">
          <h1>Course Cart</h1>
        </div>
      </div>
    </>
  );
};

export default Cards;
