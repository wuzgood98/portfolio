import React, { useContext, useState } from "react"
import portfolioData from "../data"
import useLocalStorage from "./useLocalStorage"

const themeType = {
  dark: 'dark',
  light: 'light'
}


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [data, setData] = useState(portfolioData)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [theme, setTheme] = useLocalStorage('theme', themeType.light)

  return (
    <AppContext.Provider value={{ data, isMenuOpen, setIsMenuOpen, activeIndex, setActiveIndex, isDarkMode, setIsDarkMode, themeType, theme, setTheme }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)

export { AppContext, AppProvider }