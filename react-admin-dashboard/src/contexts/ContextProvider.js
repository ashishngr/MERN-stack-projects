import React, {createContext, useContext, useState} from 'react'; 


const stateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false, 
    notification: false, 
}

export const ContextProvider  = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true); 
    const [isClicked, setIsClicked] = useState
    (initialState)
    const [screeSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);

    const setMode = (e) => {
        setCurrentMode(e.target.value);

        localStorage.setItem('themeMode', e.targer.value);
        setThemeSettings(false)
    }
    const setColor = (color) => {
        setCurrentColor(color);

        localStorage.setItem('colorMode', color)
        setThemeSettings(false)

    }


    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true})
    }

    return(
        <stateContext.Provider
        value={{activeMenu, 
            setActiveMenu,
            isClicked, 
            setIsClicked, 
            handleClick,
            screeSize, 
            setScreenSize,
            currentColor,
            currentMode,
            themeSettings,
            setThemeSettings, 
            setMode, setColor
           }}>
            {children}
        </stateContext.Provider>
    )
}


export const useStateContext = () => useContext(stateContext);