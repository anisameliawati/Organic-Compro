import "../App.css";
import home1 from "../../../public/homegrid/home1.jpeg";
import home2 from "../../../public/homegrid/home2.jpeg";
import Image from "next/image";

function OfferBanner() {
  return (
    <>
      <div className=" flex m-8 p-14">
        <div className=" relative flex justify-center items-center">
          <Image src={home1} className=" rounded-xl max-w-[80%]" />
          <div className=" absolute left-20">
            <div className="text-[30px] text-white font-[Yellowtail]">
              100% Natural
              <div className="font-[Roboto] text-[30px] text-white font-bold">
                Get Yours
                <br />
                And Be Healty
              </div>
            </div>
          </div>
        </div>

        <div className=" relative flex justify-center items-center">
          <Image src={home2} className=" rounded-xl max-w-[80%]" />
          <div className=" absolute left-20">
            <div className="text-[30px] text-[#68A47F] font-[Yellowtail]">
              Weekly Offer!
              <div className="font-[Roboto] text-[30px] text-[#68A47F] font-bold">
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
