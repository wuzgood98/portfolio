import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import { Outlet } from 'react-router-dom'
import bg from '../assets/bg.avif'
import bg_2 from '../assets/bg_2.png'
import bg_3 from '../assets/bg_3.png'
import bg_4 from '../assets/bg_4.avif'


const Layout = () => {
  return (
    <div className="">
      <main className='w-full h-screen bg-offWhite font-roboto dark:bg-slate-900  transition-colors duration-200'>
        <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
          <div className="w-[108rem] flex-none flex justify-end">
            <picture>
              <source srcSet={bg} type="image/avif" />
              <img src={bg_2} alt="" className="w-[71.75rem] flex-none max-w-none dark:hidden" />
            </picture>
            <picture>
              <source srcSet={bg_4} type="image/avif" />
              <img src={bg_3} alt="" className="w-[90rem] flex-none max-w-none hidden dark:block" />
            </picture>
          </div>
        </div>
        <Navbar />
        <div className="bg-offWhite lg:mt-40 text-slate-500 dark:text-slate-400 dark:bg-slate-900 transition-colors duration-200">
          <Outlet />
        </div>
      </main>
      <Sidebar />
    </div>

  )
}

export default Layout