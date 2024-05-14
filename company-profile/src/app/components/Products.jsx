import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import "../App.css";
import { FaArrowRight } from "react-icons/fa";
import tomat from "../../../public/products/tomat.png";
import nuts from "../../../public/products/nuts.png";
import banana from "../../../public/products/banana.png";

import Image from "next/image";

function ProductsHome() {
  return (
    <>
      <div className="bg-[#EFF6F1] flex items-center justify-center">
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
                <div className=" bg-[#274C5B] rounded-full p-0.5">
                  <FaArrowRight className=" text-white text-[80%]" />
                </div>{" "}
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 justify-items-center">
            {/* product 1 */}
            <div className="flex w-[80%] bg-white rounded-xl p-3">
              <div className="">
                <div className="bg-[#EFF6F1] w-[50%] p-3 m-2 rounded-xl text-center font-[Roboto] font-semibold text-[#274C5B]">
                  Vegetables
                </div>
                <Image src={tomat} className="m-3 max-h-[60%]" alt="" />
                <div className="font-[Roboto] font-semibold text-[#274C5B] px-5 pb-1">
                  Vegan Tomato
                </div>
                <hr />
                <div>
                  <div className="flex text-[15px] justify-between items-center pt-2 px-5">
                    <div>
                      <h2 className="line-through opacity-25">$ 14.00</h2>
                      <h2 className="text-[#274C5B]">$ 10.00</h2>
                    </div>
                    <div className="flex">
                      <FaStar className="fill-yellow-400" />
                      <FaStar className="fill-yellow-400" />
                      <FaStar className="fill-yellow-400" />
                      <FaStar className="fill-yellow-400" />
                      <FaRegStarHalfStroke className="fill-yellow-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* product 2 */}
            <div className="flex w-[80%] bg-white rounded-xl p-3">
              <div className="">
                <div className="bg-[#EFF6F1] w-[50%] p-3 m-2 rounded-xl text-center font-[Roboto] font-semibold text-[#274C5B]">
                  Nuts
                </div>
                <Image src={nuts} className="m-3 max-h-[60%]" alt="" />
                <div className="font-[Roboto] font-semibold text-[#274C5B] px-5 pb-1">
                  White Hazelnut
                </div>
                <hr />
                <div>
                  <div className="flex text-[15px] justify-between items-center pt-2 px-5">
                    <div>
                      <h2 className="line-through opacity-25">$ 20.00</h2>
                      <h2 className="text-[#274C5B]">$ 12.00</h2>
                    </div>
                    <div className="flex">
                      <FaStar className="fill-yellow-400" />
                      <FaStar className="fill-yellow-400" />
                      <FaStar className="fill-yellow-400" />
                      <FaStar className="fill-yellow-400" />
                      <FaRegStarHalfStroke className="fill-yellow-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* product 3 */}
            <div className="flex w-[80%] bg-white rounded-xl p-3">
              <div>
                <div className="bg-[#EFF6F1] w-[50%] p-3 m-2 rounded-xl text-center font-[Roboto] font-semibold text-[#274C5B]">
                  Fruits
                </div>
                <Image src={banana} className="m-3 max-h-[60%]" alt="" />
                <div className="font-[Roboto] font-semibold text-[#274C5B] px-5 pb-1">
                  Fresh Organic Banana
                </div>
                <hr />
                <div>
                  <div className="flex text-[15px] justify-between items-center pt-2 px-5">
                    <div>
                      <h2 className="line-through opacity-25">$ 25.00</h2>
                      <h2 className="text-[#274C5B]">$ 14.00</h2>
                    </div>
                    <div className="flex">
                      <FaStar className="fill-yellow-400" />
                      <FaStar className="fill-yellow-400" />
                      <FaStar className="fill-yellow-400" />
                      <FaStar className="fill-yellow-400" />
                      <FaStar className="fill-yellow-400" />
                    </div>
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
export default ProductsHome;
