import { datas } from "@/datas/datas";
import UserCard from './userCard/UserCard';
import styles from './user-cards.module.scss';


export default function UserCards({activeType}) {
    return (
        <div className={styles.user_cards + " flex column gap-xs"}>
            {datas.users?.map((user, i) => (
                <UserCard key={i} name={user.name} initialActive={user.type == activeType} />
            ))}
        </div>
    );
}