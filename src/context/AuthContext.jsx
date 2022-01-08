import { createContext, useState, useContext } from "react";

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const login = (username, password) => {
        const loginOk = username === process.env.AUTH_USER && password === process.env.AUTH_PASS
        if (loginOk) setUser({ username })
        return loginOk
    }
    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}> {children} </AuthContext.Provider>
    )
}

const useAuth = () => {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth not used inside provider')
    }
    return context
}

export { AuthProvider, useAuth }