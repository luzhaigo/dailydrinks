import React from 'react';
import { connect } from 'react-redux';
import { addOrderItems } from 'actions';
import OrderItem from 'components/OrderItem';

import styles from './OrderList.module.scss';

const OrderList = ({ list }) => {
  return (
    <div id={styles.order_list}>
      <h2 className={styles.title}>Order List:</h2>
      {
        list.map((item, index) => <OrderItem key={index} {...item}/>)
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.orderList,
  }
};

export default connect(mapStateToProps)(OrderList);