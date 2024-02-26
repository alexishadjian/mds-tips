"use client";

import Svg from "@/app/components/Svg";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import styles from './theme-switcher.module.scss'

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button 
            className={styles.switcher_container}
            onClick={() => (theme === "dark") ? setTheme("light") : setTheme("dark")}
        >
            <div className={styles.active_bg}></div>
            <Svg icon="sun" />
            <Svg icon="moon" />
        </button>
    );
};