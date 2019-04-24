import React from 'react';
import propTypes from 'prop-types';
import styles from './Stats.module.css';

const getRandColor = () => {
  let color = Math.floor(Math.random() * (256 ** 3).toString(16));
  while (color.length < 6) {
    color = `0${color}`;
  }
  return `#${color}`;
};

const Stats = ({ title, stats }) => (
  <section className={styles.stats_section}>
    <h2 className={styles.title}>{title}</h2>

    <ul className={styles.stat_list}>
      {stats.map(item => (
        <li
          key={item.id}
          className={styles.stat_list_item}
          style={{ backgroundColor: getRandColor() }}
        >
          <span>{item.label}</span>
          <span className={styles.percentage}>{`${item.percentage}%`}</span>
        </li>
      ))}
    </ul>
  </section>
);

Stats.propTypes = {
  title: propTypes.string.isRequired,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Stats;
