import {useState, createContext, useContext} from 'react'

export const AuthContext = createContext();
const Auth = ({children}) => {
    const  [user,setUser] = useState('');

    const login = user =>{
        setUser(user)
    }
     const logout=()=>{
        setUser(null);
     }
  return (
   <AuthContext.Provider value={{user,login,logout}}>
    {children}
   </AuthContext.Provider>
  )
}
export const useAuth=()=>{
    return useContext(AuthContext);
}


export default Auth;
