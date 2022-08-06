import { createContext, useEffect, useState } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
  const [userGlobal, setUserGlobal] = useState({});
  const [islogged, setIslogged] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("LMG-user")) ?? {};
    setUserGlobal(user);
    if (Object.keys(user).length > 0) {
      setIslogged(true);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(userGlobal).length > 0) {
      localStorage.setItem("LMG-user", JSON.stringify(userGlobal));
    }
  }, [userGlobal]);

  const actualizarUser = (user) => {
    setUserGlobal(user);
  };
  return (
    <UsuarioContext.Provider
      value={{
        islogged,
        setIslogged,
        userGlobal,
        setUserGlobal,
        actualizarUser,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};
