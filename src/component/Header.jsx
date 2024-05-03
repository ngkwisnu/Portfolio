import React, {useEffect} from 'react'
import 'animate.css'
import Button from './sub-component/Button'
import AOS from 'aos'
import 'aos/dist/aos.css'
import TypeIt from "typeit-react";

const Header = () => {
    useEffect(()=> {
        AOS.init({duration: 1000});
    }, [])
  return (
    <header className="pt-5 container mx-auto" style={{ backgroundImage: "url('img/hero3.png')", backgroundSize: 'cover' }} id="home">
            {/* <nav className="w-full h-16 flex justify-between items-center font-chivo px-4 m-auto">
                <a href='#home' className="flex items-center pl-16 ml-2 text-lg">Wisnu Mahesa</a>
                <ul className="flex w-2/5 justify-between m-auto pl-10">
                    <a href="#home" className="hover:text-blue-400">Home</a>
                    <a href="#about" className="hover:text-blue-400">About</a>
                    <a href="#service" className="hover:text-blue-400">Service</a>
                    <a href="#skills" className="hover:text-blue-400">Skill</a>
                    <a href="#portfolio" className="hover:text-blue-400">Project</a>
                </ul>
                <a href="#contact" className="bg-blue-600 border-2 border-white rounded-full text-white font-semibold hover:bg-blue-800 h-11 my-auto pt-2 mr-16 px-10">CONTACT US<span><i class="fa-solid fa-envelope pl-5"></i></span></a>
            </nav> */}
            <nav className="container fixed z-20 w-full top-0 px-4 py-2 m-auto font-chivo backdrop-blur-md bg-white/30">
                <div className='w-full h-16 flex justify-between items-center'>
                    <a href='#home' className="flex items-center pl-16 ml-2 text-lg" data-aos='fade-right'>Wisnu Mahesa</a>
                    <ul className="flex w-2/5 justify-between m-auto pl-10">
                        <a href="#home" className="hover:text-blue-400" data-aos='zoom-in'>Home</a>
                        <a href="#about" className="hover:text-blue-400" data-aos='zoom-in'>About</a>
                        <a href="#service" className="hover:text-blue-400" data-aos='zoom-in'>Service</a>
                        <a href="#skills" className="hover:text-blue-400" data-aos='zoom-in'>Skill</a>
                        <a href="#portfolio" className="hover:text-blue-400" data-aos='zoom-in'>Project</a>
                    </ul>
                    <a href="#contact" className="bg-blue-600 border-2 border-white rounded-full text-white font-semibold hover:bg-blue-800 h-11 my-auto pt-2 mr-16 px-10" data-aos='fade-left'>CONTACT<span><i class="fa-solid fa-envelope pl-5"></i></span></a>
                </div>
            </nav>
            <div className="flex items-center w-full mt-14">
                <div className="w-1/2 pl-10 ml-10 pr-14 h-96 flex flex-col gap-6 mt-14">
                    <div className="text-3xl leading-none text-slate-800" data-aos='fade-right'>Hello Everyone 👋</div>
                    <div className="text-5xl leading-tight text-slate-800" data-aos='fade-right'>I'm Wisnu Mahesa a<br/><span className="text-blue-400 font-semibold" data-aos='fade-right'><TypeIt>Web Developer</TypeIt></span></div>
                    <p className="leading-normal text-sm font-medium text-slate-500" data-aos='fade-right'>Hi, I am a 6th Semester Software Engineering Technology Student at Bali State Polytechnic, I want to develop my skills in the field of Software Development, especially for the Website field.</p>
                    {/* <a href="#about" className="bg-blue-400 w-1/4 text-white font-semibold hover:bg-blue-700 transition animate__animated animate__fadeInLeft flex justify-evenly h-14 my-auto pt-4">NEXT<span><i className="fa-solid fa-chevron-right"></i></span></a> */}
                </div>
                <div className="w-1/2 flex justify-center relative">
                    <div className="flex absolute z-0 w-14 h-14 rounded bg-white animate-pulse shadow-sm right-20 top-64"><img className="m-auto" data-aos='zoom-in' src="../img/vscode-icons_file-type-html.png" alt="" /></div>
                    <div className="flex absolute z-0 w-6 h-6 rounded bg-white animate-pulse shadow-sm right-36 top-36"><img className="m-auto" data-aos='zoom-in' src="../img/logos_javascript.png" alt="" /></div>
                    <div className="flex absolute z-0 w-12 h-12 rounded bg-white animate-pulse shadow-sm left-16 top-72"><img className="m-auto" data-aos='zoom-in' src="../img/vscode-icons_file-type-css.png" alt="" /></div>
                    <div className="flex absolute z-0 w-10 h-10 rounded bg-white animate-pulse shadow-sm left-32 top-36"><img className="m-auto" data-aos='zoom-in' src="../img/vscode-icons_file-type-node.png" alt="" /></div>
                    <img src="../img/saya2.png" data-aos='fade-up' className="w-96" alt="" />
                </div>
            </div>
        </header>
  )
}

export default Header