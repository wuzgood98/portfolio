import { useState, useEffect } from "react"
import { useGlobalContext } from "../utils/AppContext"
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import PortfolioItems from "./PortfolioItems"

const variants = {
  visible: {
    opacity: 1, y: 0,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1
    }
  },
  hidden: { opacity: 0, y: 10 }
}

const Portfolio = () => {
  const { data } = useGlobalContext()
  const [isNavbarHidden, setIsNavbarHidden] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY)
    })

    if (scrollY > 80) {
      setIsNavbarHidden(true)
    } else {
      setIsNavbarHidden(false)
    }

    return () => window.removeEventListener('scroll', () => { setScrollY(window.scrollY) })

  }, [scrollY])


  return (
    <>
      <motion.section
        initial='hidden'
        animate='visible'
        exit={{ opacity: 0, y: 10 }}
        transition={{ type: 'spring', bounce: 0.3, duration: 1 }}
        variants={variants}
        className="p-5 max-w-7xl mx-auto grid grid-cols-autoFit auto-rows-autoRow grid-flow-dense gap-4 2xl:px-0"
      >
        {data.projects.length > 0 &&
          data.projects.map(item => {
            return (
              <PortfolioItems key={item.id} {...item} />
            )
          })
        }
      </motion.section>
      <motion.button
        animate={{ opacity: isNavbarHidden ? 1 : 0, zIndex: isNavbarHidden ? 1 : -1, transition: { duration: 0.4, delay: 0.3 } }}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 h-10 w-10 rounded-full bg-blue text-light"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </motion.button>
    </>

  )
}

export default Portfolio
