import { FaPeopleArrows } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdOutlineBorderColor } from "react-icons/md";
import { RiInstallFill } from "react-icons/ri";
import { MdOutlineFireTruck } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "../../templates/Header/Header";
import Footer from "../../templates/Footer/Footer";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <>
      <Header />

      <div>
        <h1 className="text-5xl font-bold text-blue-950 mt-20 text-center border-b-[2px] border-gray-500 pb-10 mx-20 font-serif">
          Experience the Journey from Ideation to Execution
        </h1>
        <p className="text-gray-500 text-center text-2xl md:mx-40 mt-10 font-serif">
          Take a sneak peek behind the scenes and witness our meticulous work
          process. From generating innovative ideas to delivering top-notch
          interiors, we have been dedicated to fulfilling our clients’ desired
          visions.
        </p>
        <p className="text-gray-500 text-center text-2xl md:mx-40 mt-10 font-serif">
          7 years after the inception of DecorateMyNest, we have a greater
          vision to become the foremost lifestyle brand, introducing a great way
          of living.
        </p>
        <p className="text-gray-500 text-center text-2xl md:mx-40 mt-10 font-serif">
          DecorateMyNest is uniquely identified with sensible design thinking
          and a connection to heritage and culture. Our goal is to make your
          space feel connected and alive, while maintaining balance and harmony,
          by having less but meaningful items.
        </p>

        <h1 className="text-4xl font-bold text-blue-950 mt-20 text-center  border-gray-500 mx-20 font-serif">
          Your Desired Interior <br /> in 5 Simple Steps
        </h1>
        <p className=" text-gray-500 text-center text-3xl mt-5 font-serif">
          Thinking of building a new home? <br /> Here’s how you can get
          started.
        </p>

        {/* icons */}

        <div className="flex mx-20 justify-around mt-20 font-serif">
          <div className="w-36" data-aos="zoom-out-down font-serif">
            <FaPeopleArrows className="text-6xl mx-auto text-lime-800 font-serif" />
            <p className="text-center mt-3 italic">Meet and Greet</p>
          </div>
          <div>
            <IoMdArrowForward className="text-4xl mt-5 font-serif" />
          </div>
          <div className="w-36" data-aos="zoom-out-down">
            <MdOutlineDesignServices className="text-6xl mx-auto text-orange-800 font-serif" />
            <p className="text-center mt-3 italic">Design Development</p>
          </div>
          <div>
            <IoMdArrowForward className="text-4xl mt-5" />
          </div>
          <div className="w-36" data-aos="zoom-out-down">
            <MdOutlineBorderColor className="text-6xl mx-auto text-purple-500" />
            <p className="text-center mt-3 italic">Place Order</p>
          </div>
          <div>
            <IoMdArrowForward className="text-4xl mt-5" />
          </div>
          <div className="w-36" data-aos="zoom-out-down">
            <RiInstallFill className="text-6xl mx-auto text-yellow-300" />
            <p className="text-center mt-3 italic">Installation Process</p>
          </div>
          <div>
            <IoMdArrowForward className="text-4xl mt-5" />
          </div>
          <div className="w-36" data-aos="zoom-out-down">
            <MdOutlineFireTruck className="text-6xl mx-auto text-amber-700" />
            <p className="text-center mt-3 italic">Moving In</p>
          </div>
        </div>

        {/* services */}

        <div className="mx-20 font-serif">
          <div className="flex justify-items-start gap-10 mt-10 font-serif">
            <img
              className="w-1/2 h-96"
              src="https://www.minimallimited.com/wp-content/uploads/2022/10/Minimal-Meet-and-Greet.svg"
              alt=""
              data-aos="zoom-out-down"
            />
            <div className="mt-20" data-aos="zoom-out-down">
              <h1 className="text-3xl font-semibold">Meet and Greet</h1>
              <div className="pl-10 mt-5 border-l-4 border-dashed border-green-800 text-lg">
                <p className=" font-semibold text-orange-800">
                  It all begins with a form
                </p>
                <p className="text-sm text-gray-500 border-b-[1px] border-green-800 pb-6">
                  Tell us the story you want to build, and we will take care of
                  the <br /> rest. The more we learn about you, the better.
                </p>
              </div>
              <div className="pl-10 mt-5 border-l-4 border-dashed border-green-800 text-lg">
                <p className=" font-semibold text-orange-800 pt-8">
                  Get Free Consultation
                </p>
                <p className="text-sm text-gray-500">
                  Our designers will sit down with you for a personalized
                  one-to-one session. <br /> They will suggest layouts and
                  estimations tailored to your project.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-items-start gap-10 mt-10">
            <img
              className="w-1/2 h-96"
              src="https://www.minimallimited.com/wp-content/uploads/2022/10/Minimal-Design-Development.svg"
              alt=""
              data-aos="zoom-out-down"
            />
            <div className="mt-20" data-aos="zoom-out-down">
              <h1 className="text-3xl font-semibold">Design Development</h1>
              <div className="pl-10 mt-5 border-l-4 border-dashed border-green-800 text-lg">
                <p className=" font-semibold text-orange-800">
                  Pay the booking amount to seal the deal
                </p>
                <p className="text-sm text-gray-500 border-b-[1px] border-green-800 pb-6">
                  After paying 5% of the total estimated budget as a token
                  amount, <br /> we will initiate the 3D design process for you.
                </p>
              </div>
              <div className="pl-10 mt-5 border-l-4 border-dashed border-green-800 text-lg">
                <p className=" font-semibold text-orange-800 pt-8">
                  Finalize your design
                </p>
                <p className="text-sm  text-gray-500  border-green-800">
                  Based on your requirements and our ideas, we will develop{" "}
                  <br /> design options for you to choose from. Simply decide{" "}
                  <br /> which one you want.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-items-start gap-10 mt-10">
            <img
              className="w-1/2 h-96"
              src="https://www.minimallimited.com/wp-content/uploads/2022/10/place-the-order-at-minimal.svg"
              alt=""
              data-aos="zoom-out-down"
            />
            <div className="mt-20" data-aos="zoom-out-down">
              <h1 className="text-3xl font-semibold">Place Order</h1>
              <div className="pl-10 mt-5 border-l-4 border-dashed border-green-800 text-lg">
                <p className=" font-semibold text-orange-800">
                  Start the Order with a 50% payment
                </p>
                <p className="text-sm text-gray-500 border-b-[1px] border-green-800 pb-6">
                  Within 7 days, you will receive working drawings for approval,{" "}
                  <br /> and your project will be off to a great start.
                </p>
              </div>
              <div className="pl-10 mt-5 border-l-4 border-dashed border-green-800 text-lg">
                <p className=" font-semibold text-orange-800 pt-8">
                  Work Commences
                </p>
                <p className="text-sm text-gray-500">
                  Procurement Process and Site Preparation will begin the
                  interior construction <br /> process after completing the
                  necessary procurement and site <br /> preparation. (You can
                  track your project’s progress <br /> through the Gantt chart
                  we provide.)
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-items-start gap-10 mt-10">
            <img
              className="w-1/2 h-96"
              src="https://www.minimallimited.com/wp-content/uploads/2022/10/Minimal-Installation-Process.svg"
              alt=""
              data-aos="zoom-out-down"
            />
            <div className="mt-20" data-aos="zoom-out-down">
              <h1 className="text-3xl font-semibold">Installation Process</h1>
              <div className="pl-10 mt-5 border-l-4 border-dashed border-green-800 text-lg">
                <p className=" font-semibold text-orange-800">
                  Pay 95% at the execution milestone{" "}
                </p>
                <p className="text-sm text-gray-500 border-b-[1px] border-green-800 pb-6">
                  {" "}
                  With our woodwork almost complete and coloring work in
                  progress, <br /> your project is now midway.
                </p>
              </div>
              <div className="pl-10 mt-5 border-l-4 border-dashed border-green-800 text-lg">
                <p className=" font-semibold text-orange-800 pt-8">
                  Installation
                </p>
                <p className="text-sm text-gray-500">
                  To ensure perfection, we will conduct 154 quality checks
                  during the <br /> installation process to match the design
                  precisely.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-items-start gap-10 mt-10">
            <img
              className="w-1/2 h-96"
              src="https://www.minimallimited.com/wp-content/uploads/2022/10/Minimal-Moving-In.svg"
              alt=""
              data-aos="zoom-out-down"
            />
            <div className="mt-20" data-aos="zoom-out-down">
              <h1 className="text-3xl font-semibold ">Moving in</h1>
              <div className="pl-10 mt-5 border-l-4 border-dashed border-green-800 text-lg">
                <p className=" font-semibold text-orange-800">Move in</p>
                <p className="text-sm text-gray-500 border-b-[1px] border-green-800 pb-6">
                  The work is done, and your dream interior has become a
                  reality. <br />
                  Capture this moment with our complimentary professional
                  photoshoot.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* the team */}

        <div className="mt-20 bg-blue-400 pt-16">
          <h1 className="text-5xl font-bold text-white mt-20 text-center  pb-10 mx-20">
            The Team Behind DecorateMyNest
          </h1>
          <p className="text-sm text-white pb-6 text-center">
            Our diverse team of architects, engineers, and business managers{" "}
            <br /> is here to make your home the best it can be.
          </p>
          <img
            className="px-40 pb-20 pt-5"
            src="https://www.minimallimited.com/wp-content/uploads/Team-desktop-2-1536x1080.webp"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
