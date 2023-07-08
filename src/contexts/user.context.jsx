import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../utils/firebase.utils";

export const UserContext = createContext({
    currenUser: null,
    setCurrentUser: () => null
})

export const UserProvider = ({ children }) => {
    const [currenUser, setCurrentUser] = useState(null)
    const value = { currenUser, setCurrentUser }

    useEffect(()=> {
        const unsubscribe = onAuthStateChangedListener((user)=> {
            console.log(user)
        })
        return unsubscribe
},[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}