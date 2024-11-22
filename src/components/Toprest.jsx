import { useState } from "react";

import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Category = () => {
const[slide, setSlide]=useState(0)
  const [data  ] = useState([
      {img:"res0.jpeg",   offer: "Price : ₹102", title: "Offer of the Day", rating:"Ratings : 5",   place:"Place : Banglore" },
      {img:"res1.jpeg",   offer: "Price : ₹122", title: "Offer of the Day", rating:"Ratings : 4",   place:"Place : Banglore" },
      {img:"res2.jpeg",   offer: "Price : ₹123", title: "Offer of the Day", rating:"Ratings : 4.7", place:"Place : Banglore" },
      {img:"res3.jpeg",   offer: "Price : ₹175", title: "Offer of the Day", rating:"Ratings : 4",   place:"Place : Banglore" },
      {img:"res4.jpeg",   offer: "Price : ₹176", title: "Offer of the Day", rating:"Ratings : 5",   place:"Place : Banglore" },
      {img:"res5.jpeg",   offer: "Price : ₹174", title: "Offer of the Day", rating:"Ratings : 4.6", place:"Place : Banglore" },
      {img:"res6.jpeg",   offer: "Price : ₹123", title: "Offer of the Day", rating:"Ratings : 4.",  place:"Place : Banglore" },
      {img:"res7.jpeg",   offer: "Price : ₹123", title: "Offer of the Day", rating:"Ratings : 4",   place:"Place : Banglore" },
      {img:"res8.jpeg",   offer: "Price : ₹155", title: "Offer of the Day", rating:"Ratings : 4.6", place:"Place : Banglore" },
      {img:"res9.jpeg",   offer: "Price : ₹192", title: "Offer of the Day", rating:"Ratings : 3.6", place:"Place : Banglore" },
      {img:"res10.jpeg",  offer: "Price : ₹182", title: "Offer of the Day", rating:"Ratings : 2.6", place:"Place : Banglore" },
      {img:"res11.jpeg",  offer: "Price : ₹172", title: "Offer of the Day", rating:"Ratings : 4.6", place:"Place : Banglore" },
      {img:"res12.jpeg",  offer: "Price : ₹172", title: "Offer of the Day", rating:"Ratings : 3.6", place:"Place : Banglore" },
      {img:"res13.jpeg",  offer: "Price : ₹172", title: "Offer of the Day", rating:"Ratings : 1.6", place:"Place : Banglore" },
      {img:"res14.jpeg",  offer: "Price : ₹172", title: "Offer of the Day", rating:"Ratings : 2.6", place:"Place : Banglore" },
      {img:"res15.jpeg",  offer: "Price : ₹162", title: "Offer of the Day", rating:"Ratings : 3.6", place:"Place : Banglore" },
      {img:"res7.jpeg",   offer: "Price : ₹152", title: "Offer of the Day", rating:"Ratings : 4",   place:"Place : Banglore" },
      {img:"img1.jpeg",   offer: "Price : ₹152", title: "Offer of the Day", rating:"Ratings : 4",   place:"Place : Banglore" },
      {img:"img2.jpeg",   offer: "Price : ₹142", title: "Offer of the Day", rating:"Ratings : 4",   place:"Place : Banglore" },
      {img:"img3.jpeg",   offer: "Price : ₹122", title: "Offer of the Day", rating:"Ratings : 4",   place:"Place : Banglore" },
      {img:"img4.jpeg",   offer: "Price : ₹122", title: "Offer of the Day", rating:"Ratings : 4",   place:"Place : Banglore" },
      {img:"img5.jpeg",   offer: "Price : ₹122", title: "Offer of the Day", rating:"Ratings : 4",   place:"Place : Banglore" },
      {img:"img6.jpeg",   offer: "Price : ₹132", title: "Offer of the Day", rating:"Ratings : 4",   place:"Place : Banglore" },
      {img:"img7.jpeg",   offer: "Price : ₹132", title: "Offer of the Day", rating:"Ratings : 4",   place:"Place : Banglore" },
      

  ]);

  const peeche=()=>{
    
 setSlide((slide +2 -data.length)%data.length)
 console.log("pee")
  }

  const aage=()=>{
  
    setSlide((slide -2 )%data.length)
    console.log(data.length)
   
  }
  return (
    <div className="max-w-[1200px] mx-auto   ">
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold"> Whats on your mind ?</div>
        <div className="flex ">
          <div className=" cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 ">
              <MdKeyboardArrowLeft onClick={peeche}/>
          </div>
          <div className=" cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <MdKeyboardArrowRight  onClick= {aage}  />
          </div>
        </div>
      </div>
      <div className=" gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 overflow-x-hidden  ">
        {data.map((el, ind) => {
          return (<div
              style={{
                transform: `translateX(${slide * 100}%)`,
              }}
              className="shrink-0 duration-700"
              key={ind}
            >
              <img
                className=" w-[289px] rounded-[25px] h-[270px]   shadow-xl  cursor-pointer" 
                src={el.img}
                alt=""
              ></img>
              <div className="-mt-[35px] ml-[10px] font-bold text-[23px] text-[#fc8019]  shadow-sm"> 70% OFF</div>
             
            <div className="flex mt-5 gap-4 font-semibold">
            <p >{el.offer}</p>
            <p className="text-orange-500 shadow-md">{el.title}</p>
            </div>
            <div className="flex gap-4 font-semibold">
              <p className="">{el.rating}</p>
              <p className="">{el.place}</p>
              </div>
            </div>
    
          );
        })}
      </div>
      <hr className="my-6 border-[1px]"></hr>
    </div>
  );
};

export default Category;
