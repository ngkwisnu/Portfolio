import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
    useEffect(()=> {
        AOS.init({duration: 1000});
    }, [])
  return (
    <footer className='container mx-auto'>
        <div className="h-96" style={{ backgroundImage: "url('img/Frame6.png')", backgroundSize: 'cover' }} >
            <div className="w-full flex justify-center">
                <div className="mx-10 my-auto w-4/5 text-slate-800 pt-52">
                    <p className="font-bold text-xs font-poppins text-slate-400 pb-3 text-center" data-aos="fade-up">CONTACT ME</p>
                    <h1 className="text-3xl font-semibold pb-3 leading-normal text-center text-white" data-aos="fade-up">Got a Project? Lets Talk!</h1>
                    <hr className="w-full mt-5 opacity-10" />
                    <div className="flex justify-between w-full">
                        <div className="flex w-full pt-6">
                            <a href="https://www.github.com/ngkwisnu" className="text-xl text-slate-400 mx-5"><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/wisnumahesa" className="text-xl text-slate-400 mr-5"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://www.instagram.com/ngkwisnu" className="text-xl text-slate-400"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                        <p className="text-slate-400 text-xs w-full pt-6 pr-5 text-right">@2024 Ngakan Wisnu</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer