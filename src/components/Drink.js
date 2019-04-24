import React from 'react';
import styles from './Drink.module.scss';

const Drink = ({ setDrink, ...rest }) => {
  return (
    <div className={styles.drink}>
      <div className={styles.name}>name: {rest.name}</div>
      <div className={styles.info}>
        <div>price: {rest.price}</div>
        <input value={rest.count} type="number" onChange={(e) => {
          setDrink({
            ...rest,
            count: e.target.value,
          });
        }}/>
      </div>
      <textarea className={styles.note}/>
    </div>
  );
};

export default Drink;