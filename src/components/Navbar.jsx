import { useState, useEffect, useRef, useContext } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import logo from '../assets/logo.svg'
import heroImage from '../assets/images/cropped-profile.png'
import { TbBrightnessUp } from 'react-icons/tb'
import { MdBrightness3 } from 'react-icons/md'
import { Link, NavLink } from 'react-router-dom'
import { useGlobalContext } from '../utils/AppContext'
import MenuItems from './MenuItems'

const Navbar = () => {
  const { data, setIsMenuOpen, themeType, setTheme, theme } = useGlobalContext()
  const navItems = data.nav.slice(0, data.nav.length - 1)

  const toggleDarkMode = () => {
    setTheme(prevTheme => prevTheme === themeType.light ? themeType.dark : themeType.light)
  }

  return (
    <header className="w-full justify-between items-center h-max py-8 px-8 ">
      <nav className='w-full flex justify-between items-center md:max-w-7xl md:mx-auto'>
        <Link className="w-12 h-12 grid place-content-center bg-blue p-4 rounded-xl transition-all active:scale-95" to='/'>
          <img src={logo} alt="logo" className='w-full h-full' />
        </Link>

        <ul className="hidden items-center w-max min-w-max sm:flex">
          {navItems.length > 0 && navItems.map((item) => {
            return <MenuItems key={item.id} {...item} />
          })
          }
        </ul>

        <div className="flex items-center justify-center gap-3">
          <button onClick={toggleDarkMode} className="w-[30px] h-[30px] active:scale-95 transition-transform">
            {theme === 'dark'
              ? <TbBrightnessUp className='animate-spin-slow w-full h-full text-darkBlue2 dark:text-light transition-colors duration-200' />
              : <MdBrightness3 className='rotate-[35deg] w-full h-full text-slate-500 dark:text-light transition-colors duration-200' />}
          </button>

          <Link className='hidden font-normal text-md text-light bg-blue w-max px-8 py-3 rounded-xl drop-shadow-md hover:drop-shadow-xl transition-all sm:block' to='/contact'>contact</Link>

          <button className="w-[40px] h-[30px] transition-all active:scale-95 sm:hidden" onClick={() => setIsMenuOpen(true)}>
            <AiOutlineMenu style={{ width: '100%', height: '100%', color: 'rgb(104, 73, 230)' }} />
          </button>
        </div>


      </nav>
    </header>

  )
}

export default Navbar