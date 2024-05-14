import "../App.css";
import { IoBagHandleOutline } from "react-icons/io5";
import { PiPlant } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import Photo from "../../../public/About/Photo.jpg";
import Image from "next/image";

function Company() {
  return (
    <>
      <div className="flex justify-center items-center bg-[#FFFF] p-10">
        <div className="flex justify-center items-center max-w-[80%] ">
          <div className="pr-2">
            <div className="py-4 text-[30px] ">
              <h1 className="font-[Yellowtail] text-[#68A47F]">Eco Friendly</h1>
              <h1 className="font-[Roboto] text-[#274C5B] font-semibold ">
                From Our Farm To Your Home.
              </h1>
            </div>

            <div>
              <h1 className="flex font-semibold text-[#274C5B] py-1 text-[20px] gap-3 items-center">
                <IoBagHandleOutline />
                Choose Your Products
              </h1>
              <p className="text-[15px] text-[#525C60] pb-3">
                In our listing, we have several collections of organic products.
                This is the place where you need to choose the product you want.
              </p>
            </div>
            <div>
              <h1 className="flex font-semibold text-[#274C5B] py-1 text-[20px] gap-3 items-center">
                <PiPlant />
                Farmers Will Produce It
              </h1>
              <p className="text-[15px] text-[#525C60] pb-3">
                The Product that you ordered will be verified that we have or
                not if have we will start to move on with the next step.
              </p>
            </div>
            <div>
              <h1 className="flex font-semibold text-[#274C5B] py-1 text-[20px] gap-3 items-center">
                <TbTruckDelivery />
                We Can Delivery Too
              </h1>
              <p className="text-[15px] text-[#525C60] pb-3">
                If you are not comfortable going to the nearby market place we
                also will deliver your product to your doorstep.
              </p>
            </div>
          </div>

          <div className="w-[80%]">
            <Image src={Photo} className="w-[100%] rounded-lg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Company;
