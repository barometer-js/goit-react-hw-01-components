import PropTypes from 'prop-types';
import s from './Profile.module.scss';

function Profile({ username, tag, location, avatar, followers, views, likes }) {
  return (
    <div className={s.container}>
      <div className={s.section}>
        <img src={avatar} alt={username} className={s.avatar} width="200px" />
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
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
