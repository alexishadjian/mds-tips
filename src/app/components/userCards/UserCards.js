import { datas } from "@/datas/datas";
import UserCard from './userCard/UserCard';
import styles from './user-cards.module.scss';


export default function UserCards({activeType, selected}) {
    return (
        <div className={styles.user_cards + " flex column gap-xs"}>
            {datas.users?.map((user, i) => (
                <UserCard key={i} name={user.name} type={user.type} initialActive={user.type == activeType} selected={selected} />
            ))}
        </div>
    );
}