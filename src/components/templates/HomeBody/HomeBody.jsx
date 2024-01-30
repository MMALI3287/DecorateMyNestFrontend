import React, { useState, useEffect } from "react";
import Button from "../../atoms/Buttons/Button";
import logo from "./images/logo.png";
import residential from "./images/residential.png";
import commercial from "./images/commercial.png";
import whyChooseUs1 from "./images/whyChooseUs1.png";
import whyChooseUs2 from "./images/whyChooseUs2.png";
import whyChooseUs3 from "./images/whyChooseUs3.png";
import whyChooseUs4 from "./images/whyChooseUs4.png";
import step1Image from "./images/meet-and-greet.png";
import step2Image from "./images/design-development.png";
import step3Image from "./images/place-booking.png";
import step4Image from "./images/installation-process.png";
import step5Image from "./images/you-moving-in.png";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";
import ApiCalls from "../../../apis/APICalls";

const HomeBody = () => {
  const api = new ApiCalls();
  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    <Toaster richColors />;
    toast.success("Successfully logged out!");
    setTimeout(window.location.reload(), 2000);
  };
  const [isImageVisible, setIsImageVisible] = useState({});

  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(localStorage.getItem("role") || sessionStorage.getItem("role"));
  });

  const handleImageHover = (stepName) => {
    setIsImageVisible({ ...isImageVisible, [stepName]: true });
  };

  const handleImageHoverOut = (stepName) => {
    setIsImageVisible({ ...isImageVisible, [stepName]: false });
  };
  return (
    <div className="App">
      <div className="menu">
        <img src={logo} alt="Logo" className="logo" />
        <h1>DecorateMyNest</h1>

        <div className="sign-up-container">
          <Link to={"/signup"} className="title">
            <Button text="SignUp" />
          </Link>
        </div>
        {value ? (
          <div className="login-container">
            <button className="login-button" onClick={logout}>
              LOG OUT
            </button>
          </div>
        ) : (
          <div className="login-container">
            <Link to={"/Login"} className="title">
              <button className="login-button">LOG IN</button>
            </Link>
          </div>
        )}
      </div>
      <div className="content">
        <p className="middle-text">
          Create A Space
          <br /> Where You Want To Stay
        </p>
        <div className="services-section">
          <h2>Services</h2>
          <p>
            Whether it’s your home, office, or an entire complex <br /> we’ll
            decorate it according to your desire.
          </p>
          <div className="icons-container">
            <div className="service-item">
              <img
                src={residential}
                alt="Residential"
                className="residential"
              />
              <p>Residential</p>
              <h3>
                We’ll Provide Everything
                <br /> Your New Home Needs
              </h3>
              <p>
                Building sustainable homes has been our number one priority from
                the
                <br /> very beginning. From single housing to multi-housing
                solutions, we will
                <br /> bring intelligence and luxury to every room.
              </p>
            </div>
            <div className="service-item">
              <img src={commercial} alt="commercial" className="commercial" />
              <p>Commercial</p>
              <h3>
                Moving to a Workplace
                <br /> Has Never Been So Easier
              </h3>
              <p>
                Give your new workplace an extraordinary look with our minimal
                touch. <br />
                Whether it’s a factory or a corporate office, our work knows no
                bounds.
              </p>
            </div>
          </div>
        </div>

        <div className="why-choose-us-section">
          <h2>Why Choose Us</h2>
          <div className="choose-us-buttons">
            <div className="choose-us-button">
              <img src={whyChooseUs1} alt="Why Choose Us Benefit 1" />
              <p>2-years Free Service</p>
            </div>
            <div className="choose-us-button">
              <img src={whyChooseUs2} alt="Why Choose Us Benefit 2" />
              <p>Flexible Budget and Taste</p>
            </div>
            <div className="choose-us-button">
              <img src={whyChooseUs3} alt="Why Choose Us Benefit 3" />
              <p>Customizable Design</p>
            </div>
            <div className="choose-us-button">
              <img src={whyChooseUs4} alt="Why Choose Us Benefit 4" />
              <p>24/7 Customer Support</p>
            </div>
          </div>
        </div>
        <div className="approach-section">
          <h2>Our Approach</h2>
          <p>Our working process is very simple; check it for yourself.</p>
          <div className="approach-steps">
            {[
              "Meet and Greet",
              "Design Development",
              "Place Your Booking",
              "Installation Process",
              "You Moving In",
            ].map((stepName) => (
              <div
                key={stepName}
                className="approach-step"
                onMouseEnter={() => handleImageHover(stepName)}
                onMouseLeave={() => handleImageHoverOut(stepName)}
              >
                <p>{stepName}</p>
                {isImageVisible[stepName] && (
                  <img
                    src={`./images/${stepName
                      .toLowerCase()
                      .replace(/ /g, "-")}.png`}
                    alt={stepName}
                  />
                )}
                {isImageVisible[stepName] && (
                  <img
                    src={
                      stepName === "Meet and Greet"
                        ? step1Image
                        : stepName === "Design Development"
                        ? step2Image
                        : stepName === "Place Your Booking"
                        ? step3Image
                        : stepName === "Installation Process"
                        ? step4Image
                        : step5Image
                    }
                    alt={stepName}
                    className="step-specific-image"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="standing-out-section">
          <h2>How We Are Standing Out From The Competition</h2>
          <table>
            <thead>
              <tr>
                <th style={{ backgroundColor: "#fbb200", color: "#191919" }}>
                  Feature
                </th>
                <th style={{ backgroundColor: "#fbb200", color: "#191919" }}>
                  Minimal Experience
                </th>
                <th style={{ backgroundColor: "#fbb200", color: "#191919" }}>
                  Typical Experience
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ color: "black" }}>Price</td>

                <td>
                  <span style={{ color: "black" }}>
                    Transparent cost structure and material specification
                  </span>

                  <span style={{ color: "green" }}>✔</span>
                </td>

                <td>
                  <span style={{ color: "black" }}>
                    30-50% hike between first quote and final cos
                  </span>

                  <span style={{ color: "red" }}>✘</span>
                </td>
              </tr>
              <tr>
                <td>Convenience</td>
                <td>
                  One-stop service point for all interior and exterior needs.{" "}
                  <span style={{ color: "green" }}>✔</span>
                </td>
                <td>
                  You'll need 30-40 vendors to gather everything.{" "}
                  <span style={{ color: "red" }}>✘</span>
                </td>
              </tr>
              <tr>
                <td style={{ color: "black" }}>Design</td>

                <td>
                  <span style={{ color: "black" }}>
                    Personalized design with 3D visuals
                  </span>

                  <span style={{ color: "green" }}>✔</span>
                </td>

                <td>
                  <span style={{ color: "black" }}>
                    Ordinary design and visuals
                  </span>

                  <span style={{ color: "red" }}>✘</span>
                </td>
              </tr>
              <tr>
                <td>Timelines</td>
                <td>
                  50-day move-in* <span style={{ color: "green" }}>✔</span>
                </td>
                <td>
                  Lengthy project period.{" "}
                  <span style={{ color: "red" }}>✘</span>
                </td>
              </tr>
              <tr>
                <td style={{ color: "black" }}>Communication</td>

                <td>
                  <span style={{ color: "black" }}>
                    Regular updates with project tracking
                  </span>

                  <span style={{ color: "green" }}>✔</span>
                </td>

                <td>
                  <span style={{ color: "black" }}>
                    Irregular updates & follow-up
                  </span>

                  <span style={{ color: "red" }}>✘</span>
                </td>
              </tr>
              <tr>
                <td>Quality</td>
                <td>
                  154 quality checks. <span style={{ color: "green" }}>✔</span>
                </td>
                <td>
                  Inferior materials to cut costs.{" "}
                  <span style={{ color: "red" }}>✘</span>
                </td>
              </tr>
              <tr>
                <td style={{ color: "black" }}>Warranty</td>

                <td>
                  <span style={{ color: "black" }}>
                    1 year hardware guarantee
                  </span>

                  <span style={{ color: "green" }}>✔</span>
                </td>

                <td>
                  <span style={{ color: "black" }}>
                    No valid warranty policy
                  </span>

                  <span style={{ color: "red" }}>✘</span>
                </td>
              </tr>
              <tr>
                <td>After-sales support</td>
                <td>
                  Dedicated team for prompt response.{" "}
                  <span style={{ color: "green" }}>✔</span>
                </td>
                <td>
                  Insufficient capability for quick support.{" "}
                  <span style={{ color: "red" }}>✘</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <footer />
    </div>
  );
};

export default HomeBody;
