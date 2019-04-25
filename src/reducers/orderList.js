import {
  ADD_ORDER_ITEMS,
  UPDATE_ORDER_ITEM,
  DELETE_ORDER_ITEM,
} from 'actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_ORDER_ITEMS: {
      return [...state, ...action.payload];
    }
    case UPDATE_ORDER_ITEM: {
      const { index, item } = action.payload;
      return state.map((_item, _idx) => _idx === index ? item : _item);
    }
    case DELETE_ORDER_ITEM: {
      const index = action.payload;
      return state.filter((_, _idx) => _idx !== index);
    }
    default:
      return state;
  }
};