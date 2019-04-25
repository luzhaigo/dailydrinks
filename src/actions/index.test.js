import { addOrderItems, updateOrderItemByIndex, deleteOrderItemByIndex } from 'actions';
import { ADD_ORDER_ITEMS, UPDATE_ORDER_ITEM, DELETE_ORDER_ITEM } from 'actions/types';

describe('addOrderItems', () => {
  it('has the correct type', () => {
    const action = addOrderItems();

    expect(action.type).toEqual(ADD_ORDER_ITEMS);
  });

  it('has the correct payload', () => {
    const action = addOrderItems([]);

    expect(action).toEqual({
      type: ADD_ORDER_ITEMS,
      payload: [],
    });
  });
});

describe('updateOrderItemByIndex', () => {
  it('has the correct type', () => {
    const action = updateOrderItemByIndex();

    expect(action.type).toEqual(UPDATE_ORDER_ITEM);
  });

  it('has the correct payload', () => {
    const action = updateOrderItemByIndex(0, {});

    expect(action).toEqual({
      type: UPDATE_ORDER_ITEM,
      payload: {
        index: 0,
        item: {},
      },
    });
  });
});

describe('deleteOrderItemByIndex', () => {
  it('has the correct type', () => {
    const action = deleteOrderItemByIndex();

    expect(action.type).toEqual(DELETE_ORDER_ITEM);
  });

  it('has the correct payload', () => {
    const action = deleteOrderItemByIndex(0);

    expect(action).toEqual({
      type: DELETE_ORDER_ITEM,
      payload: 0,
    });
  });
});