import React from 'react';
import { render, screen } from '@testing-library/react';
import Introduction from './Introduction';

test('renders learn react link', () => {
  render(<Introduction />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
});
