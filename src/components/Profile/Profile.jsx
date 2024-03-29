import css from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span className={css.statsTitle}>Followers</span>
          <span className={css.statsAmount}>{followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsTitle}>Views</span>
          <span className={css.statsAmount}>{views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsTitle}>Likes</span>
          <span className={css.statsAmount}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
