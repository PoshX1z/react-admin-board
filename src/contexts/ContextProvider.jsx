import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
    cart: false,
    chat: false,
    userProfile: false,
    notification: false,
};
export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState("#03c9d7");
    const [currentMode, setCurrentMode] = useState("Light");
    const [themeSettings, setThemeSettings] = useState(false);

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem("themeMode", e.target.value);
        setThemeSettings(false);
    };
    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem("colorMode", color);
        setThemeSettings(false);
    };
    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true });
    };
    return (
        <StateContext.Provider
            value={{
                activeMenu: activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                currentColor,
                currentMode,
                setCurrentColor,
                setCurrentMode,
                themeSettings,
                setThemeSettings,
                setMode,
                setColor,
                initialState,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};
export const useStateContext = () => useContext(StateContext);
