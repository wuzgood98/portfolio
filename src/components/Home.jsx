import { useState, useEffect } from 'react'
import profileImage from '../assets/images/cropped-profile.png'
import { Link } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer"
import { useGlobalContext } from '../utils/AppContext'
import AnimatedLetters from './AnimatedLetters'
import PortfolioItems from './PortfolioItems'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Portfolio from './Portfolio'
import Contact from './Contact'

const variants = {
  visible: {
    opacity: 1, y: 0,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1
    }
  },
  hidden: { opacity: 0, y: -10 }
}

const item = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 }
}

const Home = () => {
  const [scrollY, setScrollY] = useState(0)
  const [isNavbarHidden, setIsNavbarHidden] = useState(false)
  const letters = ['I', "'", 'm', ' ', 'G', 'i', 'd', 'e', 'o', 'n']
  const title = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']
  const add = ['H', 'i', ',']
  const { setActiveIndex, data } = useGlobalContext()

  const { ref, inView } = useInView()
  const { ref: aboutMeRef, inView: aboutMeInView } = useInView()
  const { ref: techStackRef, inView: textStackInView } = useInView()
  const animation = useAnimation()

  const handleClick = (pathname) => setActiveIndex(pathname)

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

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1, y: 0,
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
        opacity: 0, y: 10
      })
    }
  }, [inView])


  return (
    <>
      <section className='w-full flex flex-col gap-10 max-w-7xl mx-auto'>
        <motion.div
          variants={variants}
          initial='hidden'
          animate='visible'
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="px-8 relative flex flex-col gap-16 w-full items-center justify-center sm:justify-between lg:flex-row-reverse overflow-hidden sm:max-w-7xl sm:mx-auto sm:mt-6 2xl:px-0"
        >

          <motion.div
            variants={item}
            className="border shrink-0 self-center flex items-center justify-center border-clrGrey p-3 h-[326px] min-h-[310px] min-w-[310px] w-[326px] rounded-full mt-11 lg:mt-0 sm:w-[360px] sm:h-[360px] md:w-[450px] md:h-[450px] sm:p-5 dark:border-mediumGrey transition-colors duration-200 "
          >
            <div className='flex items-center justify-center p-3 h-full w-full border border-clrGrey rounded-full sm:p-5 dark:border-mediumGrey transition-colors duration-200'>
              <div className="relative border-blue border-[25px] bg-veryLightGray2 h-full w-full rounded-full sm:border-[37px] md:border-[40px]">
                <img src={profileImage} alt="profile image" className='rounded-full absolute -top-[2.94rem] left-0 h-[17rem] w-full sm:-top-[4.3rem] md:h-[22.9rem] md:-top-[4.9rem]' />
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4 w-full flex-wrap md:w-3/5 md:gap-8">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '7rem' }}
              transition={{ duration: 0.6 }}
              className=" bg-blue h-[0.33rem]"></motion.div>

            <h3 className="text-4xl font-bold text-darkBlue2 md:text-6xl dark:text-offWhite transition-colors duration-200">
              {add.length > 0 &&
                add.map((letter, index) => (<AnimatedLetters key={index + 1} text={letter} />))}
              <br />
              {letters.length > 0 &&
                letters.map((letter, index) =>
                  (<AnimatedLetters key={index + 1} text={letter} />)
                )
              }
              , <br />
              {title.length > 0 &&
                title.map((text, index) => (<AnimatedLetters key={index + 1} text={text} style="text-blue dark:text-blue transition-colors duration-200" />))
              }
            </h3>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '7rem' }}
              transition={{ duration: 0.6 }}
              className=" bg-blue h-[0.33rem]">
            </motion.div>

            <p className='font-normal text-lg'>Frontend Web Developer</p>

            <div className="w-max flex items-center justify-start gap-4 mb-11 flex-wrap group">
              <Link onClick={() => handleClick('/contact')} className='relative font-normal text-md text-blue hover:text-light bg-none border border-blue w-max px-4 py-3 sm:px-8 sm:py-4  drop-shadow-md hover:drop-shadow-xl transition-all before:absolute before:block before:scale-x-0 before:origin-bottom-left before:top-0 before:right-0 before:bottom-0 before:left-0 before:inset-0 before:bg-blue before:-z-10 before:transition-all before:duration-300 before:group-hover:scale-x-100 dark:border-offWhite dark:text-offWhite' to='/contact'>Contact Me!</Link>
            </div>
          </div>
        </motion.div>

        <div
          className="px-8 flex flex-col gap-4 w-full flex-wrap sm:mx-auto sm:items-center sm:text-center md:w-3/5 md:gap-8">
          <h3 className="text-4xl font-bold text-darkBlue2 md:text-6xl transition-colors duration-200 dark:text-light">
            about me</h3>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '8rem' }}
            transition={{ duration: 0.6 }}
            className="bg-blue h-[0.33rem]">
          </motion.div>

          <p className='leading-6'>I am a motivated and passionate front-end web developer with a strong focus on user experience and interaction. I have a keen eye for detail and a knack for problem solving, which allows me to create high-quality and user-friendly websites. I am constantly keeping up to date with the latest web technologies and trends in order to provide the best possible experience for my users.</p>
          <div className="w-full flex items-center justify-start sm:justify-center gap-4 mb-11 flex-wrap">
            <a href='#contact' aria-label='contact me' className='font-normal text-md text-light bg-blue w-max px-4 py-3 sm:px-8 sm:py-4 rounded-xl drop-shadow-md hover:drop-shadow-xl transition-all'>contact me</a>
            <a href='#portfolio' aria-label='browse portfolio' className='font-bold text-md text-blue bg-white w-max px-4 py-3 sm:px-8 sm:py-4 rounded-xl drop-shadow-md hover:drop-shadow-xl transition-all dark:bg-mediumGrey dark:text-light'>browse portfolio</a>
          </div>
        </div>

        <section
          className='w-full flex flex-col items-center justify-center flex-wrap gap-5 max-w-3xl px-8 text-center pb-6 bg-offWhite sm:mx-auto dark:bg-dark transition-colors duration-200'>
          <h1 className="capitalize text-darkBlue2 font-semibold text-2xl mb-[3.5vmin] sm:text-4xl dark:text-offWhite transition-colors duration-200">my tech stack</h1>
          <div className="w-full flex-wrap flex items-center justify-center gap-5">
            {
              data.techStack.length > 0 &&
              data.techStack.map(items => {
                const { iconName, iconType, id } = items
                return (
                  <p
                    key={id}
                    className='flex items-center justify-center w-max px-4 sm:px-5 py-2 border-2 border-slate-500 rounded-md dark:border-slate-400 transition-colors duration-200'
                  >
                    <img src={iconType} alt={iconName} className="h-[30px] w-[30px]" />
                    <span className="font-bold text-lg sm:text-xl">{iconName}</span>
                  </p>
                )
              })
            }
          </div>
        </section>

        <section id="portfolio">
          <h1 className="capitalize font-semibold text-darkBlue2 text-2xl mb-[3.5vmin] sm:text-4xl font-lato text-center dark:text-offWhite">recent projects</h1>
          <Portfolio />
        </section>

        <section id='contact' className='flex flex-col gap-3 w-full items-center justify-center'>
          <h2 className="capitalize text-darkBlue2 font-semibold text-2xl sm:text-4xl dark:text-offWhite transition-colors duration-200">contact me</h2>
          <p className='px-8 text-center max-w-md'>I am interested in freelance opportunities - especially ambitious or large projects. However, if you have other requests or question, don't hesitate to contact me using below form either.</p>
          <Contact />
        </section>

        <motion.button
          animate={{ opacity: isNavbarHidden ? 1 : 0, zIndex: isNavbarHidden ? 1 : -1, transition: { duration: 0.4, delay: 0.3 } }}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 h-10 w-10 rounded-full bg-blue text-light"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </motion.button>
      </section>
    </>
  )
}

export default Home