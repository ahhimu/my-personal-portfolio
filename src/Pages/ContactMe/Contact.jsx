import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import contactImage from "../../assets/hanshake.jpg";
import FadeInUp from "../../Components/FadeInUp";
import axios from "axios";

const contactInfo = [
  {
    icon: "fa-location-dot",
    title: "Address",
    value: "Gazipur, Bangladesh",
  },
  {
    icon: "fa-user",
    title: "Freelancer",
    value: "Available Right Now",
  },
  {
    icon: "fa-envelope",
    title: "Email",
    value: "ahasanhabibhimu.bc@gmail.com",
  },
];

const formFields = [
  {
    label: "Name",
    id: "name",
    type: "text",
    placeholder: "Enter Your Name",
  },
  {
    label: "Email",
    id: "email",
    type: "email",
    placeholder: "Enter Your Email",
  },
  {
    label: "subject",
    id: "subject",
    type: "text",
    placeholder: "Enter  Subject",
  },
];

const Contact = () => {
  const [isLoading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newMessage = Object.fromEntries(formData.entries());

    try {
      setLoading(true);
      const res = await axios.post(
        // "https://portfolio-server-side-mu.vercel.app/sendEmail",
        // niker server URL
        newMessage
      );

      toast.success(res?.data?.message);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Me - MD. AHSAN HABIB</title>
        <meta
          name="description"
          content="This is a portfolio website. This website is MD. AHSAN HABIB's personal portfolio, showcasing his skills, projects, and professional journey as a MERN-stack web developer."
        />
        <link rel="shortcut icon" href="ch_favLogo.png" type="image/x-icon" />
      </Helmet>

      <section className="container mx-auto px-4 py-12">
        {/* Section Title */}
        <FadeInUp index={1}>
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold">Contact</h1>
            <h5 className="text-lg text-yellow-400">Let's Talk About Ideas</h5>
          </div>
        </FadeInUp>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Section - Info */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <FadeInUp index={2}>
              <img
                src={contactImage}
                alt="Contact Illustration"
                className="mx-auto lg:mx-0 rounded-xl shadow-lg"
              />
            </FadeInUp>

            <FadeInUp index={3}>
              <h2 className="text-2xl font-bold">MD. AHSAN HABIB</h2>
            </FadeInUp>

            <FadeInUp index={4}>
              <p className="text-lg font-medium">Web Developer (MERN)</p>
            </FadeInUp>

            <FadeInUp index={5}>
              <p className="text-gray-300 max-w-md mx-auto lg:mx-0">
                Are you looking for your business online presence? Don’t
                hesitate to contact me. I’m available here 🙂
              </p>
            </FadeInUp>

            <div className="space-y-4">
              {contactInfo.map((item, idx) => (
                <FadeInUp index={6 + idx} key={item.title}>
                  <address className="flex items-start gap-4 not-italic">
                    <i
                      className={`fa-solid ${item.icon} text-yellow-400 text-xl`}
                    />
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p>{item.value}</p>
                    </div>
                  </address>
                </FadeInUp>
              ))}
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="flex-1">
            <FadeInUp index={9}>
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            </FadeInUp>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 w-full max-w-lg mx-auto lg:mx-0"
            >
              {formFields.map((field, idx) => (
                <FadeInUp index={10 + idx} key={field.id}>
                  <div>
                    <label
                      htmlFor={field.id}
                      className="block mb-1 font-medium"
                    >
                      {field.label}:
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-yellow-400 focus:outline-none"
                      required
                    />
                  </div>
                </FadeInUp>
              ))}

              <FadeInUp index={12}>
                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">
                    Message:
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="Enter your message"
                    className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-yellow-400 focus:outline-none"
                    required
                  />
                </div>
              </FadeInUp>

              <FadeInUp index={13}>
                <button
                  type="submit"
                  className="mt-4 px-6 py-2 cursor-pointer bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition"
                >
                  {isLoading ? "Sending....." : "Say Hello"}
                </button>
              </FadeInUp>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
