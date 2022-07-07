import { render, screen } from '@testing-library/react';
import App from './App';
import Navbar from './components/organisms/Navbar'

test('renders learn react link', () => {
  render(<Navbar />);
  expect(screen.getByRole("button", { name: "Search Job" })).toBeDefined();
});