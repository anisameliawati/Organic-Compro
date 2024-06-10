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
          <Image
            src={bgproduct}
            alt=""
            className="dp:object-contain object-cover"
          />
          <div className="absolute font-[Roboto] text-[#274C5B] dp:text-[50px] text-[30px] font-semibold">
            Shop
          </div>
        </div>
        <div className="bg-[#f9f8f8] flex items-center justify-center">
          <div className=" w-[80%] m-10">
            <div className="flex justify-between mx-10 my-2">
              <div>
                <h1 className="font-[Yellowtail] text-[#68A47F] text-[30px]">
                  Offer Products
                </h1>
                <h1 className="font-[Roboto] font-semibold text-[30px] text-[#274C5B]">
                  We Offer Organic For You
                </h1>
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
