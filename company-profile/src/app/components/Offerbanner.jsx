import "../App.css";
import home1 from "../../../public/homegrid/home1.jpeg";
import home2 from "../../../public/homegrid/home2.jpeg";
import Image from "next/image";

function OfferBanner() {
  return (
    <>
      <div className=" grid dp:grid-cols-2 grid-cols-1 dp:gap-2 gap-5 dp:m-8 m-1 dp:p-14 p-2 ">
        <div className=" relative flex justify-center items-center">
          <Image src={home1} className=" rounded-xl max-w-[80%]" />
          <div className=" absolute dp:left-20 left-12">
            <div className="dp:text-[30px] text-[20px] text-white font-[Yellowtail]">
              100% Natural
              <div className="font-[Roboto] dp:text-[30px] text-[20px] text-white font-bold">
                Get Yours
                <br />
                And Be Healty
              </div>
            </div>
          </div>
        </div>

        <div className=" relative flex justify-center items-center">
          <Image src={home2} className=" rounded-xl max-w-[80%]" />
          <div className=" absolute dp:left-20 left-12">
            <div className="dp:text-[30px] text-[20px] text-[#68A47F] font-[Yellowtail]">
              Weekly Offer!
              <div className="font-[Roboto] dp:text-[30px] text-[20px] text-[#68A47F] font-bold">
                Get voucher
                <br />
                up to 50% off
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default OfferBanner;
