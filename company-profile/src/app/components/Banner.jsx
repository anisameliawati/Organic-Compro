import "../App.css";
import bg from "../../../public/Hero/bg.jpeg";
import arrow from "../../../public/Hero/arrow.svg";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

function BannerComponents() {
  return (
    <>
      <div className="flex justify-start items-center">
        <Image src={bg} className="bg-cover object-contain" alt="" />
        <div className="absolute text-left px-8 h-[405px]">
          <h3 className="text-[40px] text-[#68A47F] font-[Yellowtail] md:text-[20px]">
            100% Natural Food
          </h3>
          <h1 className="font-[Roboto] font-extrabold text-[70px] text-[#274C5B] leading-tight">
            Welcome to the
            <br />
            world of nature
            <br />
            and organic
          </h1>
          <h3 className="text-[25px] text-[#274C5B]">
            Choose the best healthier way of life
          </h3>
          <button className="bg-[#EFD372] font-semibold text-[#274C5B] py-4 pr-8 gap-2 pl-6 rounded-2xl my-2 font-[Roboto] flex justify-center items-center hover:animate-bounce">
            Explore Now
            <div className=" bg-[#274C5B] rounded-full p-0.5">
              <FaArrowRight className=" text-white text-[80%]" />
            </div>{" "}
          </button>
        </div>
      </div>
    </>
  );
}
export default BannerComponents;
