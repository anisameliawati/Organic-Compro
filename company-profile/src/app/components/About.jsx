import Image from "next/image";
import "../App.css";
import Photo from "../../../public/photo.png";
import food from "../../../public/About/food.png";
import mail from "../../../public/About/mail.png";
import { FaArrowRight } from "react-icons/fa";

function About() {
  return (
    <>
      <div className="bg-[#F9F8F8] flex flex-col justify-center items-center p-10">
        <div className="flex max-w-[80%] p-6 ">
          <Image src={Photo} className="w-[50%]" alt="" />
          <div>
            <div className="font-[Yellowtail] py-2 text-[30px] text-[#68A47F]">
              About Us
            </div>
            <h1 className="font-[Roboto] font-semibold text-[35px] text-[#274C5B]">
              We Believe In Organic
              <br />
              Foods For Strong Health
            </h1>
            <p className="font-sans text-[#525C60] text-[15px] text-justify">
              Welcome to the world of natural and organic. Here you can discover
              the bounty of nature. We have grown on the principles of health,
              and care. We aim to give our customers a healthy chemical-free
              meal for perfect nutrition.
            </p>
            <div className="flex items-center mt-4">
              <div className="mr-4 rounded-xl bg-[#FFFFFF] p-3">
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
            <div className="flex items-center mt-4">
              <div className="mr-4 rounded-xl bg-[#FFFFFF] p-3">
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
