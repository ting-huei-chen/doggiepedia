import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Breed from './Breed';
import breeds from '../data/breeds.json';

const atBreed = (slug) => render(
  <MemoryRouter initialEntries={[`/breed/${slug}`]}>
    <Routes><Route path='/breed/:name' element={<Breed />} /></Routes>
  </MemoryRouter>
);

test('shows the breed name and a numeric life span', () => {
  atBreed('golden-retriever');
  expect(screen.getByRole('heading', { name: 'Golden Retriever' })).toBeInTheDocument();
  expect(screen.getByText('11')).toBeInTheDocument(); // (10 + 12) / 2
});

// The old version fetched at runtime with a placeholder key, so a failed request rendered
// NaN into the life span. Data is static now; this makes sure a gap can never do that again.
test('every breed in the snapshot renders without NaN or a crash', () => {
  for (const breed of breeds) {
    const { unmount } = atBreed(breed.slug);
    expect(document.body.textContent).not.toMatch(/NaN/);
    unmount();
  }
});

test('an unknown slug shows the not-found branch', () => {
  atBreed('not-a-dog');
  expect(screen.getByRole('heading', { name: /breed not found/i })).toBeInTheDocument();
});
