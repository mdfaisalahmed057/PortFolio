import React from 'react'
import { motion } from "framer-motion";
import { styles } from "../styles";
 import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

function Tech() {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
         </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education
        </h2>
      </motion.div>
      {/* //skills   */}
      <div className=''>
        <div className='flex flex-row flex-wrap justify-center gap-10'>
          {technologies.map((technology) => (
            <>
            <h1>{technology.name}</h1>
            <image src={technology.icon} />
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Tech,"")
 
 