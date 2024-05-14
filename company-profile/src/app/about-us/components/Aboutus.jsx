import Image from "next/image";
import "../../App.css";
import { FaTractor } from "react-icons/fa6";
import { GiPoisonBottle } from "react-icons/gi";
import bgabout from "../../../../public/secabout/bgabout.jpeg";
import imgabout from "../../../../public/secabout/imgabout.png";

function AboutUs() {
  return (
    <>
      <div>
        {/* background */}
        <div className="flex justify-center items-center">
          <Image src={bgabout} alt="" />
          <div className="absolute font-[Roboto] text-[#274C5B] text-[50px] font-semibold">
            About Us
          </div>
        </div>
        {/* company overview */}
        <div className="bg-white p-36">
          <div className="grid grid-cols-2">
            <div className="p-5">
              <Image src={imgabout} alt="" />
            </div>
            <div>
              <div className="font-[Yellowtail] text-[#68A47F] font-medium text-[30px]">
                {`We're Only Have Pure and Organics`}
              </div>
              <div className="font-[Roboto] text-[#274C5B] font-semibold text-[40px]">
                Fresh From Farm
                <br />
                Return To Purity
              </div>
              <div className="font-sans text-[14px] text-slate-600 my-4 text-justify">
                Since <a className="font-bold">2010</a> we commited to serve you
                a good quality of organics real foods. Our rich experience helps
                us in ensuring that the products brought to you are
                <a className="font-bold">100% chemical-free.</a> To live a
                better, healthier, and wholesome life by providing them with
                100% certified, authentic organic food from our own farm.
              </div>
              <div className="font-sans text-[14px] text-slate-600 my-4 text-justify">
                Welcome to the world of nature and organic. Here you can
                discover the bounty of nature. We have grown on the principles
                of health and care. We aim to give our customers a healthy
                chemical-free meal for perfect nutrition.
              </div>
              <div className="grid grid-cols-2">
                <div className="flex items-center">
                  <FaTractor className="fill-[#68A47F] mr-3 size-10" />
                  <div className="font-[Roboto] text-[#274C5B] font-semibold">
                    Modern Agriculture
                    <br />
                    Equipment
                  </div>
                </div>
                <div className="flex items-center">
                  <GiPoisonBottle className="fill-[#68A47F] mr-3 size-10" />
                  <div className="font-[Roboto] text-[#274C5B] font-semibold">
                    No Chemicals &
                    <br />
                    Hormones Are Used
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutUs;
