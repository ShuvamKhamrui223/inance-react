import { createContext, useContext } from "react";

const authContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const user = true;
  return <authContext.Provider value={user}>{children}</authContext.Provider>;
};

// hook to provide authcontext to any component
export const useAuthContext = () => {
  const context = useContext(authContext);

  if (context === undefined) throw new Error("auth context not found");

  return context;
};
