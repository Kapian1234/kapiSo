import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext()

export const DarkModeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState( JSON.parse(localStorage.getItem('darkMode')) || false)

    useEffect(
        () => {localStorage.setItem('darkMode', darkMode)},
        [darkMode]
    )

    function toggle() {
        setDarkMode(!darkMode)
    }

    return (
        <DarkModeContext.Provider value={{darkMode, toggle}}>
            {children}
        </DarkModeContext.Provider>
    )
}