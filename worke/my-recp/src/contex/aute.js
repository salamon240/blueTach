import React,{createContext,useState,useContext} from "react";
import axios from "axios";
//יוצרים אובייקט שנוכל להשתמש בו בכל הקומפוננטות
const AuthContexet=createContext({
    currentUser:null,
    login:async()=>{},
    register:async()=>{},
    logout:()=>{}
} )

//נותן לנו גישה למידע שלנו בכל הקומפוננטות
export const useAute=()=>{
    return useContext(AuthContexet);
}
//מי שמאפשר לנו להנגיש את האובקייט שיצרנו

  export const AuthProvider=({children})=>{
    const[currentUser,setCurrentUser]=useState(null)

    const logout=()=>{
        setCurrentUser(null);
    }

    const login=async(userName)=>{
        console.log("login aute")
      const respons=await axios.post("http://localhost:5052/login",userName)
      console.log("login aute",respons.data.userId)
        setCurrentUser(respons.data.userId)
         return respons.data
    }

    const register= async(userName)=>{
        console.log("register aute")
        const respons=await axios.post("http://localhost:5052/register",userName)
        setCurrentUser(respons.data.userId)
         return respons.data
    }

    const value={
        currentUser,
        login,
        logout,
        register
    }

    return(
        <AuthContexet.Provider value={value}>
            {children}
        </AuthContexet.Provider>
    )
}