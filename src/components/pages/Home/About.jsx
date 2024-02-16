import { FaPhone, FaMailBulk, FaLocationArrow } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "../../templates/Header/Header";
import Footer from "../../templates/Footer/Footer";
import { useForm } from "react-hook-form";

const About = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    const authCode = Math.floor(10000000 + Math.random() * 90000000).toString();
    localStorage.setItem("verificationCode", authCode);

    const mailContent = {
      name: data.name,
      email: data.email,
      subject: "Requesting to Contact",
      message: `<html><body><p>Hi,</p><br><p>${data.message}</p><br><p>Regards,</p><p>${data.name}</p><p><strong>Email: ${data.email}</strong></p></body></html>`,
    };
    console.log(mailContent);

    try {
      const response = await fetch("http://localhost:8000/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mailContent),
      });

      const result = await response.json();
      console.log(result);
      window.location.reload();
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 500 });
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="">
        <h1 className="text-6xl font-bold text-blue-950 mt-20 text-center border-b-[1px] border-gray-500 pb-10 font-serif">
          Get in Touch With us
        </h1>

        <div>
          <div className="grid md:grid-cols-2 justify-center mx-20 font-serif">
            <div className="md:ml-40">
              <h1 className="text-3xl font-bold text-blue-950 mt-10">
                Our Office
              </h1>
              <p className="text-blue-500 mt-5">Call us or WhatsApp at:</p>
              <div className="flex mt-4">
                <FaPhone className="mt-2 mr-3 text-xl" />
                <p className="text-2xl font-scan">01775775499</p>
              </div>
              <div className="flex mt-4">
                <FaMailBulk className="mt-2 mr-3 text-xl" />
                <p className="md:text-3xl ">decoratemynest@gmail.com</p>
              </div>
              <div className="flex mt-5">
                <FaLocationArrow className="mt-2 mr-3 text-2xl" />
                <p className="font-semibold">
                  KA-6/A, 2nd Floor, Bashundhara R/A Main Road,
                  <br /> Vatara, Dhaka-1229
                </p>
              </div>
            </div>

            {/* right side  */}
            <div className="mb-24">
              <h1 className="text-4xl font-bold text-blue-950 mt-10">
                Contact us
              </h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  placeholder="Name"
                  type="text"
                  {...register("name")}
                  className="w-full h-16 px-2 py-2 mt-3 rounded-lg border-2 border-solid border-blue-500"
                />
                <input
                  placeholder="Email"
                  type="email"
                  {...register("email")}
                  className="w-full h-16 px-2 py-2 mt-3 rounded-lg border-2 border-solid border-blue-500"
                />
                <input
                  placeholder="Message"
                  type="text"
                  {...register("message")}
                  className="w-full h-60 px-2 py-8 mt-3 rounded-lg border-2 border-solid border-blue-500"
                />
                <button
                  className="w-full h-14 bg-gradient-to-r from-blue-500 to-blue-800 text-white hover:text-black uppercase text-sm font-semibold rounded-md hover:bg-darkRed duration-300 mt-2 mb-11"
                  type="submit"
                >
                  Contact Us
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default About;
