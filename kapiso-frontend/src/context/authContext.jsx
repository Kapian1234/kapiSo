import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

//这个contex把 当前用户信息 和 login函数 通过provider传递给子组件
export const AuthContextProvider = ({children}) => {

    //从localStorage读取localStorage，若读不到则设为空
    const [currentUser, setCurrentUser] = useState( JSON.parse(localStorage.getItem('user')) || null)

    useEffect(
        () => {localStorage.setItem('user', JSON.stringify(currentUser))},
        [currentUser]
    )//若currentUser发生改变则写入localStorage

    return (
        <AuthContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </AuthContext.Provider>
    )
}