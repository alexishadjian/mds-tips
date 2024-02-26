import styles from './bottom-button.module.scss';
import Svg from "@/app/components/Svg";


export default function BottomButton({text, link}) {
    return (
        <div className={styles.bottom_button + " wrapper"}>
            <a href={link} className="btn primary">
                <span>{text}</span>
                <Svg icon="arrowRight" />
            </a>
        </div>
    );
}