import { combineReducers } from 'redux';
import orderList from 'reducers/orderList';

export default combineReducers({
  orderList: orderList,
});