"use client"

import { useState, useEffect } from "react"
import { FiMoon, FiSun } from "react-icons/fi"

export function ThemeToggleButton() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full bg-gray-200 p-2 dark:bg-gray-700"
    >
      {theme === "dark" ? (
        <FiSun className="text-yellow-500" />
      ) : (
        <FiMoon className="text-blue-500" />
      )}
    </button>
  )
}
