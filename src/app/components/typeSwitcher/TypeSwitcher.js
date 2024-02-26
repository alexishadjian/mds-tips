import styles from './type-switcher.module.scss';


export default function TypeSwitcher({text, active}) {
    return (
        <div className={`${styles.type_switcher} ${active ? styles.active : '' + "flex center"}`}>
            <span>{text}</span>
        </div>
    );
}