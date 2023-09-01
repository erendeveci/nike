import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants/index";
import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";
const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="max-container"
    >
      <div className="footer-gradient" />
      <div className="flex justify-between  items-center gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="logo" width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            amet mollitia sequi .
          </p>

          <div className="flex items-center  w-full gap-5 mt-8">
            {socialMedia.map((icon, index) => (
              <div
                className="flex justify-center hover:bg-[#ff6452] transition-colors  duration-500 items-center w-12 h-12 bg-white rounded-full"
                key={index}
              >
                <img width={24} height={24} src={icon.src} alt={icon.alt} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-montserrat text2xl leading-normal font-medium mb-6 text-white">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-white transition-colors duration-200"
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
