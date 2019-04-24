import { ADD_ORDER_ITEMS } from './types';

export const addOrderItems = (items) => {
  return {
    type: ADD_ORDER_ITEMS,
    payload: items,
  }
};