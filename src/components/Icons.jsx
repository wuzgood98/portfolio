import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const Icons = ({ iconName, url, color, hover = '', dark }) => {
  return (
    <motion.li variants={variants}>
      <a target="_blank" rel='noreferrer' aria-label='Visit my social media handles' href={url} >
        <FontAwesomeIcon icon={iconName} className={`transition-all w-[27px] h-[27px] text-${color} hover:scale-110 hover:text-${hover} dark:hover:text-slate-400 dark:${dark}`} />
      </a>
    </motion.li>
  )
}

export default Icons