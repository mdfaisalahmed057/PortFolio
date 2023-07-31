import Lottie from 'lottie-react';
import linkdin from '../../public/desktop_pc/lindin.json';
import twitter from '../../public/desktop_pc/twiter.json';
import github from '../../public/desktop_pc/github.json';
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
function Portfolio() {
  return (
    <div className=''>
       <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          <a href=''>

          </a>
          Contact Through
          </h2>
      </motion.div>
    <div className='w-[200px] h-[20px]  m-auto flex justify-between '>
      <div style={{ backgroundColor: 'transparent' }}>
        <a href='https://www.linkedin.com/in/md-faisal-ahmed-610578211/'>
        <Lottie loop={true} animationData={linkdin} />
        </a>
      </div>
      <div style={{ backgroundColor: 'transparent' }}>
        <a href='https://twitter.com/MDFAISA77421284'>
        <Lottie loop={true} animationData={twitter} />
        </a>
      </div> <div style={{ backgroundColor: 'transparent' }}>
        <a href='https://github.com/mdfaisalahmed057'>
        <Lottie loop={true} animationData={github} />
        </a>
      </div>
    </div>
    </div>

  );
}

export default SectionWrapper(Portfolio);