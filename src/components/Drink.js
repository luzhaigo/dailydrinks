import React, { useCallback } from 'react';
import styles from './Drink.module.scss';

const Drink = ({ setDrink, ...rest }) => {
  const inputChange = useCallback((e) => {
    setDrink({
      ...rest,
      count: +e.target.value,
    });
  }, [setDrink, rest]);

  const textAreaChange = useCallback((e) => {
    setDrink({
      ...rest,
      note: e.target.value,
    });
  }, [setDrink, rest]);
  
  return (
    <li className={styles.drink}>
      <div className={styles.name}>name: {rest.name}</div>
      <div className={styles.info}>
        <div>price: {rest.price}</div>
        <input value={rest.count} type="number" onChange={inputChange}/>
      </div>
      <textarea className={styles.note} onChange={textAreaChange}/>
    </li>
  );
};

export default Drink;