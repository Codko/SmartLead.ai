import { createContext, useState } from "react";

const InputContext = createContext({
  text: "",
  setText: () => {},
});

const Inputprovider = ({ children }) => {
  const [text, setText] = useState("");

  return (
    <InputContext.Provider value={{text, setText}}>
      {children}
    </InputContext.Provider>
  );
};
export { InputContext, Inputprovider };
