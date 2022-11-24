import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import { useGlobalContext } from '../utils/AppContext';
import { NavLink, useLocation } from 'react-router-dom';

const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 }
    }
  }
};



const MenuItems = ({ path, route }) => {
  const { setIsMenuOpen, activeIndex, setActiveIndex, theme } = useGlobalContext()


  const handleClick = () => {
    setIsMenuOpen(false)
    setActiveIndex(path)
  }

  const location = useLocation()

  useEffect(() => {
    setActiveIndex(location.pathname)
  }, [])

  const themeText = theme === 'dark' ? 'dark:bg-mediumGrey/20 dark:border-r-mediumGrey font-bold' : ' text-blue bg-[#6849e60c] font-bold'


  return (
    <motion.li
      variants={variants}
      whileTap={{ scale: 0.95 }}
      className={`group flex w-full h-max rounded-xl text-darkBlue2 hover:text-blue dark:hover:text-light dark:text-light ${path === activeIndex && themeText}`}>
      <NavLink onClick={handleClick} className='w-full h-full p-3 rounded-lg sm:max-w-max group-hover:font-bold transition-all' to={path}>{route}</NavLink>
    </motion.li>
  )
}

export default MenuItems