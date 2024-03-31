import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [currentUser, setcurrentUser] = useState( JSON.parse(localStorage.getItem('user')) || null)

    useEffect(
        () => {localStorage.setItem('user', JSON.stringify(currentUser))},
        [currentUser]
    )

    function login() {
        
        setcurrentUser({
            id: 1,
            name: 'wan',
            profilePic:'https://a.520gexing.com/uploads/allimg/2021042109/uqaqhuvavt0.jpg',
        })
    }

    return (
        <AuthContext.Provider value={{currentUser, login}}>
            {children}
        </AuthContext.Provider>
    )
}