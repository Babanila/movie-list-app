import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  test('renders correctly with given children and className', () => {
    render(
      <Button className='test-class' onClick={() => {}}>
        Click Me
      </Button>
    );

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('test-class');
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(
      <Button className='test-class' onClick={handleClick}>
        Click Me
      </Button>
    );

    const button = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(
      <Button className='test-class' onClick={handleClick} disabled>
        Click Me
      </Button>
    );

    const button = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  test('applies correct styles when disabled', () => {
    render(
      <Button className='test-class' onClick={() => {}} disabled>
        Click Me
      </Button>
    );

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveStyle('opacity: 0.6');
    expect(button).toHaveStyle('cursor: not-allowed');
  });

  test('applies correct styles when not disabled', () => {
    render(
      <Button className='test-class' onClick={() => {}}>
        Click Me
      </Button>
    );

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveStyle('opacity: 1');
    expect(button).toHaveStyle('cursor: pointer');
  });
});
