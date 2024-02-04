import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 md:grid grid-cols-5 m-auto items-cencter justify-center">
        <div>
          <div className="logoDiv">
            <h1 className="logo text-[25px] text-white pb-[1.5rem] ">
              RT
              <strong>Job</strong>Search
            </h1>
          </div>
          <p className="text-white pb-[13px] opacity-70 leading-7">
            We Always make our seekers and companies find the best jobs and
            employers find the best candidates
          </p>
        </div>
        <div className="grid">
          <span className="divTitle text-[18px] font-semibold pt-[1.5rem] pb-[1.5rem] text-white">
            Company
          </span>
          <div className="grid gap-3">
            <li className="text-white opacity-[.7] hover:opacity-[1]">
              About Us
            </li>
            <li className="text-white opacity-[.7] hover:opacity-[1]">
              Features
            </li>
            <li className="text-white opacity-[.7] hover:opacity-[1]">News</li>
            <li className="text-white opacity-[.7] hover:opacity-[1]">FAQ</li>
          </div>
        </div>
        <div className="grid">
          <span className="divTitle text-[18px] font-semibold pt-[1.5rem] pb-[1.5rem] text-white">
            Resources
          </span>
          <div className="grid gap-3">
            <li className="text-white opacity-[.7] hover:opacity-[1]">
              Account
            </li>
            <li className="text-white opacity-[.7] hover:opacity-[1]">
              Support Center
            </li>
            <li className="text-white opacity-[.7] hover:opacity-[1]">
              Feedback
            </li>
            <li className="text-white opacity-[.7] hover:opacity-[1]">
              Contact Us
            </li>
          </div>
        </div>
        <div className="grid">
          <span className="divTitle text-[18px] font-semibold pt-[1.5rem] pb-[1.5rem] text-white">
            Support
          </span>
          <div className="grid gap-3">
            <li className="text-white opacity-[.7] hover:opacity-[1]">
              Events
            </li>
            <li className="text-white opacity-[.7] hover:opacity-[1]">Promo</li>
            <li className="text-white opacity-[.7] hover:opacity-[1]">
              Req Demo
            </li>
            <li className="text-white opacity-[.7] hover:opacity-[1]">
              Careers
            </li>
          </div>
        </div>
        <div className="grid">
          <span className="divTitle text-[18px] font-semibold pt-[1.5rem] pb-[1.5rem] text-white">
            Contact Info
          </span>
          <div className="grid gap-3">
            <small className="text-[14px] pb-24 text-white">
              rahmantamim10@gmail.com
            </small>
            <div className="icons flex gap-4 py-[1rem] ">
              <a href="https://www.instagram.com/rahmantamim11" target="_blank">
                <AiFillInstagram className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor"></AiFillInstagram>
              </a>
              <a href="https://www.facebook.com/rahmantamim11" target="_blank">
                <FaFacebook className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor"></FaFacebook>
              </a>
              <a
                href="https://www.linkedin.com/in/rahmantamim11"
                target="_blank"
              >
                <FaLinkedin className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor"></FaLinkedin>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 p-6 text-center mb-4">
        <h1>Copyright © 2024 - All right reserved by Rahman Tamim</h1>
      </div>
    </>
  );
};

export default Footer;
