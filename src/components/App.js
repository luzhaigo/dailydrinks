import React, { useCallback, useState } from 'react';
import OrderList from 'components/OrderList';
import DrinksMenu from 'components/DrinksMenu';
import Modal from 'components/Modal';
import styles from './App.module.scss';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const addNewOrder = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);
  const closeModal = useCallback(() => setShowModal(false), []);

  return (
    <div className={styles.App}>
      <h1 id={styles.web_name}>DailyDrinks</h1>
      <OrderList/>
      <button className={styles.add_order} onClick={addNewOrder}>+</button>
      {showModal && <Modal closeModal={closeModal}><DrinksMenu closeModal={closeModal}/></Modal>}
    </div>
  );
}

export default App;
