import React, { createContext, useContext, FunctionComponent, ReactChild, ReactChildren, useState, ReactFragment, ReactPortal } from 'react'
import { createTheme, ITheme } from '@fluentui/react'

const customTheme: ITheme = createTheme({
    palette: {
        themePrimary: '#8300d4',
        themeLighterAlt: '#f9f3fd',
        themeLighter: '#e9d0f8',
        themeLight: '#d6a9f2',
        themeTertiary: '#b05ce5',
        themeSecondary: '#901ad9',
        themeDarkAlt: '#7500be',
        themeDark: '#6300a1',
        themeDarker: '#490077',
        neutralLighterAlt: '#faf9f8',
        neutralLighter: '#f3f2f1',
        neutralLight: '#edebe9',
        neutralQuaternaryAlt: '#e1dfdd',
        neutralQuaternary: '#d0d0d0',
        neutralTertiaryAlt: '#c8c6c4',
        neutralTertiary: '#a19f9d',
        neutralSecondary: '#605e5c',
        neutralPrimaryAlt: '#3b3a39',
        neutralPrimary: '#323130',
        neutralDark: '#201f1e',
        black: '#000000',
        white: '#ffffff',
    }
});

const link = 'https://www.aka.ms/themedesigner'
console.log(`Create You Own Theme Pallate at ${link}`)
console.log(`Theme Value is ${customTheme.palette.themeLighter}`)

type ThemeContextType = {
    theme: string;
    setTheme: (value: string) => void;
};



type Props = {
    children: ReactChild | ReactFragment | ReactPortal | boolean | null | undefined
}

export default function ThemeProvider(props:Props) {
    const [state, setState] = useState(0);
    const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
    return (
        <ThemeContext.Provider value={undefined}>
            {props.children}
        </ThemeContext.Provider>
    )

}