import React from 'react';
import { connect } from 'react-redux';
import {
  updateOrderItemByIndex,
  deleteOrderItemByIndex,
} from 'actions';
import OrderItem from 'components/OrderItem';

import styles from './OrderList.module.scss';

const OrderList = ({ list, updateOrderItemByIndex, deleteOrderItemByIndex }) => {
  return (
    <div id={styles.order_list}>
      <h2 className={styles.title}>Order List:</h2>
      <ul className={styles.wrapper}>
      {
        list.length ?
        list.map((item, index) => (
          <OrderItem 
            key={index} 
            {...item} 
            updateOrderItem={(_item) => {
              updateOrderItemByIndex(index, _item);
            }}
            deleteOrderItem={() => {
              deleteOrderItemByIndex(index);
            }}
            />
          )
        ) :
        <div className={styles.message}>Please click Add button to order drinks!</div>
      }
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.orderList,
  }
};

export default connect(mapStateToProps, {
  updateOrderItemByIndex,
  deleteOrderItemByIndex
})(OrderList);