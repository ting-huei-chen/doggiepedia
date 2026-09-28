import { render, screen } from '@testing-library/react';
import App from './App';
import breeds from './data/breeds.json';

// App mounts its own BrowserRouter, so jsdom's default location ("/") lands on the gallery.
test('renders the gallery at the root route', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Doggiepedia' })).toBeInTheDocument();
  expect(screen.getByText('golden retriever')).toBeInTheDocument();
});

test('renders one card per breed in the snapshot', () => {
  render(<App />);
  const cards = screen.getAllByRole('link').filter((a) => a.className === 'breed');
  expect(cards).toHaveLength(breeds.length);
});

// Regression guard: these paths used to be relative ("images/x.png"), which only worked
// because each route happened to sit at the right depth. They must be absolute so the
// /doggiepedia/ sub-path resolves from any route. PUBLIC_URL is empty under jest.
test('breed images use absolute, PUBLIC_URL-derived paths', () => {
  render(<App />);
  const src = screen.getByAltText('golden retriever').getAttribute('src');
  expect(src).toBe(process.env.PUBLIC_URL + '/images/golden-retriever.png');
  expect(src.startsWith('/')).toBe(true);
});
