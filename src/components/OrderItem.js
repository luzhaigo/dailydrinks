import React from 'react';
import styles from './OrderItem.module.scss';

const OrderItem = ({ updateOrderItem, deleteOrderItem, ...rest }) => {
  return (
    <li className={styles.item}>
      <div className={styles.name}>name: {rest.name}</div>
      <div className={styles.price}>price: {rest.price}</div>
      <input type="number" className={styles.count} value={rest.count} onChange={(e) => {
        updateOrderItem({
          ...rest,
          count: +e.target.value,
        });
      }}/>
      <div>note:<pre>{rest.note}</pre></div>
      <button className={styles.delete} onClick={deleteOrderItem}>X</button>
    </li>
  );
};

export default OrderItem;