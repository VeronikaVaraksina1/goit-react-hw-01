import css from './Profile.module.css';

export const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.container}>
      <div className={css.profileInfo}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileText}>@{tag}</p>
        <p className={css.profileText}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listItem}>
          <span className={css.statsKey}>Followers</span>
          <span className={css.statsValue}>{followers}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.statsKey}>Views</span>
          <span className={css.statsValue}>{views}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.statsKey}>Likes</span>
          <span className={css.statsValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
