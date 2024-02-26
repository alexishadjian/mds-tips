import styles from './button.module.scss';
import Svg from "@/app/components/Svg";


export default function Button({text, link, picto = true}) {
    return (
        <a href={link} className={styles.button}>
            <span>{text}</span>
            {picto && <Svg icon="arrowRight" />}
        </a>
    );
}