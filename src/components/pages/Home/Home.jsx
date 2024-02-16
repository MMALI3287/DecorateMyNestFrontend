import { FaPlus } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";
import balcony1 from "./../../../assets/images/balcony1.jpg";
import balcony2 from "./../../../assets/images/balcony2.jpg";
import kids1 from "./../../../assets/images/kids1.jpg";
import kids2 from "./../../../assets/images/kids2.jpg";
import kids3 from "./../../../assets/images/kids3.jpg";
import d1 from "./../../../assets/images/d1.jpg";
import d2 from "./../../../assets/images/d2.jpg";
import d3 from "./../../../assets/images/d3.jpg";
import d4 from "./../../../assets/images/d4.jpg";
import d5 from "./../../../assets/images/d5.jpg";
import d6 from "./../../../assets/images/d6.jpg";
import d7 from "./../../../assets/images/d7.jpg";

import {
  EffectCoverflow,
  EffectCreative,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../../templates/Header/Header";
import Footer from "../../templates/Footer/Footer";

const Home = () => {
  const [counterOn, setCounterOn] = useState(false);
  const [userRole, setRole] = useState(null);

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (
      role !== "client" &&
      role !== "admin" &&
      role !== "employee" &&
      role !== "vendor"
    ) {
      localStorage.setItem("role", "");
      setRole(userRole);
    }
  }, [userRole]);

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <>
      <Header />
      <div className="w-full h-[650px] bg-cover">
        <div className="w-full h-full bg-blue opacity-200">
          <div className="w-full h-20 lg:h-28 border-b-[1px] border-blue-500 text-black lg:text-white bg-white lg:bg-transparent font-serif">
            {/* <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
              <h1 className="text-2xl uppercase font-bold">Logo</h1>
              <ul className="md:flex items-center gap-8 uppercase font-semibold">
                <li className="hover:text-blue-500 cursor-pointer"><Link to='/'>Home</Link></li>
                <li className="hover:text-blue-500 cursor-pointer"><Link to='/services'>Services</Link></li>
                <li className="hover:text-blue-500 cursor-pointer"><Link to='/portfolio'>Portfolio</Link></li>
                <li className="hover:text-blue-500 cursor-pointer"><Link to='/about'>About Us</Link></li>
                <li className="hover:text-blue-500 cursor-pointer"><Link to='/contact'>Contact Us</Link></li>
              </ul>



              <Link to='/login'><button className="w-48 h-14 bg-gradient-to-r from-blue-500 to-violet-600 text-white hover:text-black uppercase text-sm font-semibold rounded-md hover:bg-darkRed duration-300">
              Login
              </button></Link>

              <div className="inline-flex lg:hidden">

              </div>
            </div> */}

            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              // navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper h-[700px]"
            >
              <SwiperSlide>
                <div className="card w-full h-full shadow-xl image-full">
                  <figure>
                    <img
                      className="w-full bg-cover"
                      src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body text-center w-full">
                    <p className="text-7xl mt-80 font-serif text-white">
                      Simplicity is the ultimate sophistication
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card w-full h-full shadow-xl image-full">
                  <figure>
                    <img
                      className="w-full bg-cover"
                      src="https://images.unsplash.com/photo-1618219740975-d40978bb7378?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body text-center w-full">
                    <p className="text-7xl mt-80  font-serif text-white">
                      You are the author of an empty room
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card w-full h-full shadow-xl image-full">
                  <figure>
                    <img
                      className="w-full bg-cover"
                      src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body text-center w-full">
                    <p className="text-7xl mt-80 font-serif text-white">
                      Your home should reflect your soul
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card w-full h-full shadow-xl image-full">
                  <figure>
                    <img
                      className="w-full bg-cover"
                      src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body text-center w-full">
                    <p className="text-7xl mt-80  font-serif text-white">
                      Luxury is when it seems flawless
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="md:mx-40">
        <h1 className="text-7xl font-bold text-blue-950 mt-20 font-serif">
          Elevate Your <br />
          Interiors
        </h1>
        <div className="md:flex justify-between">
          <h3 className="text-2xl font-semibold text-blue-950 mt-10 font-serif">
            Designing Interiors That Leave a Lasting Impression
          </h3>
          <div className="flex">
            <h3 className="text-2xl font-semibold text-blue-950 mt-10 font-serif">
              All services{" "}
            </h3>
            <FaLocationArrow className="mt-12 text-blue-950 ml-2" />
          </div>
        </div>
        <div className="md:flex gap-64 justify-center text-blue-950 font-semibold mt-10 font-serif">
          <div>
            <div className="flex">
              <FaPlus className="mt-7 mr-2" />
              <p className="pt-6 cursor-pointer"> Consultation</p>
            </div>
            <div className="flex">
              <FaPlus className="mt-4 mr-2" />
              <p className="pt-3 cursor-pointer"> Space Planning</p>
            </div>
            <div className="flex">
              <FaPlus className="mt-4 mr-2" />
              <p className="pt-3 cursor-pointer"> Concept Development</p>
            </div>
          </div>
          <div>
            <div className="flex">
              <FaPlus className="mt-7 mr-2" />
              <p className="pt-6 cursor-pointer"> Design Development</p>
            </div>
            <div className="flex">
              <FaPlus className="mt-4 mr-2" />
              <p className="pt-3 cursor-pointer"> 3D Visual</p>
            </div>
            <div className="flex">
              <FaPlus className="mt-4 mr-2" />
              <p className="pt-3 cursor-pointer"> Project Management</p>
            </div>
          </div>
          <div>
            <div className="flex">
              <FaPlus className="mt-7 mr-2" />
              <p className="pt-6 cursor-pointer"> Furniture Selection</p>
            </div>
            <div className="flex">
              <FaPlus className="mt-4 mr-2" />
              <p className="pt-3 cursor-pointer"> Lighting Design</p>
            </div>
            <div className="flex">
              <FaPlus className="mt-4 mr-2" />
              <p className="pt-3 cursor-pointer"> Planning</p>
            </div>
          </div>
        </div>

        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 md:mx-56 py-10">
            <div className="w-full" data-aos="zoom-out-down">
              {counterOn && (
                <CountUp
                  className="text-8xl font-bold text-center"
                  start={0}
                  end={13}
                  duration={2}
                  delay={0}
                ></CountUp>
              )}{" "}
              <span className="text-8xl font-bold">K</span>
              <br />
              <span className="text-2xl mt-3">Clients Around the World</span>
            </div>

            <div className="w-full ml-24" data-aos="zoom-out-down">
              {counterOn && (
                <CountUp
                  className="text-8xl font-bold text-center"
                  start={0}
                  end={74}
                  duration={2}
                  delay={0}
                ></CountUp>
              )}{" "}
              <span className="text-8xl font-bold">K</span>
              <br />
              <span className="text-2xl mt-3">Square Feet</span>
            </div>

            <div className="w-full ml-32" data-aos="zoom-out-down">
              {counterOn && (
                <CountUp
                  className="text-8xl font-bold text-center"
                  start={0}
                  end={30}
                  duration={2}
                  delay={0}
                ></CountUp>
              )}{" "}
              <span className="text-8xl font-bold">K</span>
              <br />
              <span className="text-2xl mt-3">Total Achievement</span>
            </div>
          </div>
        </ScrollTrigger>
      </div>

      <div className="mx-20">
        <h1 className="text-6xl font-bold text-blue-950 mt-20">
          About Our Design <br /> Philosophy
        </h1>
        <hr className="mt-5" />
        <h3 className="text-3xl font-semibold text-blue-950 mt-10 font-serif">
          Your Vision, Our Design Expertise
        </h3>
      </div>
      <div className="mx-20 md:flex gap-10">
        <div className="md:w-6/12 mt-20" data-aos="zoom-out-down">
          <Swiper
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            modules={[EffectCreative]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={balcony1} alt="logo" className="balcony1"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={balcony2} alt="logo" className="balcony2"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={kids1} alt="logo" className="kids1"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={kids2} alt="logo" className="kids2"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={kids3} alt="logo" className="kids3"></img>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* <div className="md:w-6/12" data-aos="zoom-out-down">
          <div className="flex mt-10 gap-20 md:ml-20">
            <h2 className="text-xl font-bold text-blue-950">History</h2>
            <h2 className="text-xl font-bold text-blue-950">Mission</h2>
            <h2 className="text-xl font-bold text-blue-950">Vision</h2>
          </div>

          <p className="mt-10 text-blue-600 text-lg">
            Renovatio, we believe that every space has the potential to be
            transformed into a work of art. With a passion for design and a
            commitment to excellence, we strive to create captivating interiors
            that reflect the unique personalities and aspirations of our
            clients.Our team of talented designers, architects, and craftsmen
            collaborates closely with each client to understand their vision and
            bring it to life.
          </p>
          <div className="flex justify-between mt-5 font-semibold text-blue-950 mr-20">
            <h1>Space Planning and Layout</h1>
            <p>95%</p>
          </div>
          <hr className="" />
          <div className="flex justify-between mt-5 font-semibold text-blue-950 mr-20">
            <h1>Sustainability and Eco-Friendly Features</h1>
            <p>85%</p>
          </div>
          <hr className="" />
          <div className="flex justify-between mt-5 font-semibold text-blue-950 mr-20">
            <h1>Project Challenges and Solutions</h1>
            <p>75%</p>
          </div>
          <hr className="" /> */}
        <div
          role="tablist"
          className="tabs tabs-bordered grid grid-cols-3 justify-evenly"
        >
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab text-2xl"
            aria-label="History"
          />
          <div role="tabpanel" className="tab-content p-10">
            <p className=" text-xl font-serif">
              In 2023, Guided by a commitment to harmonize modern aesthetics
              with enduring elegance, our team embarked on a meticulous journey.
              By seamlessly weaving together personalized client preferences,
              architectural intricacies, and a carefully curated palette of
              textures and materials, we crafted spaces that transcend mere
              functionality. The project stands as a testament to our unwavering
              dedication to innovation, collaborative excellence, and the
              artistry of creating environments that seamlessly blend
              contemporary allure with timeless sophistication.
            </p>

            <div className="flex justify-between mt-5 font-semibold text-blue-950 mr-20 text-xl font-serif">
              <h1>Design from a user view</h1>
              <p>95%</p>
            </div>
            <hr className="" />
            <div className="flex justify-between mt-5 font-semibold text-blue-950 mr-20 text-xl font-serif">
              <h1>Compare with other related websites</h1>
              <p>85%</p>
            </div>
            <hr className="" />
            <div className="flex justify-between mt-5 font-semibold text-blue-950 mr-20 text-xl font-serif">
              <h1>Work as a team</h1>
              <p>75%</p>
            </div>
            <hr className="" />
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab text-2xl"
            aria-label="Mission"
            defaultChecked
          />
          <div role="tabpanel" className="tab-content p-10">
            <p className="  text-xl font-serif">
              Our mission is to elevate living spaces through innovative and
              timeless design solutions. We are dedicated to understanding and
              exceeding our clients' expectations, fostering lasting
              relationships built on trust and creativity. With a commitment to
              sustainability and functionality, we strive to create environments
              that inspire and enhance the quality of life. Our mission extends
              beyond aesthetics, aiming to make a positive and meaningful impact
              on the way people experience and interact with their surroundings.
            </p>

            <div className="flex justify-between mt-5 font-semibold text-blue-950 mr-20 text-xl font-serif">
              <h1>Space Planning and Layout</h1>
              <p>93%</p>
            </div>
            <hr className="" />
            <div className="flex justify-between mt-5 font-semibold text-blue-950 mr-20 text-xl font-serif">
              <h1>Sustainable</h1>
              <p>82%</p>
            </div>
            <hr className="" />
            <div className="flex justify-between mt-5 font-semibold text-blue-950 mr-20 text-xl font-serif">
              <h1>Complete project challenges</h1>
              <p>78%</p>
            </div>
            <hr className="" />
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab text-2xl"
            aria-label="Vision"
          />
          <div role="tabpanel" className="tab-content p-10 font-serif">
            <p className=" text-xl font-serif">
              Our vision is to be at the forefront of transformative design,
              shaping environments that inspire and endure. We aspire to set new
              standards for creativity, sustainability, and client satisfaction,
              becoming synonymous with excellence in the field. By fostering a
              culture of innovation and collaboration, we aim to continually
              push boundaries and redefine the possibilities of interior and
              architectural design. Ultimately, our vision is to leave an
              indelible mark on the world, creating spaces that resonate with
              beauty, functionality, and a profound sense of purpose.
            </p>

            <div className="flex justify-between mt-5 font-semibold text-blue-950 mr-20 text-xl font-serif">
              <h1>Space Planning and Layout</h1>
              <p>85%</p>
            </div>
            <hr className="" />
            <div className="flex justify-between mt-5 font-semibold text-blue-950 mr-20 text-xl font-serif">
              <h1>Sustainability and Eco-Friendly Features</h1>
              <p>75%</p>
            </div>
            <hr className="" />
            <div className="flex justify-between mt-5 font-semibold text-blue-950 mr-20 text-xl font-serif">
              <h1>Project Challenges and Solutions</h1>
              <p>95%</p>
            </div>
            <hr className="" />
          </div>
        </div>
      </div>

      {/* tab picture */}

      <div className="mx-20">
        <h1 className="text-6xl font-bold text-blue-950 mt-20 font-serif">
          Our Approach
        </h1>

        <h3 className="text-2xl font-semibold text-green-950 mt-10 font-serif">
          Our Working Process is very simple, <br /> See it for yourself
        </h3>
      </div>

      <div
        role="tablist"
        className="tabs tabs-lifted mx-60 mt-20 grid grid-cols-5 justify-evenly"
      >
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-2xl font-bold"
          aria-label="Meet and Greet"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <img
            className="w-full h-[350px]"
            src="https://www.minimallimited.com/wp-content/uploads/2022/10/Minimal-Meet-and-Greet.svg"
            alt=""
          />

          <p className="text-2xl">10%</p>

          <progress
            className="progress progress-error w-full"
            value="10"
            max="100"
          ></progress>

          <p className="text-xl mt-5">
            You’ll meet our expert designers, and they will listen to your
            requirements. (No payment is required.)
          </p>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-2xl font-bold"
          aria-label="Design Development"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <img
            className="w-full h-[350px]"
            src="https://www.minimallimited.com/wp-content/uploads/2022/10/Minimal-Design-Development.svg"
            alt=""
          />

          <p className="text-2xl">30%</p>

          <progress
            className="progress progress-error w-full"
            value="30"
            max="100"
          ></progress>

          <p className="text-xl mt-5">
            With a range of designs, our designers will seek your approval and
            develop the design from start to finish. (Pay 5% of the estimated
            quotation.)
          </p>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-2xl font-bold"
          aria-label="Place Your Order"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <img
            className="w-full h-[350px]"
            src="https://www.minimallimited.com/wp-content/uploads/2022/10/place-the-order-at-minimal.svg"
            alt=""
          />

          <p className="text-2xl">50%</p>

          <progress
            className="progress progress-error w-full"
            value="50"
            max="100"
          ></progress>

          <p className="text-xl mt-5">
            Once the order is placed, we will begin working on construction
            drawings. Upon your written approval, we will start procuring
            materials and preparing the site to commence work.
          </p>
        </div>
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-2xl font-bold"
          aria-label="Installation"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <img
            className="w-full h-[350px]"
            src="https://www.minimallimited.com/wp-content/uploads/2022/10/Minimal-Installation-Process.svg"
            alt=""
          />

          <p className="text-2xl">70%</p>

          <progress
            className="progress progress-error w-full"
            value="70"
            max="100"
          ></progress>

          <p className="text-xl mt-5">
            To ensure everything is on track, we’ll provide you with a Gantt
            Chart. We’ll also conduct 154 quality checks. (Pay 95% of the final
            quotation.)
          </p>
        </div>
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-2xl font-bold"
          aria-label="Move In"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <img
            className="w-full h-[350px]"
            src="https://www.minimallimited.com/wp-content/uploads/2022/10/Minimal-Moving-In.svg"
            alt=""
          />

          <p className="text-2xl">100%</p>

          <progress
            className="progress progress-error w-full"
            value="100"
            max="100"
          ></progress>

          <p className="text-xl mt-5">
            Now that our installation is complete, you can move into your place.
          </p>
        </div>
      </div>

      {/* our team

      <div className="mx-20">
        <h1 className="text-7xl font-bold text-blue-950 mt-20">
          Meet the Masters of <br /> Interior Design
        </h1>
        <hr className="mt-5" />
        <h3 className="text-3xl font-semibold text-blue-950 mt-10">
          One Team, Infinite Possibilities
        </h3>
      </div>

      <div className="mx-20 md:flex justify-between gap-10 mt-20">
        <div
          className="max-w-md overflow-hidden shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-200 relative"
          data-aos="zoom-out-down"
        >
          <img
            className="w-full"
            src="https://plus.unsplash.com/premium_photo-1682130147350-c1f80c968967?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbWluZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Card Image"
          />
          <div className="border-4 border-transparent absolute inset-0 transition duration-300 ease-in-out "></div>
          <div className="px-6 py-4 relative">
            <p className="text-xs text-gray-500">
              Posted on June 18, 2015 / 2 / ram
            </p>
            <h2 className="text-xl font-semibold mb-2 mt-2">Card Title</h2>
            <p className="text-gray-500 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="absolute inset-0 bg-blue-500 opacity-0 hover:opacity-25 transition duration-300 ease-in-out"></div>
            <button className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl mt-7">
              <span className="absolute inset-0 bg-white opacity-20 transform rotate-45 translate-x-3 -translate-y-2"></span>
              Read More
            </button>
          </div>
        </div>
        <div
          className="max-w-md overflow-hidden shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-200 relative"
          data-aos="zoom-out-down"
        >
          <img
            className="w-full"
            src="https://plus.unsplash.com/premium_photo-1682130147350-c1f80c968967?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbWluZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Card Image"
          />
          <div className="border-4 border-transparent absolute inset-0 transition duration-300 ease-in-out "></div>
          <div className="px-6 py-4 relative">
            <p className="text-xs text-gray-500">
              Posted on June 18, 2015 / 2 / ram
            </p>
            <h2 className="text-xl font-semibold mb-2 mt-2">Card Title</h2>
            <p className="text-gray-500 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="absolute inset-0 bg-blue-500 opacity-0 hover:opacity-25 transition duration-300 ease-in-out"></div>
            <button className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl mt-7">
              <span className="absolute inset-0 bg-white opacity-20 transform rotate-45 translate-x-3 -translate-y-2"></span>
              Read More
            </button>
          </div>
        </div>
        <div
          className="max-w-md overflow-hidden shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-200 relative"
          data-aos="zoom-out-down"
        >
          <img
            className="w-full"
            src="https://plus.unsplash.com/premium_photo-1682130147350-c1f80c968967?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbWluZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Card Image"
          />
          <div className="border-4 border-transparent absolute inset-0 transition duration-300 ease-in-out "></div>
          <div className="px-6 py-4 relative">
            <p className="text-xs text-gray-500">
              Posted on June 18, 2015 / 2 / ram
            </p>
            <h2 className="text-xl font-semibold mb-2 mt-2">Card Title</h2>
            <p className="text-gray-500 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="absolute inset-0 bg-blue-500 opacity-0 hover:opacity-25 transition duration-300 ease-in-out"></div>
            <button className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl mt-7">
              <span className="absolute inset-0 bg-white opacity-20 transform rotate-45 translate-x-3 -translate-y-2"></span>
              Read More
            </button>
          </div>
        </div>
      </div> */}

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"3"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container mt-36"
      >
        <SwiperSlide>
          <img src={d1} alt="logo" className="d1"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={d2} alt="logo" className="d2"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={d3} alt="logo" className="d3"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={d4} alt="logo" className="d4"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={d5} alt="logo" className="d5"></img>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>

      <div
        className="md:flex justify-between mx-20 my-20"
        data-aos="flip-right"
      >
        <div>
          <h1 className="font-bold text-2xl font-serif">Dhaka Office</h1>
          <p className="mt-4">+8806555-7788</p>
          <p>info@email.com</p>
          <p className="mt-4">
            123 Main Street, Suite 200 <br />
            City: Dhaka
          </p>
        </div>
        <div>
          <h1 className="font-bold text-2xl font-serif">Chittagong office</h1>
          <p className="mt-4">+8806555-7788</p>
          <p>info@email.com</p>
          <p className="mt-4">
            123 Main Street, Suite 200 <br />
            City: Chittagong
          </p>
        </div>
        <div>
          <h1 className="font-bold text-2xl font-serif">Barisal office</h1>
          <p className="mt-4">6555-7788</p>
          <p>info@email.com</p>
          <p className="mt-4">
            123 mina Street, Suite 200 <br />
            City: Barisal
          </p>
        </div>
      </div>

      {/* <footer className="footer p-10 bg-gray-500  text-white">
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <aside className="items-center grid-flow-col">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
          <p>ACME Industries Ltd. <br />Providing reliable tech since 1992</p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
          </div>
        </nav>
      </footer> */}
      <Footer />
    </>
  );
};

export default Home;
