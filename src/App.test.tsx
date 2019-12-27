import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('render initial commit paragraph', () => {
  const { getByText } = render(<App />);
  const paragraphElement = getByText(/Initial Commit/i);
  expect(paragraphElement).toBeInTheDocument();
});
