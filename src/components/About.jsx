import { useGlobalContext } from "../utils/AppContext"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import profileImage from '../assets/images/cropped-profile.png'

const variants = {
  visible: {
    opacity: 1, y: 0,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  },
  hidden: { opacity: 0, y: -10 }
}

const item = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 }
}

const About = () => {
  const { data, setActiveIndex } = useGlobalContext()

  const handleClick = (pathname) => setActiveIndex(pathname)

  return (
    <>
      <section >
        <motion.div
          variants={variants}
          initial='hidden'
          animate='visible'
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className=" px-8 flex flex-col w-full gap-11 lg:flex-row-reverse lg:items-center sm:justify-between sm:max-w-7xl sm:mx-auto sm:mt-6 overflow-hidden 2xl:px-0">
          <motion.div variants={item}
            className="border shrink-0 self-center flex items-center justify-center border-clrGrey p-3 h-[326px] min-h-[310px] min-w-[310px] w-[326px] rounded-full mt-11 lg:mt-0 sm:w-[360px] sm:h-[360px] md:w-[450px] md:h-[450px] sm:p-5 dark:border-mediumGrey transition-colors duration-200"
          >
            <div className='flex items-center justify-center p-3 h-full w-full border border-clrGrey rounded-full sm:p-5 dark:border-mediumGrey transition-colors duration-200'>
              <div className="relative border-blue border-[25px] bg-veryLightGray2 h-full w-full rounded-full sm:border-[37px] md:border-[40px]">
                <img src={profileImage} alt="profile image" className='rounded-full absolute -top-[2.94rem] left-0 h-[17rem] w-full sm:-top-[4.3rem] md:h-[22.9rem] md:-top-[4.9rem]' />
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4 w-full flex-wrap  md:w-3/5 md:gap-8">
            <motion.div
              initial={{ width: 0, height: 0 }}
              animate={{ width: '7rem', height: '0.33rem' }}
              transition={{ duration: 0.6 }}
              className=" bg-blue">
            </motion.div>

            <p className='leading-6'>I am a motivated and passionate front-end web developer with a strong focus on user experience and interaction. I have a keen eye for detail and a knack for problem solving, which allows me to create high-quality and user-friendly websites. I am constantly keeping up to date with the latest web technologies and trends in order to provide the best possible experience for my users.</p>
            <motion.div variants={item} className="w-full flex items-center justify-start gap-4 mb-11 flex-wrap">
              <Link onClick={() => handleClick('/contact')} className='font-normal text-md text-light bg-blue w-max px-4 py-3 sm:px-8 sm:py-4 rounded-xl drop-shadow-md hover:drop-shadow-xl transition-all' to='/contact'>contact me</Link>
              <Link onClick={() => handleClick('/portfolio')} className='font-bold text-md text-blue bg-white w-max px-4 py-3 sm:px-8 sm:py-4 rounded-xl drop-shadow-md hover:drop-shadow-xl transition-all dark:bg-mediumGrey dark:text-light' to='/portfolio'>browse portfolio</Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
      {/* tech stack */}
      <motion.section
        initial='hidden'
        animate="visible"
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3 }}
        variants={variants}
        className='w-full flex flex-col items-center justify-center flex-wrap gap-5 max-w-3xl px-8 text-center pb-6 bg-offWhite sm:mx-auto dark:bg-dark transition-colors duration-200'
      >
        <h1 className="capitalize text-darkBlue2 font-semibold text-2xl mb-[3.5vmin] sm:text-4xl dark:text-offWhite transition-colors duration-200">my tech stack</h1>
        <div className="w-full flex-wrap flex items-center justify-center gap-5">
          {
            data.techStack.length > 0 &&
            data.techStack.map(items => {
              const { iconName, iconType, id } = items
              return (
                <motion.p
                  key={id}
                  variants={item}
                  transition={{ type: 'spring', bounce: 0.3, duration: 1 }}
                  className='flex items-center justify-center w-max px-4 sm:px-5 py-2 border-2 border-slate-500 rounded-md dark:border-slate-400 transition-colors duration-200'
                >
                  <img src={iconType} alt={iconName} className="h-[30px] w-[30px]" />
                  <span className="font-bold text-lg sm:text-xl transition-colors duration-200">{iconName}</span>
                </motion.p>
              )
            })
          }
        </div>
      </motion.section>
    </>
  )
}

export default About