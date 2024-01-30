import { FaPlus } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";

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

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <>
      <Header />
      <div className="w-full h-[650px] bg-cover">
        <div className="w-full h-full bg-black opacity-80">
          <div className="w-full h-20 lg:h-28 border-b-[1px] border-gray-500 text-black lg:text-white bg-white lg:bg-transparent">
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
              className="mySwiper h-[600px]"
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
                    <p className="text-7xl mt-20 font-bold">
                      If a dog chews shoes whose shoes does he choose?
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
                    <p className="text-7xl mt-20 font-bold">
                      If a dog chews shoes whose shoes does he choose?
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
                    <p className="text-7xl mt-20 font-bold">
                      If a dog chews shoes whose shoes does he choose?
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
                    <p className="text-7xl mt-20 font-bold">
                      If a dog chews shoes whose shoes does he choose?
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="md:mx-40">
        <h1 className="text-8xl font-bold text-blue-950 mt-20">
          Elevate Your <br /> Interiors
        </h1>
        <div className="md:flex justify-between">
          <h3 className="text-2xl font-semibold text-blue-950 mt-10">
            Designing Interiors That Leave a Lasting Impression
          </h3>
          <div className="flex">
            <h3 className="text-2xl font-semibold text-blue-950 mt-10">
              All services{" "}
            </h3>
            <FaLocationArrow className="mt-12 text-blue-950 ml-2" />
          </div>
        </div>
        <div className="md:flex gap-64 justify-center text-blue-950 font-semibold mt-10">
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
              <p className="pt-3 cursor-pointer"> Consultation</p>
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
              <span className="text-2xl mt-3">Total Acheivment</span>
            </div>
          </div>
        </ScrollTrigger>
      </div>

      <div className="mx-20">
        <h1 className="text-7xl font-bold text-blue-950 mt-20">
          About Our Design <br /> Philosophy
        </h1>
        <hr className="mt-5" />
        <h3 className="text-3xl font-semibold text-blue-950 mt-10">
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
              <img
                className="w-full"
                src="https://images.unsplash.com/photo-1682687221213-56e250b36fdd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full"
                src="https://images.unsplash.com/photo-1683009427037-c5afc2b8134d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full"
                src="https://images.unsplash.com/photo-1682695794816-7b9da18ed470?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full"
                src="https://images.unsplash.com/photo-1705599773334-b73b8f707101?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="md:w-6/12" data-aos="zoom-out-down">
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
          <hr className="" />
        </div>
      </div>

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
      </div>

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
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1682687221213-56e250b36fdd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1682687220866-c856f566f1bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1682685797769-481b48222adf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://plus.unsplash.com/premium_photo-1703385177412-2f4930c9fe2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"
            alt="slide_image"
          />
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
          <h1 className="font-bold text-2xl">New york office</h1>
          <p className="mt-4">6555-7788</p>
          <p>info@email.com</p>
          <p className="mt-4">
            123 Main Street, Suite 200 <br />
            City: Anytown State: StateName
          </p>
        </div>
        <div>
          <h1 className="font-bold text-2xl">Berlin office</h1>
          <p className="mt-4">6555-7788</p>
          <p>info@email.com</p>
          <p className="mt-4">
            123 Main Street, Suite 200 <br />
            City: Anytown State: StateName
          </p>
        </div>
        <div>
          <h1 className="font-bold text-2xl">Paris office</h1>
          <p className="mt-4">6555-7788</p>
          <p>info@email.com</p>
          <p className="mt-4">
            123 Main Street, Suite 200 <br />
            City: Anytown State: StateName
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
