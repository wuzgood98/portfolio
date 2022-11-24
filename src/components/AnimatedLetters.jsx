import React from 'react'
import { motion } from 'framer-motion'

const item = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 }
}

const AnimatedLetters = ({ text, style = '' }) => {
  return (
    <motion.span variants={item} className={style}>{text}</motion.span>
  )
}

export default AnimatedLetters