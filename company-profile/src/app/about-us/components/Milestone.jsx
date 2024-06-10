import Image from "next/image";
import "../../App.css";
import milestone from "../../../../public/secabout/milestone.jpeg";

function Milestone() {
  return (
    <>
      <div className="bg-[#F9F8F8] dp:p-36 p-10">
        <div className="grid dp:grid-cols-2 grid-cols-1">
          <div className="">
            <div className="font-[Yellowtail] text-[#68A47F] font-semibold text-[30px]">
              Why Organick Store?
            </div>
            <div className="font-[Roboto] text-[#274C5B] font-semibold dp:text-[40px] text-[25px]">
              We Cultivating The Chemical & Fertilizer Free Products
            </div>
            <div className="font-sans text-[14px] text-slate-600 my-4 text-justify">
              After a lot of struggles in our lives, we now are popular and now
              we are producing the best organic products. Initially.
            </div>
            <div className="py-2 w-[200px] font-[Roboto] text-[#274C5B] font-medium rounded-3xl bg-[#ECECEC] text-center">
              100% Natural Product
            </div>
            <div className="font-sans text-[14px] text-slate-600 my-4 text-justify px-4">
              In our listing, we have several collections of organic products
              and place where you need to choose the product you want.
            </div>
            <div className="py-2 w-[200px] font-[Roboto] text-[#274C5B] font-medium rounded-3xl bg-[#ECECEC] text-center">
              Same Day Delivery
            </div>
            <div className="font-sans text-[14px] text-slate-600 my-4 text-justify px-4 ">
              If you are not comfortable going to the nearby market place we
              also will deliver your product to your doorstep.
            </div>
          </div>
          <div className="p-5">
            <Image src={milestone} className="rounded-xl" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Milestone;
