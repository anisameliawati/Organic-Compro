import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import "../../App.css";
import Image from "next/image";
import photo1 from "../../../../public/secabout/photo1.jpg";
import photo2 from "../../../../public/secabout/photo2.jpg";
import photo3 from "../../../../public/secabout/photo3.jpg";

function Team() {
  return (
    <>
      <div className="bg-white p-36">
        <div className="">
          <div className="font-[Yellowtail] text-[#68A47F] font-medium text-[30px] text-center">
            The Team
          </div>
          <div className="font-[Roboto] text-[#274C5B] font-semibold text-[40px] text-center">
            Our Organic Experts
          </div>
          <div className="font-sans text-[14px] text-slate-600 mb-8 mt-3 text-center">
            We have grown on the principles of health, ecology, and care. We aim
            to give
            <br />
            our customers a healthy chemical-free meal for perfect nutrition.
          </div>
          {/* grid */}
          <div className="grid grid-cols-3 gap-5">
            {/* person 1 */}
            <div className="bg-[#F9F8F8] rounded-2xl pb-9">
              <Image src={photo1} className="rounded-t-xl" alt="" />
              <div className="text-center mt-5">
                <div className="font-[Roboto] text-[#274C5B] font-semibold text-[20px]">
                  Shane Watson
                </div>
                <div className="font-[Yellowtail] text-[#68A47F] text-[20px] tracking-wide">
                  Farmer
                </div>
              </div>
              <div className="flex justify-center mt-2 gap-3">
                <FaLinkedin className="size-[20px]" />
                <FaSquareFacebook className="size-[20px]" />
                <FaXTwitter className="size-[20px]" />
              </div>
            </div>

            {/* person 2 */}
            <div className="bg-[#F9F8F8] rounded-2xl pb-9">
              <Image src={photo2} className="rounded-t-xl" alt="" />
              <div className="text-center mt-5">
                <div className="font-[Roboto] text-[#274C5B] font-semibold text-[20px]">
                  Maria Thomas
                </div>
                <div className="font-[Yellowtail] text-[#68A47F] text-[20px] tracking-wide">
                  Marketing
                </div>
              </div>
              <div className="flex justify-center mt-2 gap-3">
                <FaLinkedin className="size-[20px]" />
                <FaSquareFacebook className="size-[20px]" />
                <FaXTwitter className="size-[20px]" />
              </div>
            </div>

            {/* person 3 */}
            <div className="bg-[#F9F8F8] rounded-2xl pb-9">
              <Image src={photo3} className="rounded-t-xl" alt="" />
              <div className="text-center mt-5">
                <div className="font-[Roboto] text-[#274C5B] font-semibold text-[20px]">
                  Angeline Flora
                </div>
                <div className="font-[Yellowtail] text-[#68A47F] text-[20px] tracking-wide">
                  Finance
                </div>
              </div>
              <div className="flex justify-center mt-2 gap-3">
                <FaLinkedin className="size-[20px]" />
                <FaSquareFacebook className="size-[20px]" />
                <FaXTwitter className="size-[20px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Team;
