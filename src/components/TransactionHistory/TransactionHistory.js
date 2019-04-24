import React from 'react';
import propTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.transaction_history}>
    <thead>
      <tr>
        <th className={styles.head}>Type</th>
        <th className={styles.head}>Amount</th>
        <th className={styles.head}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <tr key={item.id}>
          <td className={styles.row}>{item.type}</td>
          <td className={styles.row}>{item.amount}</td>
          <td className={styles.row}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TransactionHistory;
