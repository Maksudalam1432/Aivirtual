import React, { createContext } from "react";


const userDataContext = createContext();


function Usercontext({ children }) {
  const serverUrl = "http://localhost:4000";

  const value = {
    serverUrl,
  };

  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  );
}

export { userDataContext }; 
export default Usercontext; 
