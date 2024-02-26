"use client";

import Svg from "@/app/components/Svg";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import styles from './switcher.module.scss'

export default function Switcher({icon1, icon2, isTheme}) {

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

    
    return (
        <button
            className={`${styles.switcher_container} ${active ? styles.active : ''}`}
            onClick={() => handleClick(isTheme) }
        >
            <div className={styles.active_bg}></div>
            <div className={styles.svg_left}>
                <Svg icon={icon1} />
            </div>
            <div className={styles.svg_right}>
                <Svg icon={icon2} />
            </div>
        </button>


    );
};