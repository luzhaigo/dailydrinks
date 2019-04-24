import React, { useState } from 'react';
import { connect } from 'react-redux';
import Drink from 'components/Drink';
import { addOrderItems } from 'actions';
import styles from './DrinksMenu.module.scss';

const drinksMenu = [
  { name: 'drink#1', price: '25', count: 0},
  { name: 'drink#2', price: '30', count: 0},
  { name: 'drink#3', price: '35', count: 0},
  { name: 'drink#4', price: '40', count: 0},
  { name: 'drink#5', price: '45', count: 0},
  { name: 'drink#6', price: '50', count: 0},
  { name: 'drink#7', price: '55', count: 0},
  { name: 'drink#8', price: '60', count: 0},
  { name: 'drink#9', price: '65', count: 0},
  { name: 'drink#10', price: '70', count: 0},
  { name: 'drink#11', price: '25', count: 0},
  { name: 'drink#12', price: '30', count: 0},
];

const renderDrinks = (drinks, setDrinks) => {
  return drinks.map((drink, index) => <Drink key={drink.name} {...drink} setDrink={(newDrink) => {
    setDrinks(drinks.map((_drink, _idx) => index === _idx ? newDrink : _drink));
  }}/>);
}

const DrinksMenu = ({ closeModal, addOrderItems }) => {
  const [drinks, setDrinks] = useState(drinksMenu);

  return (
    <div className={styles.drinks_menu} onClick={e => e.stopPropagation()}>
        <h3 className={styles.title}>Drink List:</h3>
          <ul className={styles.drinks_wrapper}>
            {renderDrinks(drinks, setDrinks)}
          </ul>
          <div className={styles.panel}>
            <button className={styles.action} onClick={closeModal}>Cancel</button>
            <button className={styles.action} onClick={() => {
              addOrderItems(drinks.filter(drink => drink.count));
              closeModal();
            }}>Add</button>
          </div>
      </div>
  );
};

export default connect(null, { addOrderItems })(DrinksMenu);