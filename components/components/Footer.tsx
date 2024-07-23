import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-32 h-45vh">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-1  "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <p className="text-white-200 md:mt-0 my-5 text-center">
          Ph. +91 79956 82898
        </p>
        <a href="mailto:vinayalavalaanp@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light sm:pb-5">
          Copyright © 2024 Vinay Alavala
        </p>

        <div className="flex items-center md:gap-3 gap-6">
        {socialMedia.map((info) => (
          <a
            key={info.id}
            href={info.link} 
            rel="noopener noreferrer" 
            className="w-10 top-2 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <img src={info.img} alt="icons" width={20} height={20} />
          </a>
        ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;