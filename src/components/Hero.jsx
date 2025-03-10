import { motion } from "framer-motion";
import { styles } from "../styles";
import GirlCanvas from "./canvas/GirlCanvas";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[70px] sm:top-[130px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex justify-between items-center w-full flex-col sm:flex-row z-[10]">
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Tawfik</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop 3D visuals, user <br className="sm:block hidden" />
              interfaces and web applications
            </p>
          </div>

          <div className="flex flex-col gap-2 mt-5 z-1">
            <a
              href="https://drive.google.com/file/d/1xwgDxt2GTu-R-DWdz9OolGA5gb3lzSba/view?usp=sharing"
              className="w-40 h-10 bg-[#915EFF] text-white flex items-center justify-center rounded tracking-wider text-[14px] font-semibold transition-all duration-300 hover:bg-[#7a4cd8]"
            >
              Download CV
            </a>

            <div className="flex justify-center items-center gap-3 ">
              <a
                href="https://www.linkedin.com/in/tawfik-ahmed-70932a2a9/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-white text-2xl" />
              </a>

              <a
                href="https://github.com/tawfik-ahmed"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-white text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <GirlCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
