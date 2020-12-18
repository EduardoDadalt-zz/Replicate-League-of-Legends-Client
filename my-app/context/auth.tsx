import { createContext, Dispatch, SetStateAction, useState } from "react";

export const Auth = createContext<AuthProps>({
  isLoggin: false,
  setIsLoggin: () => {},
});
interface AuthProps {
  isLoggin: boolean;
  setIsLoggin: Dispatch<SetStateAction<boolean>>;
}
const AuthProvider = ({ children }) => {
  const [isLoggin, setIsLoggin] = useState(true);
  return (
    <Auth.Provider value={{ isLoggin, setIsLoggin }}>{children}</Auth.Provider>
  );
};

export default AuthProvider;
