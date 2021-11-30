import PropTypes from 'prop-types';
import s from './Profile.module.scss';

function Profile({ username, tag, location, avatar, followers, views, likes }) {
  return (
    <div className={s.container}>
      <div className={s.section}>
        <img src={avatar} alt={username} className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className={s.tager}>{`@${tag}`}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.rating}>Followers</span>
          <span className={s.grade}>{followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.rating}>Views</span>
          <span className={s.grade}>{views}</span>
        </li>
        <li className={s.item}>
          <span className={s.rating}>Likes</span>
          <span className={s.grade}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Profile;
