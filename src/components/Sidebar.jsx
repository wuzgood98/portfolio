import { useGlobalContext } from '../utils/AppContext'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faCloudSun, faSun } from '@fortawesome/free-solid-svg-icons'
import MenuItems from "./MenuItems"
import Icons from "./Icons"
import useLocalStorage from '../utils/useLocalStorage'
import { useEffect } from 'react'

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '100%' }
}

const variants2 = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const Sidebar = () => {
  const { setIsMenuOpen, isMenuOpen, data } = useGlobalContext()

  const closeOnBgClick = (e) => {
    e.target.classList.contains('bg-[#0000004f]') && setIsMenuOpen(false)
  }

  return (
    <nav onClick={closeOnBgClick} className={`${isMenuOpen ? 'opacity-100 z-10' : 'opacity-0 -z-10'} fixed top-0 left-0 h-screen w-screen bg-[#0000004f] backdrop-blur-sm transition-all duration-200 `}>
      <motion.div
        initial={false}
        variants={variants}
        animate={isMenuOpen ? 'open' : 'closed'}
        transition={{ duration: 0.2 }}
        className="absolute right-0 top-0 bottom-0 flex flex-col bg-light h-full w-1/2 dark:bg-dark">
        <motion.ul variants={variants2} className="flex flex-col h-max px-4 py-24">
          {data.nav.length > 0 && data.nav.map((item) => {
            return <MenuItems key={item.id} {...item} />
          })}
        </motion.ul>

        <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-2 w-[40px] h-[30px] transition-all active:scale-95">
          <FontAwesomeIcon icon={faClose} style={{ width: '100%', height: '100%', color: 'rgb(104, 73, 230)' }} />
        </button>

        <motion.ul variants={variants2} className="absolute bottom-8 left-4 flex flex-col items-center justify-center gap-4" >
          {data.socials.length > 0 && data.socials.map(item => {
            return <Icons key={item.id} {...item} color='darkBlue2' hover='blue' dark='text-light' />
          })}
        </motion.ul>
      </motion.div>
    </nav>
  )
}

export default Sidebar