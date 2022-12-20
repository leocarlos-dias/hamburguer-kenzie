import { createContext, useEffect, useState } from "react";
import { light, dark } from "../styles/themes";

interface IThemeProps {
    children: React.ReactNode;
}

interface IThemeContext {
    theme: typeof light | typeof dark;
    setTheme: React.Dispatch<React.SetStateAction<typeof light | typeof dark>>;
    toggleTheme: () => void;
}

export const ThemeContext = createContext({} as IThemeContext);

export const MyThemeProvider = ({ children }: IThemeProps) => {
    const [theme, setTheme] = useState<typeof light | typeof dark>(light)

    function toggleTheme() {
        setTheme(theme.title === "dark" ? light : dark);
        localStorage.setItem("@current-theme", JSON.stringify(theme));
    }

    useEffect(() => {
        const currentTheme = localStorage.getItem("@current-theme")

        if (currentTheme) {
            setTheme(JSON.parse(currentTheme).title === "dark" ? light : dark)
        }

    }, []);


    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}