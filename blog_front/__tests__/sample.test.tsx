import React from 'react';
import { render, screen } from '@testing-library/react';

function Hello() {
  return <h1>Hello</h1>;
}

test('render hello', () => {
  render(<Hello />);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});
