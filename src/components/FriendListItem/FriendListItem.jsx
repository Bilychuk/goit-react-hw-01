import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  const statusClassNames = clsx(
    css.status,
    isOnline ? css.isOnline : css.isOffline
  );
  return (
    <div className={css.container}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={statusClassNames}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}
