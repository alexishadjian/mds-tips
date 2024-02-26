"use client"

import styles from './user-card.module.scss';
import Svg from "@/app/components/Svg";
import { useState } from 'react';




export default function UserCard({name}) {

    const [active, setActive] = useState(false);

    const toggleActive = () => {
        setActive(!active);
    };

    return (
        <div className={`flex space center-y ${styles.user_card} ${active ? styles.active : ''}`} onClick={toggleActive}>
            <div className="flex center-y gap-m">
                <div className={styles.photo_container + " flex center"}>
                    <Svg icon="user" />
                </div>      
                <div className={styles.name}><h3>{name}</h3></div>
            </div>
            <div className="input-group checkbox">
                <label className="flex">
                    <input type="checkbox" value={active} checked={active} onChange={toggleActive} />
                </label>
            </div>
        </div>
    );
}