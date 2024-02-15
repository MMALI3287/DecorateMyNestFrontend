// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';
import "swiper/swiper-bundle.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "../../templates/Header/Header";
import Footer from "../../templates/Footer/Footer";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      <Header />
      <div>
        <div className="bg-gradient-to-r from-blue-600 to-blue-200 text-white md:h-[600px] md:w-1/2 absolute top-0 mt-16"></div>

        <div className="md:flex ">
          <div className="md:w-1/2 px-16 relative top-10 mt-16 ">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              // navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  className="h-[500px] w-full"
                  src="https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="h-[500px] w-full"
                  src="https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="h-[500px] w-full"
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="h-[500px] w-full"
                  src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?q=80&w=1513&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="h-[500px] w-full"
                  src="https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="h-[500px] w-full"
                  src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper h-[600px] mt-16"
          >
            <SwiperSlide>
              <img
                className="h-full w-full"
                src="https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-full w-full"
                src="https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-full w-full"
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-full w-full"
                src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?q=80&w=1513&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-full w-full"
                src="https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-full w-full"
                src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="mt-40">
          <h1
            className="text-2xl mx-20 mt-20 text-gray-600"
            data-aos="zoom-out-down"
          >
            Welcome to DecorateMyNest, where the art of transforming houses into
            dream homes comes to life. Established in 2023, DecorateMyNest is
            more than just an online home decoration website – it's your partner
            in creating spaces that reflect your unique style and personality.
            Our mission is to empower clients to design their homes according to
            their wishes, offering a seamless journey filled with creativity and
            innovation. At DecorateMyNest, we go beyond providing a platform; we
            provide comprehensive guidance, expert assistance, and a plethora of
            resources to ensure that your home design journey is nothing short
            of extraordinary. Let us be a part of your home's story, turning
            each space into a masterpiece that resonates with you.
          </h1>

          <div className="md:flex gap-20 justify-center mt-20">
            <img
              className="h-[520px] w-[400px]"
              src="https://jaynedesignstudio.com/wp-content/uploads/2016/04/Rubenstein_AD_DR-detail-1280x1744.jpg"
              alt=""
              data-aos="zoom-out-down"
            />
            <img
              className="h-[520px] w-[600px]"
              src="https://jaynedesignstudio.com/wp-content/uploads/2016/04/Perelman_JAYNE_-42566-FINAL-A-crop-1280x1419.jpg"
              alt=""
              data-aos="zoom-out-down"
            />
          </div>

          <p
            className="text-2xl text-gray-600 mx-40 mt-20"
            data-aos="zoom-out-down"
          >
            At DecorateMyNest, our services extend far beyond conventional home
            decoration. We offer a holistic approach to interior design, guiding
            clients through every step of the creative process. From the initial
            Meet and Greet to the final Moving In phase, our dedicated team
            ensures a seamless experience. With a focus on sensible design
            thinking, cultural connections, and a commitment to balance and
            harmony, DecorateMyNest brings your vision to life, making each
            space uniquely yours.
          </p>
          <p
            className=" text-2xl text-gray-600 mx-40 mt-10"
            data-aos="zoom-out-down"
          >
            Our exceptional team is the heartbeat of our creative journey.
            Comprising skilled architects, engineers, and business managers, we
            unite diverse talents to transform your home into a masterpiece.
            Each team member is dedicated to delivering excellence and making
            your living space the best it can be. With a passion for design
            innovation and a commitment to client satisfaction, our cohesive
            team collaborates seamlessly to bring forth inspired and
            personalized interiors. Together, we aspire to redefine homes and
            create lasting impressions.
          </p>

          <img
            className="w-[900px] mx-auto mt-20"
            src="https://jaynedesignstudio.com/wp-content/uploads/2016/04/French-Taste-JAYNE-37662-FINAL-1280x768.jpg"
            alt=""
            data-aos="zoom-out-down"
          />
          <p
            className="text-2xl text-gray-600 mx-40 mt-20"
            data-aos="zoom-out-down"
          >
            At DecorateMyNest, our services extend far beyond conventional home
            decoration. We offer a holistic approach to interior design, guiding
            clients through every step of the creative process. From the initial
            Meet and Greet to the final Moving In phase, our dedicated team
            ensures a seamless experience. With a focus on sensible design
            thinking, cultural connections, and a commitment to balance and
            harmony, DecorateMyNest brings your vision to life, making each
            space uniquely yours.
          </p>
        </div>
        <div className="md:flex gap-20 justify-center mx-20 mt-20 mb-5">
          <img
            className="w-6/12"
            src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            data-aos="zoom-out-down"
          />
          <p className="text-2xl text-gray-600 mt-20" data-aos="zoom-out-down">
            Our exceptional team is the heartbeat of our creative journey.
            Comprising skilled architects, engineers, and business managers, we
            unite diverse talents to transform your home into a masterpiece.
            Each team member is dedicated to delivering excellence and making
            your living space the best it can be. With a passion for design
            innovation and a commitment to client satisfaction, our cohesive
            team collaborates seamlessly to bring forth inspired and
            personalized interiors. Together, we aspire to redefine homes and
            create lasting impressions.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
