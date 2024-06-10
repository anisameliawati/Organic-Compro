import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import bgteams from "../../../../public/secteams/bgteams.jpeg";
import photo1 from "../../../../public/secteams/photo1.jpg";
import photo2 from "../../../../public/secteams/photo2.jpg";
import photo3 from "../../../../public/secteams/photo3.jpg";
import photo4 from "../../../../public/secteams/photo4.jpg";
import photo5 from "../../../../public/secteams/photo5.jpg";
import photo6 from "../../../../public/secteams/photo6.jpg";
import "../../App.css";
import Image from "next/image";

function Teams() {
  return (
    <>
      <div>
        <div className="flex justify-center items-center">
          <Image
            src={bgteams}
            alt=""
            className="dp:object-contain object-cover"
          />
          <div className="absolute font-[Roboto] text-[#274C5B] dp:text-[50px] text-[30px] font-semibold">
            Our Team
          </div>
        </div>

        <div className="bg-white dp:p-20 p-10">
          <div className="">
            <div className="font-[Yellowtail] text-[#68A47F] font-medium text-[30px] text-center">
              The Team
            </div>
            <div className="font-[Roboto] text-[#274C5B] font-semibold dp:text-[40px] text-[25px] text-center">
              Our Organic Experts
            </div>
            <div className="font-sans text-[14px] text-slate-600 mb-8 mt-3 text-center">
              We have grown on the principles of health, ecology, and care. We
              aim to give
              <br />
              our customers a healthy chemical-free meal for perfect nutrition.
            </div>
            {/* grid */}
            <div className="grid dp:grid-cols-3 grid-cols-1 gap-5">
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

              {/* person 4 */}
              <div className="bg-[#F9F8F8] rounded-2xl pb-9">
                <Image src={photo4} className="rounded-t-xl" alt="" />
                <div className="text-center mt-5">
                  <div className="font-[Roboto] text-[#274C5B] font-semibold text-[20px]">
                    Keira Knightley
                  </div>
                  <div className="font-[Yellowtail] text-[#68A47F] text-[20px] tracking-wide">
                    Farm Expert
                  </div>
                </div>
                <div className="flex justify-center mt-2 gap-3">
                  <FaLinkedin className="size-[20px]" />
                  <FaSquareFacebook className="size-[20px]" />
                  <FaXTwitter className="size-[20px]" />
                </div>
              </div>

              {/* person 5 */}
              <div className="bg-[#F9F8F8] rounded-2xl pb-9">
                <Image src={photo5} className="rounded-t-xl" alt="" />
                <div className="text-center mt-5">
                  <div className="font-[Roboto] text-[#274C5B] font-semibold text-[20px]">
                    Scott Lawrence
                  </div>
                  <div className="font-[Yellowtail] text-[#68A47F] text-[20px] tracking-wide">
                    Logistic
                  </div>
                </div>
                <div className="flex justify-center mt-2 gap-3">
                  <FaLinkedin className="size-[20px]" />
                  <FaSquareFacebook className="size-[20px]" />
                  <FaXTwitter className="size-[20px]" />
                </div>
              </div>

              {/* person 6 */}
              <div className="bg-[#F9F8F8] rounded-2xl pb-9">
                <Image src={photo6} className="rounded-t-xl" alt="" />
                <div className="text-center mt-5">
                  <div className="font-[Roboto] text-[#274C5B] font-semibold text-[20px]">
                    Karen Allen
                  </div>
                  <div className="font-[Yellowtail] text-[#68A47F] text-[20px] tracking-wide">
                    Manager
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
      </div>
    </>
  );
}
export default Teams;
