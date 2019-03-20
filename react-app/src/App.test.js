import { shallow } from 'enzyme';
import React from 'react';
import App from './App';
import Button from './components/Button';

describe('App', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<App/>));
  it('should render the button', () => {
    const button = wrapper.find(Button);
    expect(button.exists()).toEqual(true);
    expect(button.props().children).toEqual("Say hello");
    // expect(button.text()).toEqual("Say hello"); //This won't work
  });
  it('should not render greeting', () => expect(wrapper.find('h1').exists()).toEqual(false));
  describe('when button is clicked', () => {
    beforeEach(() => wrapper.find(Button).simulate('click'));
    it('should not render the button', () => expect(wrapper.find(Button).exists()).toEqual(false));
    it('should render greeting', () => {
      const greeting = wrapper.find('h1');
      expect(greeting.exists()).toEqual(true);
      expect(greeting.text()).toEqual('Hello World')
    });
  });
});
