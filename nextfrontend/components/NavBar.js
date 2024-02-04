import React from "react";
import Link from "next/link";

const NavBar = ({ profile }) => {

  const closeNav=()=>{
    document.getElementById("myNav").style.visibility="hidden";
    document.querySelector('html').style.overflow="visible";
  }
  const openNav=()=>{
    document.getElementById("myNav").style.visibility="visible";
    document.querySelector('html').style.overflow="hidden";
  }

  return (
    <div className="w-full z-50 top-0 py-3 sm:py-5  absolute">
      <div style={{visibility: "hidden"}}
        className="absolute right-0 top-0 py-4 px-8 shadow md:w-1/3 w-2/3 min-h-screen bg-primary"
        id="myNav">
        <button className="absolute top-0 right-0 mt-4 mr-4" onClick={closeNav}>
          <img
            src="/assets/img/icon-close.svg"
            className="h-10 w-auto"
            alt=""
          />
        </button>
        <ul className="mt-8 flex flex-col">
          <li className="py-2">
            <Link href="#about" className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white" onClick={closeNav}>
              About
            </Link>
          </li>

          <li className="py-2">
            <Link href="#services" className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white" onClick={closeNav}>
              Services
            </Link>
          </li>

          <li className="py-2">
            <Link href="#portfolio" className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white" onClick={closeNav}>
              Portfolio
            </Link>
          </li>





          <li className="py-2">
            <Link href="#statistics" className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white" onClick={closeNav}>
              Statistics
            </Link>
          </li>

          <li className="py-2">
            <Link href="#contact" className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white" onClick={closeNav}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="container flex items-center justify-between">
        <div className="flex">
          <img src="../assets/img/favicon.png" width={35} alt="" />
          <h1 className="text-white font-semibold text-2xl">{profile.title}</h1>
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center">
            <li className="group pl-6">
              <Link
                href="#about"
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                About
              </Link>
              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
            </li>

            <li className="group pl-6">
              <Link
                href="#services"
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Services
              </Link>

              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
            </li>

            <li className="group pl-6">
              <Link
                href="#portfolio"
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Portfolio
              </Link>

              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
            </li>

            <li className="group pl-6">
              <Link
                href="#statistics"
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Statistics
              </Link>

              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
            </li>

            <li className="group pl-6">
              <Link
                href="#contact"
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Contact
              </Link>

              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
            </li>
          </ul>
        </div>
        <div className="block lg:hidden">
          <button onClick={openNav}>
            <i className="bx bx-menu text-4xl text-white"></i>
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default NavBar;
