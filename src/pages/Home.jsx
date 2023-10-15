import React, { useContext } from 'react'
import ThemeContext from '../utils/themeContext'
import { BiSolidSun, BiSolidMoon } from "react-icons/bi"
import { toast } from "react-toastify"


const Home = () => {
  const { theme, changeTheme } = useContext(ThemeContext)

  const handleChangeTheme = (e) => {
    const { theme } = e.target.dataset
    changeTheme(theme)
    toast.success(`Successfully switched to ${theme} theme!`, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <div className={theme === "light" ? "h-screen flex items-center justify-center bg-white" : "h-screen flex items-center justify-center bg-gray-800"}>
      <button data-theme={theme === "light" ? "dark" : "light"} className='bg-emerald-500 px-3 py-2 rounded w-20 font-semibold text-white flex items-center justify-between' onClick={handleChangeTheme}>
        {theme === 'light' ? <BiSolidMoon /> : <BiSolidSun />}
        {theme === 'light' ? 'Dark' : 'Light'}
      </button>
    </div>
  )
}

export default Home