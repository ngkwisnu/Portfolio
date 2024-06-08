import React, { useEffect, useState } from "react";
import "animate.css";
import Button from "./sub-component/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import TypeIt from "typeit-react";

const MobileView = () => {
  return (
    <>
      <div className="container mx-auto">
        <header
          className="pt-5 py-20"
          style={{
            backgroundImage: "url('img/hero3.png')",
            backgroundSize: "cover",
          }}
          id="home"
        >
          <nav className="container fixed z-20 w-full top-0 m-auto font-chivo backdrop-blur-md bg-white/30">
            <div className="w-full h-16 flex justify-around items-center">
              <a
                href="#home"
                className="flex items-center text-lg"
                data-aos="fade-up"
              >
                Wisnu Mahesa
              </a>
            </div>
          </nav>
          <div className={`flex items-center justify-center w-full mt-14`}>
            <div className="w-full justify-center items-center flex flex-col mt-14 gap-5">
              <div
                className="text-xl text-center leading-tight text-slate-800"
                data-aos="fade-right"
              >
                Hello Everyone 👋
                <br />
              </div>
              <span
                className="text-blue-400 font-semibold flex justify-center text-4xl"
                data-aos="fade-right"
              >
                Web Developer
              </span>
              <p
                className="leading-normal text-center w-4/5 text-sm font-medium text-slate-500"
                data-aos="fade-right"
              >
                <TypeIt>
                  Hi, I am a 6th Semester Software Engineering Technology
                  Student at Bali State Polytechnic
                </TypeIt>
              </p>
              <div className="flex gap-8">
                <a
                  href="https://www.github.com/ngkwisnu"
                  className="text-xl text-slate-400 my-auto"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/wisnumahesa"
                  className="text-xl text-slate-400 my-auto"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="https://www.instagram.com/ngkwisnu"
                  className="text-xl text-slate-400 my-auto"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </header>
        <main className="">
          <div
            className="w-full flex flex-wrap justify-center items-center"
            id="about"
          >
            <div
              className="w-full flex justify-center items-center mt-10"
              data-aos="fade-up"
            >
              <img src="img/saya2.png" className="w-2/5" alt="" />
            </div>
            <div className="mx-10 w-full flex-wrap mt-8 text-slate-800">
              <p
                className="font-bold text-blue-400 pb-3 text-center"
                data-aos="fade-up"
              >
                ABOUT ME
              </p>
              <h1
                className="text-2xl gap-2 font-semibold pb-7 flex flex-col leading-normal text-center"
                data-aos="fade-up"
              >
                Software Engineer Student{" "}
                <span className="text-lg text-slate-500 font-normal">
                  at Bali State Polytechnic
                </span>
              </h1>
              <p
                className="font-medium text-slate-500 leading-normal pb-10 text-justify"
                data-aos="fade-up"
              >
                I am a software engineering student at Politeknik Negeri Bali.
                As a software developer especially in the web field, I have
                expertise in front-end and back-end development, as well as an
                understanding of the latest web technologies such as HTML, CSS,
                JavaScript, and various frameworks such as ReactJS and Express
                JS. In addition, I also continue to hone my individual skills as
                a web developer such as UX Research, UI Design, Project
                Management, Critical Thinking, Problem Solving, and Teamwork.
                With the skills and experience I have, I want to continue
                learning to keep up with the development of the industry and
                technology. I hope to make a positive contribution and be part
                of the journey to mutual success.
              </p>
              <div className="flex w-full" data-aos="fade-up">
                <a
                  href="https://drive.google.com/file/d/1tzoYKA0ijjrXPnEtwwUQZ-39ZN2iSlBn/view?usp=sharing"
                  target="blank"
                  className="bg-blue-400 p-5 w-full text-white font-semibold hover:bg-blue-700 transition rounded-lg"
                >
                  <span className="block text-center">
                    Download CV
                    <i className="fa-solid fa-arrow-down ml-4 mt-1"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="w-full px-10 py-10 bg-gray-50 flex flex-col justify-center items-center"
            id="service"
          >
            <div className="w-full py-10">
              <div className="w-full text-slate-800" data-aos="fade-right">
                <p className="font-bold text-blue-400 pb-3">SERVICES</p>
                <h1 className="text-3xl font-semibold pb-3 leading-normal">
                  Here are the services we are providing to you.
                </h1>
                <p className="font-medium text-slate-500 leading-normal">
                  With my expertise and experience in web development, I am
                  ready to help you grow your business through digital services.
                  Immediately develop a digital business to expand your network
                  and improve the quality of your business.
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full" data-aos="fade-right">
                <div className="text-base font-medium">Web Development</div>
                <div className="flex mb-5">
                  <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 flex my-auto">
                    <div
                      className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                  <span className="ml-2 text-blue-600 my-auto font-semibold">
                    90%
                  </span>
                </div>
                <div className="text-base font-medium">Back-End Developer</div>
                <div className="flex mb-5">
                  <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 flex my-auto">
                    <div
                      className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                  <span className="ml-2 text-blue-600 my-auto font-semibold">
                    80%
                  </span>
                </div>
                <div className="text-base font-medium">Front-End Developer</div>
                <div className="flex mb-5">
                  <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 flex my-auto">
                    <div
                      className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                  <span className="ml-2 text-blue-600 my-auto font-semibold">
                    70%
                  </span>
                </div>
                <div className="text-base font-medium">UI UX Design</div>
                <div className="flex">
                  <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 flex my-auto">
                    <div
                      className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                  <span className="ml-2 text-blue-600 my-auto font-semibold">
                    70%
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full py-10" id="skills">
            <div className="w-full pt-10 flex flex-col justify-center items-center">
              <p
                className="font-bold text-blue-400 pb-2 text-center"
                data-aos="fade-up"
              >
                SKILLS
              </p>
              <h1
                className="text-2xl font-semibold pb-3 leading-normal text-center w-4/5"
                data-aos="fade-up"
              >
                Software & Technology
              </h1>
            </div>
            <div className="w-full flex justify-center items-center">
              <div className="w-4/5 grid grid-cols-2 gap-5 my-10">
                <div data-aos="zoom-in">
                  <div className="group bg-transparent border-2 hover:bg-blue-400 transition flex flex-col justify-center items-center ease-in-out delay-100 shadow-sm h-full p-10 text-slate-700 rounded-lg backdrop-blur-sm hover:-translate-y-1 hover:scale-110 duration-300">
                    <img
                      className="mb-5"
                      src="img/img/devicon_html5.png"
                      alt=""
                      width={"36px"}
                    />
                    <h4 className="text-lg font-semibold text-slate-700 group-hover:text-white transition ease-in-out delay-100">
                      HTML
                    </h4>
                  </div>
                </div>
                <div data-aos="zoom-in">
                  <div className="group bg-transparent border-2 hover:bg-blue-400 flex flex-col justify-center items-center transition ease-in-out delay-100 shadow-sm h-full p-10 text-slate-700 rounded-lg backdrop-blur-sm hover:-translate-y-1 hover:scale-110 duration-300">
                    <img
                      className="mb-5"
                      src="img/img/devicon_css3.png"
                      alt=""
                      width={"36px"}
                    />
                    <h4 className="text-lg font-semibold text-slate-700 group-hover:text-white transition ease-in-out delay-100">
                      CSS
                    </h4>
                  </div>
                </div>
                <div data-aos="zoom-in">
                  <div className="group bg-transparent flex flex-col justify-center items-center border-2 hover:bg-blue-400 transition ease-in-out delay-100 shadow-sm h-full p-10 text-slate-700 rounded-lg backdrop-blur-sm hover:-translate-y-1 hover:scale-110 duration-300">
                    <img
                      className="mb-5"
                      src="img/devicon_figma.png"
                      alt=""
                      width={"34px"}
                    />
                    <h4 className="text-lg font-semibold text-slate-700 group-hover:text-white transition ease-in-out delay-100">
                      Figma
                    </h4>
                  </div>
                </div>
                <div data-aos="zoom-in">
                  <div className="group bg-transparent border-2 flex flex-col justify-center items-center hover:bg-blue-400 transition ease-in-out delay-100 shadow-sm h-full p-10 text-slate-700 rounded-lg backdrop-blur-sm hover:-translate-y-1 hover:scale-110 duration-300">
                    <img
                      className="mb-5"
                      src="img/img/mysql.png"
                      alt=""
                      width={"34px"}
                    />
                    <h4 className="text-lg font-semibold text-slate-700 group-hover:text-white transition ease-in-out delay-100">
                      MySQL
                    </h4>
                  </div>
                </div>
                <div data-aos="zoom-in">
                  <div className="group bg-transparent border-2 hover:bg-blue-400 flex flex-col justify-center items-center transition ease-in-out delay-100 shadow-sm h-full p-10 text-slate-700 rounded-lg backdrop-blur-sm hover:-translate-y-1 hover:scale-110 duration-300">
                    <img
                      className="mb-5"
                      src="img/img/logos_nodejs-icon.png"
                      alt=""
                      width={"34px"}
                    />
                    <h4 className="text-lg font-semibold text-slate-700 group-hover:text-white transition ease-in-out delay-100">
                      NodeJS
                    </h4>
                  </div>
                </div>
                <div data-aos="zoom-in">
                  <div className="group bg-transparent border-2 flex flex-col justify-center items-center hover:bg-blue-400 transition ease-in-out delay-100 shadow-sm h-full p-10 text-slate-700 rounded-lg backdrop-blur-sm hover:-translate-y-1 hover:scale-110 duration-300">
                    <img
                      className="mb-5"
                      src="img/devicon_tailwindcss.png"
                      alt=""
                      width={"40px"}
                    />
                    <h4 className="text-lg font-semibold text-slate-700 group-hover:text-white transition ease-in-out delay-100">
                      TailwindCSS
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 flex-wrap py-16" id="contact">
            <div className="my-auto ml-5">
              <div className="mx-10 my-auto text-slate-800">
                <p
                  className="font-bold text-blue-400 pb-1"
                  data-aos="fade-right"
                >
                  CONTACT ME
                </p>
                <h1
                  className="text-3xl font-semibold pb-1 leading-normal"
                  data-aos="fade-right"
                >
                  Fill the form to{" "}
                  <span className="text-blue-400">get solution!</span>
                </h1>
                <p
                  className="font-medium text-slate-500 leading-normal pb-5"
                  data-aos="fade-right"
                >
                  When you contact me. I will be happy to serve you and provide
                  the best service.
                </p>
              </div>
            </div>
            <div
              className="w-4/5 mx-10 bg-white drop-shadow-xl rounded-lg"
              data-aos="zoom-in"
            >
              <div className="flex w-full pt-6 justify-center my-6">
                <a
                  href="https://www.github.com/ngkwisnu"
                  className="text-xl text-slate-400 mr-10"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/wisnumahesa"
                  className="text-xl text-slate-400 mr-10"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="https://www.instagram.com/ngkwisnu"
                  className="text-xl text-slate-400"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
              <form className="max-w-md mx-auto w-4/5 pb-10">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="password"
                    name="floating_password"
                    id="floating_password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_password"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="password"
                    name="repeat_password"
                    id="floating_repeat_password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_repeat_password"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Message
                  </label>
                </div>
                <button className="w-full bg-blue-400 mt-10 h-11 text-white font-semibold rounded-sm hover:bg-blue-700 transition">
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="w-full pt-14" id="portfolio">
            <div className="w-full pt-16 flex flex-col justify-center items-center">
              <p
                className="font-bold text-blue-400 pb-2 text-center"
                data-aos="fade-down"
              >
                PORTFOLIO
              </p>
              <h1
                className="text-2xl font-semibold pb-3 leading-normal text-center w-4/5"
                data-aos="fade-down"
              >
                Some Of My Recent Works
              </h1>
            </div>
            <div className="flex justify-center">
              <div className="w-3/4 my-10 flex-wrap flex gap-10">
                <div data-aos="zoom-in">
                  <div className="relative hover:opacity-80 ease-in-out delay-100 animated hover:rounded-md transition hover:scale-90 duration-300">
                    <img
                      className="rounded shadow-sm hover:bg-transparent"
                      src="img/img/Screenshot 2023-09-22 205814.png"
                      alt=""
                    />
                    <div className="hover:opacity-95 ease-in-out delay-100 animated hover:rounded-md transition duration-300 absolute inset-0 bg-blue-500 opacity-0 flex flex-col justify-center gap-5 items-center p-5">
                      <h5 className="font-bold text-white text-lg">SIMAPEKA</h5>
                      <p className="text-white text-sm text-center">
                        SIMAPEKA is a Internship Management System developed
                        using HTML, CSS, Codeigniter 3, MySQL, and JavaScript
                        technologies.
                      </p>
                    </div>
                  </div>
                </div>
                <div data-aos="zoom-in">
                  <div className="relative hover:opacity-80 ease-in-out delay-100 animated hover:rounded-md transition hover:scale-90 duration-300">
                    <img
                      className="rounded shadow-sm hover:bg-transparent"
                      src="img/img/sirenmodata.png"
                      alt=""
                    />
                    <div className="hover:opacity-95 ease-in-out delay-100 animated hover:rounded-md transition duration-300 absolute inset-0 bg-blue-500 opacity-0 flex flex-col justify-center gap-5 items-center p-5">
                      <h5 className="font-bold text-white text-lg">SIRENMO</h5>
                      <p className="text-white text-sm text-center">
                        SIRENMO is a Rental Information System developed using
                        HTML, CSS, Laravel, MySQL, and JavaScript technologies.
                      </p>
                    </div>
                  </div>
                </div>
                <div data-aos="zoom-in">
                  <div className="relative hover:opacity-80 ease-in-out delay-100 animated hover:rounded-md transition hover:scale-90 duration-300">
                    <img
                      className="rounded shadow-sm hover:bg-transparent"
                      src="img/img/kasir2.png"
                      alt=""
                    />
                    <div className="hover:opacity-95 ease-in-out delay-100 animated hover:rounded-md transition duration-300 absolute inset-0 bg-blue-500 opacity-0 flex flex-col justify-center gap-5 items-center p-5">
                      <h5 className="font-bold text-white text-lg">Healshop</h5>
                      <p className="text-white text-sm text-center">
                        Healshop is a Point of Sale System developed using HTML,
                        CSS, PHP, and MySQL technologies.
                      </p>
                    </div>
                  </div>
                </div>
                <div data-aos="zoom-in">
                  <div className="relative hover:opacity-80 ease-in-out delay-100 animated hover:rounded-md transition hover:scale-90 duration-300">
                    <img
                      className="rounded shadow-sm hover:bg-transparent"
                      src="img/img/revou.png"
                      alt=""
                    />
                    <div className="hover:opacity-95 ease-in-out delay-100 animated hover:rounded-md transition duration-300 absolute inset-0 bg-blue-500 opacity-0 flex flex-col justify-center gap-5 items-center p-5">
                      <h5 className="font-bold text-white text-lg">
                        E-Groceries Shop
                      </h5>
                      <p className="text-white text-sm text-center">
                        The landing page for food sales developed using HTML,
                        CSS, and JavaScript technologies.
                      </p>
                    </div>
                  </div>
                </div>
                <div data-aos="zoom-in">
                  <div className="relative hover:opacity-80 ease-in-out delay-100 animated hover:rounded-md transition hover:scale-90 duration-300">
                    <img
                      className="rounded shadow-sm hover:bg-transparent"
                      src="img/img/portal.png"
                      alt=""
                    />
                    <div className="hover:opacity-95 ease-in-out delay-100 animated hover:rounded-md transition duration-300 absolute inset-0 bg-blue-500 opacity-0 flex flex-col justify-center gap-5 items-center p-5">
                      <h5 className="font-bold text-white text-lg">
                        Portal Nuansa
                      </h5>
                      <p className="text-white text-sm text-center">
                        Portal Nuansa is a tourism information system design
                        developed using Figma, HTML, and CSS technologies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="container mx-auto">
          <div
            className="h-96"
            style={{
              backgroundImage: "url('img/Frame6.png')",
              backgroundSize: "cover",
            }}
          >
            <div className="w-full flex justify-center">
              <div className="mx-10 my-auto w-4/5 text-slate-800 pt-52">
                <p className="pt-4 font-bold text-xs font-poppins text-slate-400 pb-3 text-center">
                  CONTACT ME
                </p>
                <h1 className="text-xl font-semibold pb-3 leading-normal text-center text-white">
                  Got a Project? Lets Talk!
                </h1>
                <hr className="w-full mt-5 opacity-10" />
                <div className="flex justify-between w-full">
                  <div className="flex w-full pt-6">
                    <a
                      href="https://www.github.com/ngkwisnu"
                      className="text-xl text-slate-400 mx-5"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/wisnumahesa"
                      className="text-xl text-slate-400 mr-5"
                    >
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/ngkwisnu"
                      className="text-xl text-slate-400"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                  <p className="text-slate-400 text-xs w-full pt-6 pr-5 text-right">
                    @2024 Ngakan Wisnu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default MobileView;
