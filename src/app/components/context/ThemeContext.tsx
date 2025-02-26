"use client"
import { createContext } from "react";

interface ThemeContextType {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}


export const ThemeContext = createContext<ThemeContextType>({ theme: "dark", setTheme: () => {} });


export const ThemeContextProvider = ({ children, value }: { children: React.ReactNode, value: ThemeContextType }) => {
  


  return (
    <ThemeContext.Provider value={ value }>
      {children}
    </ThemeContext.Provider>
  )
}