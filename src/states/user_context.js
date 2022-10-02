import { createContext, useEffect, useReducer } from "react";

const loggedUser = {
    currentUser: JSON.parse(localStorage.getItem("user")) || null,
};


const AuthReducer = (state, action)=>{
    switch(action.type){
        case "LOGIN":{
            return{
                currentUser: action.payload,
            }
        }
        case "USER":{
            return{
                data: action.payload
            }
        }
        case "LOGOUT":{
            return{
                currentUser:null
            }
        }
       

        default:
            return state;
    }
};
export const UserContext = createContext(loggedUser);

export const UserContextProvider = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer,loggedUser);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user.currentUser));
  }, [user.currentUser]);

  return (
    <UserContext.Provider value={{ user: user.currentUser, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
