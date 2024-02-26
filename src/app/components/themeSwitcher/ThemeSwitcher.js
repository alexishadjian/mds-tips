"use client";

import Svg from "@/app/components/Svg";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import styles from './theme-switcher.module.scss'

export default function ThemeSwitcher({icon1, icon2, isTheme}) {

    const [mounted, setMounted] = useState(false);
    const [active, setActive] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }


    const handleClick = (isTheme) => {
        if (isTheme) {
            if (theme === "dark") setTheme("light") 
            else setTheme("dark")
        setActive(!active);
        } else {
            setActive(!active);
        }
    }

    console.log(active)

    return (
        <button
            className={`${styles.switcher_container} ${active ? styles.active : ''}`}
            onClick={() => handleClick(isTheme) }
        >
            <div className={styles.active_bg}></div>
            <div className={styles.svg_left}>
                <Svg icon="sun" />
            </div>
            <div className={styles.svg_right}>
                <Svg icon="moon" />
            </div>
        </button>


    );
};