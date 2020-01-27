import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);

 

});

test('renders "Women in Soccer" text', () => {
  const wrapper = render(<App />);
  const soccerText = wrapper.getByText(/women in soccer/i);
  expect(soccerText).toEqual(soccerText);
})
