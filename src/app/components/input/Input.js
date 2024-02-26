import styles from './input.module.scss';


export default function Input({name, label, placeholder}) {
    return (
        <label className={styles.input + " flex column gap-xs"} for={name}>
            <span>{label}</span>
            <input id={name} type="text" placeholder={placeholder} />
        </label>
    );
}