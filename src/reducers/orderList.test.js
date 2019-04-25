import orderListReducer from 'reducers/orderList';
import { ADD_ORDER_ITEMS, UPDATE_ORDER_ITEM, DELETE_ORDER_ITEM } from 'actions/types';

it('handles actions of type ADD_ORDER_ITEMS', () => {
  const action = {
    type: ADD_ORDER_ITEMS,
    payload: [1,2,3]
  };

  const newState = orderListReducer([], action);
  
  expect(newState).toEqual([1,2,3]);
});

it('handles actions of type UPDATE_ORDER_ITEM', () => {
  const action = {
    type: UPDATE_ORDER_ITEM,
    payload: {
      index: 0,
      item: {
        a: 1
      }
    }
  };

  const newState = orderListReducer([{ a: 2}], action);
  
  expect(newState).toEqual([{ a: 1}]);
});

it('handles actions of type DELETE_ORDER_ITEM', () => {
  const action = {
    type: DELETE_ORDER_ITEM,
    payload: 0,
  };

  const newState = orderListReducer([{ a: 2}], action);
  
  expect(newState).toEqual([]);
});

it('handles action with unknown type', () => {
  const newState = orderListReducer([], { type: 'hi' });

  expect(newState).toEqual([]);
});