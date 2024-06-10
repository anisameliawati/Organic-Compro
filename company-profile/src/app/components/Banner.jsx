import "../App.css";
import bg from "../../../public/Hero/bg.jpeg";
import arrow from "../../../public/Hero/arrow.svg";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

function BannerComponents() {
  return (
    <>
      <div className="flex justify-start items-center">
        <Image
          src={bg}
          className="dp:bg-cover bg-contain object-contain"
          alt=""
        />
        <div className="absolute text-left dp:px-8 px-2 dp:h-[405px] h-auto ">
          <h3 className="text-[10px] text-[#68A47F] font-[Yellowtail] dp:text-[30px]">
            100% Natural Food
          </h3>
          <h1 className="font-[Roboto] font-extrabold dp:text-[70px] text-[20px] text-[#274C5B] leading-tight">
            Welcome to the
            <br />
            world of nature
            <br />
            and organic
          </h1>
          <h3 className="dp:text-[25px] text-[8px] text-[#274C5B]">
            Choose the best healthier way of life
          </h3>
          <button className="bg-[#EFD372] font-semibold text-[#274C5B] dp:text-[15px] text-[8px] dp:py-4 py-1 dp:pr-8 pr-2 gap-2 dp:pl-6 pl-2 rounded-2xl my-2 font-[Roboto] flex justify-center items-center hover:animate-bounce">
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
