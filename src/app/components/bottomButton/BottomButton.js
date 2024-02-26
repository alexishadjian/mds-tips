import styles from './bottom-button.module.scss';
import Svg from "@/app/components/Svg";


export default function BottomButton({text}) {
    return (
        <div className={styles.bottom_button + " wrapper"}>
            <button className="btn primary">
                <span>{text}</span>
                <Svg icon="arrowRight" />
            </button>
        </div>
    );
}