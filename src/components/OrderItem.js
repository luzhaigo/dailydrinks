import React from 'react';
import styles from './OrderItem.module.scss';

const OrderItem = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.name}>{props.name}</div>
      <div className={styles.price}>{props.price}</div>
      <div className={styles.count}>{props.count}</div>
      <button className={styles.delete}>X</button>
    </div>
  );
};

export default OrderItem;