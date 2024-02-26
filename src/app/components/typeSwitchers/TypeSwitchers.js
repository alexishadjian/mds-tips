import { datas } from "@/datas/datas";
import TypeSwitcher from './typeSwitcher/TypeSwitcher';
import styles from './type-switchers.module.scss';


export default function TypeSwitchers({activeIndex}) {
    return (
        <div className={styles.type_switchers + " flex center gap-m"}>
            {datas.types?.map((type, i) => (
                <TypeSwitcher text={type} key={i} active={(i === activeIndex) ? true : false }/>
            ))}
        </div>
    );
}