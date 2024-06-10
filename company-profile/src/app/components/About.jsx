import Image from "next/image";
import "../App.css";
import Photo from "../../../public/photo.png";
import food from "../../../public/About/food.png";
import mail from "../../../public/About/mail.png";
import { FaArrowRight } from "react-icons/fa";

function About() {
  return (
    <>
      <div className="bg-[#F9F8F8] flex flex-col justify-center items-center dp:p-10 p-2">
        <div className="font-[Yellowtail] py-2 text-[30px] text-[#68A47F]">
          About Us
        </div>
        <div className=" grid dp:grid-cols-2 grid-cols-1 max-w-[80%] max-h-auto dp:p-6 p-1 ">
          <div className="max- h-auto">
            <Image src={Photo} className="" alt="" />
          </div>
          <div>
            <h1 className="font-[Roboto] font-semibold dp:text-[35px] text-[20px] text-[#274C5B]">
              We Believe In Organic
              <br />
              Foods For Strong Health
            </h1>
            <p className="font-sans text-[#525C60] dp:text-[15px] text-[10px] text-justify">
              Welcome to the world of natural and organic. Here you can discover
              the bounty of nature. We have grown on the principles of health,
              and care. We aim to give our customers a healthy chemical-free
              meal for perfect nutrition.
            </p>
            <div className="flex items-center dp:mt-4 mt-2">
              <div className="dp:mr-4 mr-1 rounded-xl bg-[#FFFFFF] dp:p-3 p-2 ">
                <Image src={food} alt="" />
              </div>
              <div className="font-[Roboto]">
                <h1 className="font-semibold text-[#274C5B] py-1">
                  Organic Foods Only
                </h1>
                <p className="text-[14px] text-[#525C60]">
                  The Product that you ordered will be verified that we have or
                  not if have we will start to move on with the next step.
                </p>
              </div>
            </div>
            <div className="flex items-center dp:mt-4 mt-2">
              <div className="dp:mr-4 mr-1 rounded-xl bg-[#FFFFFF] dp:p-3 p-2">
                <Image src={mail} alt="" />
              </div>
              <div className="font-[Roboto]">
                <h1 className="font-semibold text-[#274C5B] py-1">
                  Quality Standards
                </h1>
                <p className="text-[14px] text-[#525C60]">
                  Once your product is packed it will be delivered to your
                  nearby locality you can directly visit the to buy the product.
                </p>
              </div>
            </div>
            <div className="mt-10">
              <button className="bg-[#274C5B] flex items-center rounded-2xl p-4 gap-2 px-[20px] text-white font-[Roboto] text-sm font-semibold">
                Shop Now
                <FaArrowRight className=" text-white text-[80%]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
