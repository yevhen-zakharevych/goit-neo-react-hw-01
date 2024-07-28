import css from './Profile.module.css';

function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <>
      <div className={css.card}>
        <div className={css.description}>
          <img src={image} alt="User avatar" />
          <p className={css.name}>{name}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>
        </div>

        <ul className={css.stats}>
          <li className={css['stats-item']}>
            <span>Followers: </span>
            <span className={css['stat-value']}>{followers}</span>
          </li>
          <li className={css['stats-item']}>
            <span>Views: </span>
            <span className={css['stat-value']}>{views}</span>
          </li>
          <li className={css['stats-item']}>
            <span>Likes: </span>
            <span className={css['stat-value']}>{likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Profile;
