import "../App.css";
import testibg from "../../../public/testi/testibg.jpeg";
import rating from "../../../public/testi/rating.svg";
import testi1 from "../../../public/testi/testi1.jpeg";
import testi2 from "../../../public/testi/testi2.jpeg";
import testi3 from "../../../public/testi/testi3.jpeg";
import Image from "next/image";

function Testimoni() {
  return (
    <>
      {/* background */}
      <div className="flex justify-center items-center">
        <Image
          src={testibg}
          className="bg-cover object-contain min-h-screen"
          alt=""
        />
        <div className="absolute text-center">
          <div className="">
            <div className="mb-4 font-[Yellowtail] text-[#68A47F] text-[50px]">
              Testimonial
            </div>
            <div className=" mb-8 font-[Roboto] text-[#274C5B] text-[40px] font-semibold">
              What Our Customer Saying?
            </div>
            <hr />
          </div>

          {/* testi 1 */}
          <div className="mb-8 mt-10 text-center">
            <Image
              src={testi1}
              className=" rounded-full w-[80px] m-auto"
              alt=""
            />
            <Image src={rating} className="m-auto" alt="" />
            <div className="mt-2 text-slate-500">
              The quality of organic produce is extremely high, the service is
              second to none and the taste of the food
              <br />
              takes me back to my childhood when we were growing our own.
            </div>
            <div className="mt-2 font-medium text-xl font-[Roboto] text-[#274C5B]">
              Sarah Taylor
            </div>
          </div>

          {/* testi 2 */}
          <div className="">
            <div className="mb-8 text-center">
              <Image
                src={testi2}
                className=" rounded-full w-[80px] m-auto"
                alt=""
              />
              <Image src={rating} className="m-auto" alt="" />
              <div className="mt-2 text-slate-500">
                I have been using the Organick Grocer for over a year now and I
                find the staff friendly and
                <br />
                helpful with a good knowledge of the products they sell.
              </div>
              <div className="mt-2 font-medium text-xl font-[Roboto] text-[#274C5B]">
                Chris Hemsworth
              </div>
            </div>
          </div>

          {/* testi 3 */}
          <div className="">
            <div className="mb-8 text-center">
              <Image
                src={testi3}
                className=" rounded-full w-[80px] m-auto"
                alt=""
              />
              <Image src={rating} className="m-auto" alt="" />
              <div className="mt-2 text-slate-500">
                Organick groceries really helps me when all the foods today is
                too much chemical.
                <br />
                Thank you for stay in a good track to provide us healthy and
                irganic foods.
              </div>
              <div className="mt-2 font-medium text-xl font-[Roboto] text-[#274C5B]">
                Jennie Ruby Jane
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Testimoni;
