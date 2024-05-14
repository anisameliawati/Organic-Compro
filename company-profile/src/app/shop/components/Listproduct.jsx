import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import tomat from "../../../../public/secproduct/tomat.png";
import brokoli from "../../../../public/secproduct/brokoli.png";
import jagung from "../../../../public/secproduct/jagung.png";
import nuts from "../../../../public/secproduct/nuts.png";
import banana from "../../../../public/secproduct/banana.png";
import telur from "../../../../public/secproduct/telur.png";
import Image from "next/image";

function ListProduct() {
  return (
    <>
      <div className="grid grid-cols-3 gap-x-2 gap-y-0 justify-items-center p-3">
        {/* product 1 */}
        <div className="flex w-[80%] h-[80%] bg-white rounded-xl p-3 justify-center">
          <div className="">
            <div className="bg-[#EFF6F1] w-[50%] p-3 m-2 rounded-xl text-center font-[Roboto] font-semibold text-[#274C5B]">
              Vegetables
            </div>
            <Image src={tomat} className="m-3 max-h-[50%]" alt="" />
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
        <div className="flex w-[80%] h-[80%] bg-white rounded-xl p-3 justify-center">
          <div className="">
            <div className="bg-[#EFF6F1] w-[50%] p-3 m-2 rounded-xl text-center font-[Roboto] font-semibold text-[#274C5B]">
              Nuts
            </div>
            <Image src={nuts} className="m-3 max-h-[50%]" alt="" />
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
        <div className="flex w-[80%] h-[80%] bg-white rounded-xl p-3 justify-center">
          <div>
            <div className="bg-[#EFF6F1] w-[50%] p-3 m-2 rounded-xl text-center font-[Roboto] font-semibold text-[#274C5B]">
              Fruits
            </div>
            <Image src={banana} className="m-3 max-h-[50%]" alt="" />
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

        {/* product 4 */}
        <div className="flex w-[80%] h-[80%] bg-white rounded-xl p-3 justify-center">
          <div className="">
            <div className="bg-[#EFF6F1] w-[50%] p-3 m-2 rounded-xl text-center font-[Roboto] font-semibold text-[#274C5B]">
              Vegetables
            </div>
            <Image src={brokoli} className="m-3 max-h-[50%]" alt="" />
            <div className="font-[Roboto] font-semibold text-[#274C5B] px-5 pb-1">
              Broccoli
            </div>
            <hr />
            <div>
              <div className="flex text-[15px] justify-between items-center pt-2 px-5">
                <div>
                  <h2 className="line-through opacity-25">$ 23.00</h2>
                  <h2 className="text-[#274C5B]">$ 17.00</h2>
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

        {/* product 5 */}
        <div className="flex w-[80%] h-[80%] bg-white rounded-xl p-3 justify-center">
          <div className="">
            <div className="bg-[#EFF6F1] w-[50%] p-3 m-2 rounded-xl text-center font-[Roboto] font-semibold text-[#274C5B]">
              Fresh
            </div>
            <Image src={jagung} className="m-3 max-h-[50%]" alt="" />
            <div className="font-[Roboto] font-semibold text-[#274C5B] px-5 pb-1">
              Sweet Corn
            </div>
            <hr />
            <div>
              <div className="flex text-[15px] justify-between items-center pt-2 px-5">
                <div>
                  <h2 className="line-through opacity-25">$ 30.00</h2>
                  <h2 className="text-[#274C5B]">$ 22.00</h2>
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

        {/* product 6 */}
        <div className="flex w-[80%] h-[80%] bg-white rounded-xl p-3">
          <div>
            <div className="bg-[#EFF6F1] w-[50%] p-3 m-2 rounded-xl text-center font-[Roboto] font-semibold text-[#274C5B]">
              Fresh
            </div>
            <Image src={telur} className="m-3 max-h-[50%]" alt="" />
            <div className="font-[Roboto] font-semibold text-[#274C5B] px-5 pb-1">
              Fresh Organic Egg
            </div>
            <hr />
            <div>
              <div className="flex text-[15px] justify-between items-center pt-2 px-5">
                <div>
                  <h2 className="line-through opacity-25">$ 20.00</h2>
                  <h2 className="text-[#274C5B]">$ 18.00</h2>
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
    </>
  );
}
export default ListProduct;
