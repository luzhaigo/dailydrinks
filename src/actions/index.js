import {
  ADD_ORDER_ITEMS,
  UPDATE_ORDER_ITEM,
  DELETE_ORDER_ITEM,
} from './types';

export const addOrderItems = (items) => {
  return {
    type: ADD_ORDER_ITEMS,
    payload: items,
  }
};

export const updateOrderItemByIndex = (index, item) => {
  return {
    type: UPDATE_ORDER_ITEM,
    payload: {
      item,
      index,
    },
  }
};

export const deleteOrderItemByIndex = index => {
  return {
    type: DELETE_ORDER_ITEM,
    payload: index,
  }
}