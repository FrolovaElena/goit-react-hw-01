import React from 'react';
import propTypes from 'prop-types';
import PricingItem from '../PricingItem/PricingItem';
import styles from './PricingPlan.module.css';

const PricingPlan = ({ items }) => (
  <ul className={styles.pricing_plan}>
    {items.map(item => (
      <li key={item.id}>
        <PricingItem {...item} />
      </li>
    ))}
  </ul>
);

PricingPlan.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({ id: propTypes.string.isRequired }).isRequired,
  ).isRequired,
};

export default PricingPlan;
