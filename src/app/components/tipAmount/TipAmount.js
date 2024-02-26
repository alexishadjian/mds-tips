import styles from './tip-amount.module.scss';


export default function TypeAmount({amount}) {
    return (
        <button className={styles.tip_amount}>
            {amount}
        </button>
    );
}