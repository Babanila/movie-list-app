import { render, screen } from '@testing-library/react';
import { Heading } from './Heading';

describe('Heading Component', () => {
  test('renders with default props (h1 and position "before")', () => {
    render(<Heading level={1}>Default Heading</Heading>);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Default Heading');
  });

  test('renders correct heading level', () => {
    render(<Heading level={3}>Level 3 Heading</Heading>);
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Level 3 Heading');
  });

  test('applies custom className and style', () => {
    render(
      <Heading level={5} style={{ color: 'red' }}>
        Styled Heading
      </Heading>,
    );
    const heading = screen.getByRole('heading', { level: 5 });
    expect(heading).toHaveStyle({ color: 'red' });
  });

  test('renders correct heading levels', () => {
    for (let level = 1; level <= 6; level++) {
      const { getByText } = render(<Heading level={level}>Heading {level}</Heading>);
      expect(getByText(`Heading ${level}`)).toBeInTheDocument();
    }
  });

  test('throws an error for an invalid heading level', () => {
    // Suppress error logs to keep the test output clean
    jest.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => render(<Heading level={7}>Invalid Heading</Heading>)).toThrow('Unknown level: 7');
    expect(() => render(<Heading level={0}>Invalid Heading</Heading>)).toThrow('Unknown level: 0');
    expect(() => render(<Heading level={-1}>Invalid Heading</Heading>)).toThrow(
      'Unknown level: -1',
    );

    (console.error as jest.Mock).mockRestore();
  });
});
