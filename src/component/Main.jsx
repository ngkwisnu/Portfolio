import React, { useEffect } from "react";
import Button from "./sub-component/Button";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <main className="container mx-auto">
      <div className="w-full flex py-20" id="about">
        <div className="w-2/5 mx-10" data-aos="fade-up">
          <img src="img/hero2.png" alt="" />
        </div>
        <div className="ml-10 mr-20 my-auto py-10 w-3/5 text-slate-800">
          <p className="font-bold text-blue-400 pb-3" data-aos="fade-left">
            ABOUT ME
          </p>
          <h1
            className="text-3xl font-semibold pb-3 leading-normal"
            data-aos="fade-left"
          >
            Software Engineer Student at Bali State Polytechnic
          </h1>
          <p
            className="font-medium text-slate-500 leading-normal pb-10"
            data-aos="fade-left"
          >
            An active student enrolled in the D4 Software Engineering program at
            Bali State Polytechnic, currently in the sixth semester of the
            className of 2021. Possesses a diverse range of expertise in web
            development, including UX/UI design using Figma, front-end
            development (HTML, CSS, and JavaScript), as well as back-end
            development utilizing PHP, JavaScript, and frameworks like
            CodeIgniter and Laravel, Node.js, Express.js, and MySQL for database
            design. Additionally, proficient in soft skills such as Data
            Analysis, Research, and Project Management. Demonstrates a keen
            interest and talent in software design and development, particularly
            in the realm of website development.
          </p>
          <div className="flex w-full" data-aos="fade-left">
            <a
              href="https://drive.google.com/file/d/1tzoYKA0ijjrXPnEtwwUQZ-39ZN2iSlBn/view?usp=sharing"
              target="blank"
              className="bg-blue-400 p-5 w-1/3 text-white font-semibold hover:bg-blue-700 transition mr-3"
            >
              <span className="block text-center">
                Download CV<i className="fa-solid fa-arrow-down ml-4 mt-1"></i>
              </span>
            </a>
            <hr className="w-20 my-auto mx-5" />
            <p className="text-sm font-medium text-slate-500 my-auto">
              Follow me
            </p>
            <a
              href="https://www.github.com/ngkwisnu"
              className="text-xl text-slate-400 my-auto mx-5"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/wisnumahesa"
              className="text-xl text-slate-400 my-auto mr-5"
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
      <div className="w-full px-10 py-10 bg-gray-50 flex" id="service">
        <div className="w-1/2 py-20">
          <div
            className="mx-10 my-auto w-4/5 text-slate-800"
            data-aos="fade-right"
          >
            <p className="font-bold text-blue-400 pb-3">SERVICES</p>
            <h1 className="text-3xl font-semibold pb-3 leading-normal">
              Here are the services we are providing to you.
            </h1>
            <p className="font-medium text-slate-500 leading-normal pb-5">
              With my expertise and experience in web development, I am ready to
              help you grow your business through digital services. Immediately
              develop a digital business to expand your network and improve the
              quality of your business.
            </p>
            <button className="bg-blue-400 p-5 w-2/5 text-white font-semibold hover:bg-blue-700 transition mr-3">
              <a href="#skills">
                NEXT{" "}
                <span className="pl-2">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </a>
            </button>
            <hr className="w-20 my-auto mx-5" />
          </div>
        </div>
        <div className="w-1/2 my-auto">
          <div className="w-11/12" data-aos="fade-right">
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
      <div className="w-full py-20" id="skills">
        <div className="w-full pt-10">
          <p
            className="font-bold text-blue-400 pb-2 text-center"
            data-aos="fade-up"
          >
            SKILLS
          </p>
          <h1
            className="text-3xl font-semibold pb-3 leading-normal text-center"
            data-aos="fade-up"
          >
            Software and Technology
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="w-3/4 my-10 grid grid-cols-3 gap-10">
            <div data-aos="zoom-in">
              <div className="group bg-transparent border-2 hover:bg-blue-400 transition ease-in-out delay-100 shadow-sm h-full p-10 text-slate-700 rounded-lg backdrop-blur-sm hover:-translate-y-1 hover:scale-110 duration-300">
                <img
                  className="mb-5"
                  src="img/img/devicon_html5.png"
                  alt=""
                  width={"36px"}
                />
                <h4 className="text-lg font-semibold text-slate-700 group-hover:text-white transition ease-in-out delay-100">
                  HTML
                </h4>
                <p className="text-sm text-slate-400 mt-3 leading-relaxed group-hover:text-white transition ease-in-out delay-100">
                  HyperText Markup Language is the standard markup language for
                  documents designed to be displayed in a web browser.
                </p>
              </div>
            </div>
            <div data-aos="zoom-in">
              <div className="group bg-transparent border-2 hover:bg-blue-400 transition ease-in-out delay-100 shadow-sm h-full p-10 text-slate-700 rounded-lg backdrop-blur-sm hover:-translate-y-1 hover:scale-110 duration-300">
                <img
                  className="mb-5"
                  src="img/img/devicon_css3.png"
                  alt=""
                  width={"36px"}
                />
                <h4 className="text-lg font-semibold text-slate-700 group-hover:text-white transition ease-in-out delay-100">
                  CSS
                </h4>
                <p className="text-sm text-slate-400 mt-3 leading-relaxed group-hover:text-white transition ease-in-out delay-100">
                  Cascading Style Sheets are rules for organizing various
                  components on a website to make them more structured and
                  consistent.
                </p>
              </div>
            </div>
            <div data-aos="zoom-in">
              <div className="group bg-transparent border-2 hover:bg-blue-400 transition ease-in-out delay-100 shadow-sm h-full p-10 text-slate-700 rounded-lg backdrop-blur-sm hover:-translate-y-1 hover:scale-110 duration-300">
                <img
                  className="mb-5"
                  src="img/devicon_figma.png"
                  alt=""
                  width={"34px"}
                />
                <h4 className="text-lg font-semibold text-slate-700 group-hover:text-white transition ease-in-out delay-100">
                  Figma
                </h4>
                <p className="text-sm text-slate-400 mt-3 leading-relaxed group-hover:text-white transition ease-in-out delay-100">
                  Figma is a collaborative web application for user interface
                  design, with additional offline features available in desktop
                  applications for Windows and macOS.
                </p>
              </div>
            </div>
            <div data-aos="zoom-in">
              <div className="group bg-transparent border-2 hover:bg-blue-400 transition ease-in-out delay-100 shadow-sm h-full p-10 text-slate-700 rounded-lg backdrop-blur-sm hover:-translate-y-1 hover:scale-110 duration-300">
                <img
                  className="mb-5"
                  src="img/img/mysql.png"
                  alt=""
                  width={"34px"}
                />
                <h4 className="text-lg font-semibold text-slate-700 group-hover:text-white transition ease-in-out delay-100">
                  MySQL
                </h4>
                <p className="text-sm text-slate-400 mt-3 leading-relaxed group-hover:text-white transition ease-in-out delay-100">
                  MySQL is a multi-threaded, multi-user SQL database management
                  system (DBMS) software, with approximately 6 million
                  installations worldwide.
                </p>
              </div>
            </div>
            <div data-aos="zoom-in">
              <div className="group bg-transparent border-2 hover:bg-blue-400 transition ease-in-out delay-100 shadow-sm h-full p-10 text-slate-700 rounded-lg backdrop-blur-sm hover:-translate-y-1 hover:scale-110 duration-300">
                <img
                  className="mb-5"
                  src="img/img/logos_nodejs-icon.png"
                  alt=""
                  width={"34px"}
                />
                <h4 className="text-lg font-semibold text-slate-700 group-hover:text-white transition ease-in-out delay-100">
                  NodeJS
                </h4>
                <p className="text-sm text-slate-400 mt-3 leading-relaxed group-hover:text-white transition ease-in-out delay-100">
                  Node.js is a software platform designed by Ryan Dahl. Node.js
                  is a runtime for executing JavaScript outside of the web
                  browser environment, built on top of the JavaScript V8 engine.
                </p>
              </div>
            </div>
            <div data-aos="zoom-in">
              <div className="group bg-transparent border-2 hover:bg-blue-400 transition ease-in-out delay-100 shadow-sm h-full p-10 text-slate-700 rounded-lg backdrop-blur-sm hover:-translate-y-1 hover:scale-110 duration-300">
                <img
                  className="mb-5"
                  src="img/devicon_tailwindcss.png"
                  alt=""
                  width={"40px"}
                />
                <h4 className="text-lg font-semibold text-slate-700 group-hover:text-white transition ease-in-out delay-100">
                  TailwindCSS
                </h4>
                <p className="text-sm text-slate-400 mt-3 leading-relaxed group-hover:text-white transition ease-in-out delay-100">
                  Tailwind CSS is a CSS framework that contains a set of utility
                  classes for rapidly building custom interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 flex py-16" id="contact">
        <div className="w-2/5 my-auto ml-5">
          <div className="mx-10 my-auto text-slate-800">
            <p className="font-bold text-blue-400 pb-1" data-aos="fade-right">
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
              When you contact me. I will be happy to serve you and provide the
              best service.
            </p>
          </div>
        </div>
        <div
          className="w-1/2 m-10 pb-10 bg-white drop-shadow-xl rounded-lg"
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
          <form className="max-w-md mx-auto w-full pb-10">
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
        <div className="w-full pt-16">
          <p
            className="font-bold text-blue-400 pb-2 text-center"
            data-aos="fade-down"
          >
            PORTFOLIO
          </p>
          <h1
            className="text-3xl font-semibold pb-3 leading-normal text-center"
            data-aos="fade-down"
          >
            Some Of My Recent Works
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="w-3/4 my-10 grid grid-cols-3 gap-5">
            <div data-aos="zoom-in">
              <div className="relative hover:opacity-80 ease-in-out delay-100 animated hover:rounded-md transition hover:scale-90 duration-300">
                <img
                  className="rounded shadow-sm hover:bg-transparent"
                  src="img/img/Screenshot 2023-09-22 205814.png"
                  alt=""
                />
                <div className="hover:opacity-95 ease-in-out delay-100 animated hover:rounded-md transition duration-300 absolute inset-0 bg-blue-500 opacity-0 flex flex-col justify-center gap-5 items-center p-5">
                  <h5 className="font-bold text-white text-lg">SIMAPEKA</h5>
                  <p className="text-white text-center">
                    SIMAPEKA is a Internship Management System developed using
                    HTML, CSS, Codeigniter 3, MySQL, and JavaScript
                    technologies.
                  </p>
                  {/* <button className='h-10 bg-white rounded p-4 flex items-center'>VIEW</button> */}
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
                  <p className="text-white text-center">
                    SIRENMO is a Rental Information System developed using HTML,
                    CSS, Laravel, MySQL, and JavaScript technologies.
                  </p>
                  {/* <button className='h-10 bg-white rounded p-4 flex items-center'>VIEW</button> */}
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
                  <p className="text-white text-center">
                    Healshop is a Point of Sale System developed using HTML,
                    CSS, PHP, and MySQL technologies.
                  </p>
                  {/* <button className='h-10 bg-white rounded p-4 flex items-center'>VIEW</button> */}
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
                  <p className="text-white text-center">
                    The landing page for food sales developed using HTML, CSS,
                    and JavaScript technologies.
                  </p>
                  {/* <button className='h-10 bg-white rounded p-4 flex items-center'>VIEW</button> */}
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
                  <p className="text-white text-center">
                    Portal Nuansa is a tourism information system design
                    developed using Figma, HTML, and CSS technologies.
                  </p>
                  {/* <button className='h-10 bg-white rounded p-4 flex items-center'>VIEW</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
