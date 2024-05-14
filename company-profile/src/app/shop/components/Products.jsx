import "../../App.css";
import ListProduct from "./Listproduct";
import bgproduct from "../../../../public/secproduct/bgproduct.jpeg";
import arrow from "../../../../public/Hero/arrow.svg";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

function ProductComponents() {
  return (
    <>
      {/* background */}
      <div>
        <div className="flex justify-center items-center">
          <Image src={bgproduct} alt="" />
          <div className="absolute font-[Roboto] text-[#274C5B] text-[50px] font-semibold">
            Shop
          </div>
        </div>
        <div className="bg-[#f9f8f8] flex items-center justify-center">
          <div className="grid w-[80%] m-10">
            <div className="flex justify-between mx-10 my-2">
              <div>
                <h1 className="font-[Yellowtail] text-[#68A47F] text-[30px]">
                  Offer Products
                </h1>
                <h1 className="font-[Roboto] font-semibold text-[30px] text-[#274C5B]">
                  We Offer Organic For You
                </h1>
              </div>
              <div className="flex py-3">
                <button className="flex bg-[#EFD372] p-4 rounded-xl gap-2 items-center font-[Roboto] font-semibold text-[#274C5B]">
                  View All Products
                  <div className=" bg-[#274C5B] rounded-full p-1">
                    <FaArrowRight className=" text-white text-xs" />
                  </div>
                </button>
              </div>
            </div>
            <ListProduct />
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductComponents;
