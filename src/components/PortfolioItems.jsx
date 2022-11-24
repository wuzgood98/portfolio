import React, { useEffect } from 'react'
import { FaGithub, FaEye } from 'react-icons/fa'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer"

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
}

const PortfolioItems = ({ img, projectName, url, repository }) => {
  const { ref, inView } = useInView()
  const animation = useAnimation()

  useEffect(() => {
    //console.log("use effect hook, inView =", inView)
    if (inView) {
      animation.start({
        opacity: 1, scale: 1,
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3,
          delayChildren: 0.1,
          staggerChildren: 0.1,
        }
      })
    }

    if (!inView) {
      animation.start({
        opacity: 0, scale: 0.95
      })
    }
  }, [inView])
  return (
    <motion.div
      animate={animation}
      transition={{ type: 'spring', bounce: 0.3, duration: 1 }}
      variants={item}
      ref={ref}
      className="h-full relative w-full overflow-hidden cursor-default text-center group"
    >
      <img src={img} alt={projectName} className='h-full w-full object-cover block relative group-hover:scale-[1.2] transition-all duration-500' />
      <div className="absolute h-full w-full overflow-hidden top-0 left-0 opacity-0 bg-hover flex flex-col items-center justify-center gap-4 transition-all duration-500 group-hover:opacity-100 group-hover:backdrop-blur-xs">
        <h2 className='uppercase text-light relative text-lg bg-hover2 -translate-y-[100px] p-[10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500'>{projectName}</h2>
        <div className="flex items-center gap-4">
          <a href={url} target="_blank" rel="noopener noreferrer" className="inline-block uppercase text-light bg-none opacity-0 transition-all duration-500 px-[14px] py-[7px] hover:shadow-calm info border border-light -translate-x-7 translate-y-7 group-hover:translate-y-0 group-hover:opacity-100 group-hover:translate-x-0"><FaEye /></a>
          <a href={repository} target="_blank" rel="noopener noreferrer" className=" inline-block uppercase text-light bg-none opacity-0 transition-all duration-500 px-[14px] py-[7px] hover:shadow-calm info border border-light translate-x-7 translate-y-7 group-hover:translate-y-0 group-hover:opacity-100 group-hover:translate-x-0 ">
            <FaGithub />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default PortfolioItems