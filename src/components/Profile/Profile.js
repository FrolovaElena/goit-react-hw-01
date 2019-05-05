import React from 'react';
import propTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ user: { name, tag, avatar, location, stats } }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={avatar} width={150} alt="img" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>{`@${tag}`}</p>
      <p className={styles.location}>{location}</p>
    </div>
    <ul className={styles.stats}>
      <li className={styles.stats_item}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{stats.followers}</span>
      </li>
      <li className={styles.stats_item}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{stats.views}</span>
      </li>
      <li className={styles.stats_item}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  user: propTypes.shape({
    name: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    avatar: propTypes.string.isRequired,
    stats: propTypes.shape({
      followers: propTypes.number.isRequired,
      views: propTypes.number.isRequired,
      likes: propTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Profile;
