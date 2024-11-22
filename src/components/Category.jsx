import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Category = () => {
  const [slide, setSlide] = useState(0);
  const [cat] = useState([
    {
      img: "img1.jpeg",
      name: "biriyani",
    },
    {
      img: "img2.jpeg",
      name: "Papdi",
    },
    {
      img: "img4.jpeg",
      name: "buchoc",
    },
    {
      img: "img5.jpeg",
      name: "burger",
    },
    {
      img: "img6.jpeg",
      name: "gulab jM",
    },
    {
      img: "img7.jpeg",
      name: "meal",
    },

    {
      img: "img1.jpeg",
      name: "biriyani",
    },
    {
      img: "img2.jpeg",
      name: "Papdi",
    },
    {
      img: "img4.jpeg",
      name: "buchoc",
    },
    {
      img: "img5.jpeg",
      name: "burger",
    },
    {
      img: "img6.jpeg",
      name: "gulab jM",
    },
    {
      img: "img7.jpeg",
      name: "meal",
    },
    {
      img: "img1.jpeg",
      name: "biriyani",
    },
    {
      img: "img2.jpeg",
      name: "Papdi",
    },
    {
      img: "img4.jpeg",
      name: "buchoc",
    },
    {
      img: "img5.jpeg",
      name: "burger",
    },
    {
      img: "img6.jpeg",
      name: "gulab jm",
    },
    {
      img: "img7.jpeg",
      name: "meal",
    },
    {
      img: "img4.jpeg",
      name: "buchoc",
    },
    {
      img: "img5.jpeg",
      name: "burger",
    },
    {
      img: "img7.jpeg",
      name: "meal",
    },
    {
      img: "img4.jpeg",
      name: "buchoc",
    },
    {
      img: "img5.jpeg",
      name: "burger",
    },
    {
      img: "img5.jpeg",
      name: "burger",
    },
  ]);

  const back = () => {
    setSlide((slide + 6 - cat.length) % cat.length);
  };

  const front = () => {
    setSlide((slide - 6) % cat.length);
  };

  return (
    <div className="max-w-[1200px] mx-auto  z-0  ">
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold"> Whats on your mind ?</div>
        <div className="flex ">
          <div className=" cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 ">
            <MdKeyboardArrowLeft onClick={back} />{" "}
          </div>
          <div className=" cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <MdKeyboardArrowRight onClick={front} />
          </div>
        </div>
      </div>
      <div className="gap-4 flex overflow-hidden ">
        {cat.map((el, ind) => {
          return (
            <div
              style={{
                transform: `translateX(${slide * 100}%)`,
              }}
              className="shrink-0 duration-500"
              key={ind}
            >
              <img
                className="  w-[135px] rounded-full h-[135px] sm:w-[135px] sm:h-[135px] shadow-xl mt-5  "
                src={el.img}
                alt=""
              ></img>
              <p className="text-center font-medium">{el.name}</p>
            </div>
          );
        })}
      </div>
      <hr className="my-6 border-[1px]"></hr>
    </div>
  );
};

export default Category;
