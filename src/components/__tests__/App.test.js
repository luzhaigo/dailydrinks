import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import Modal from 'components/Modal';
import OrderList from 'components/OrderList';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App/>);
});

it('has a web name', () => {
  expect(wrapper.find(`#web_name`).text()).toEqual('DailyDrinks');
});

it('shows a order list', () => {
  expect(wrapper.find(OrderList).length).toEqual(1);
});

it('has an add order item button', () => {
  expect(wrapper.find('.add_order').length).toEqual(1);
});

it('click add order item button, show modal', () => {
  wrapper.find('.add_order').simulate('click');

  wrapper.update();

  expect(wrapper.find(Modal).length).toEqual(1);
});