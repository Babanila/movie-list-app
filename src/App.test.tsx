import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', async () => {
    render(<App />);
    const linkElement = await screen.findByText(/list of movies/i);
    expect(linkElement).toBeInTheDocument();
});
