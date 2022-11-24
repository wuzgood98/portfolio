import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer"
import Icons from './Icons';
import { useGlobalContext } from '../utils/AppContext';
import emailjs from '@emailjs/browser'

import emoji from '../assets/icons/smiling-face-with-sunglasses-48.png'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};


const Contact = () => {
  const form = useRef(null)
  const { data } = useGlobalContext()

  const { ref, inView } = useInView()
  const animation = useAnimation()


  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      ).then(
        () => {
          alert('Message successfully sent!')
          e.target.reset()
        },
        () => {
          alert('Failed to send message, please try again.')
        }
      )
  }

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
    <motion.section ref={ref} animate={animation} className="w-full flex flex-col gap-4 max-h-max p-5 sm:max-w-xl sm:mx-auto">

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative w-full h-full border-[3px] border-slate-500 px-8 pt-4 pb-10 dark:border-light transition-colors duration-200"
      >
        <p className='flex items-center justify-center text-3xl font-semibold text-slate-500 tracking-[0.3rem] text-center mb-12 dark:text-light transition-colors duration-200'>say hi! <span><img src={emoji} alt="smiling emoji" /></span></p>
        <form ref={form} onSubmit={sendEmail} className='mb-6 flex flex-col gap-3 md:gap-5 md:mb-0'>
          <div className='flex flex-col justify-between items-center w-full gap-4 md:gap-12 leading-10 md:flex-row'>
            <input
              type="text"
              name="user_name"
              id="name"
              placeholder='name'
              className='bg-offWhite border-b-2 border-slate-500 outline-none caret-slate-500 w-full placeholder:text-slate-500 placeholder:tracking-wide dark:bg-dark dark:placeholder:text-light dark:caret-light dark:border-light dark:text-light transition-colors duration-200'
              required
            />
            <input
              type="email"
              name="user_email"
              id="email"
              placeholder='e-mail'
              className=' bg-offWhite border-b-2 border-slate-500 outline-none caret-slate-500 w-full placeholder:text-slate-500 placeholder:tracking-wide dark:bg-dark dark:placeholder:text-light dark:caret-light dark:border-light dark:text-light transition-colors duration-200'
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder='subject'
            className=' bg-offWhite border-b-2 border-slate-500 outline-none caret-slate-500 w-full placeholder:text-slate-500 placeholder:tracking-wide leading-10 dark:bg-dark dark:placeholder:text-light dark:caret-light dark:border-light dark:text-light transition-colors duration-200'
            required
          />
          <textarea
            name="message"
            id="message"
            placeholder='message'
            className='bg-offWhite border-b-2 border-slate-500 outline-none caret-slate-500 w-full min-h-[8rem] placeholder:text-slate-500 placeholder:tracking-wide leading-10 resize-none dark:bg-dark dark:placeholder:text-light dark:caret-light dark:border-light dark:text-light transition-colors duration-200'
            required
          />
          <button
            className="group uppercase mt-4 text-sm font-medium bg-slate-500 text-light md:bg-light md:text-slate-500 px-6 py-3 border-2 border-slate-500 w-full transition-all duration-300 hover:text-light hover:bg-slate-500 sm:w-max self-center dark:bg-light dark:text-dark dark:border-none"
          >
            submit
          </button>
        </form>
        <motion.ul
          variants={variants}
          className="absolute bottom-0 left-0 right-0 mx-auto flex items-center justify-center gap-4 md:hidden" >
          {data.socials.length > 0 &&
            data.socials.map(item => (
              <Icons
                key={item.id}
                {...item}
                color='slate-500'
                dark='text-light'
              />
            ))}
        </motion.ul>
      </motion.div>
    </motion.section>
  )
}

export default Contact