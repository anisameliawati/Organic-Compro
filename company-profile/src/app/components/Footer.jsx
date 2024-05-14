import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import "../App.css";
import logo from "../../../public/Navbar/logo.svg";
import Image from "next/image";

function Footer() {
  return (
    <>
      <div className="bg-[#EFF6F1]">
        <div className="grid grid-cols-3 gap-10 px-36 py-20 sm:grid-cols-1 sm:gap-6">
          <div className="text-start">
            <div className="font-[Roboto] text-[#274C5B] font-semibold text-[20px]">
              Contact Us
            </div>
            <div className="font-[Roboto] text-[#274C5B] font-semibold text-[15px] mt-2">
              Email
            </div>
            <div className="font-sans font-light text-[#274C5B] text-[14px]">
              needhelp@organick.com
            </div>
            <div className="font-[Roboto] text-[#274C5B] font-semibold text-[15px] mt-2">
              Phone
            </div>
            <div className="font-sans font-light text-[#274C5B] text-[14px]">
              123 456 789
            </div>
            <div className="font-[Roboto] text-[#274C5B] font-semibold text-[15px] mt-2">
              Address
            </div>
            <div className="font-sans font-light text-[#274C5B] text-[14px]">
              Jl. Jenderal Sudirman No.Kav. 21
            </div>
          </div>
          <div>
            <Image src={logo} className="m-auto" alt="" />
            <div className="text-center font-sans font-light text-[#274C5B] text-[14px] m-4">
              We are a popular and farming company aspiring to be a leader in
              the Organic food industry.
            </div>
            <div className="flex justify-center">
              <div>
                <FaLinkedin className="size-[25px]" />
              </div>
              <div>
                <FaSquareFacebook className="size-[25px]" />
              </div>
              <div>
                <FaXTwitter className="size-[25px]" />
              </div>
            </div>
          </div>
          <div className="text-end">
            <div className="font-[Roboto] text-[#274C5B] font-semibold text-[20px]">
              Company
            </div>
            <div className="font-[Roboto] text-[#274C5B] font-semibold text-[15px] mt-4">
              Products
            </div>
            <div className="font-[Roboto] text-[#274C5B] font-semibold text-[15px] mt-4">
              About Us
            </div>
            <div className="font-[Roboto] text-[#274C5B] font-semibold text-[15px] mt-4">
              Our Team
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
