import { useContext, createContext, useState } from 'react'

const EntryContext = createContext()

const EntryProvider = ({ children }) => {
    const [entry, setEntries] = useState([])
    return <EntryContext.Provider value={{ entry, setEntries }}>{children}</EntryContext.Provider>
}

const useEntries = () => {
    const context = useContext(EntryContext)
    if (context === undefined) {
        throw new Error('The useEntries hook is not being called inside a EntryContext.Provider')
    }
    return context
}

export { EntryProvider, useEntries }