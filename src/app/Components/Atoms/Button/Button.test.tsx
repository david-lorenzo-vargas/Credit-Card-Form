import { render, screen, waitFor, fireEvent, getByTestId } from '@testing-library/react';
import { beforeEach, describe } from 'node:test';

import Button from '.';

const mockOnClick = jest.fn();
const id = 'button';
const type = 'submit';

const ChildComponent = () => {
  return (
    <div data-testid="ChildComponent">ChildComponent</div>
  );
};

const renderButton = (disabled: boolean = false) =>
  render(<Button disabled={disabled} id={id} onClick={() => mockOnClick()} type={type}><ChildComponent /></Button>);

describe('button', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('should render', () => {
    renderButton();
    expect(screen.getByTitle(id)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('button should be disabled when disabled prop is true', () => {
    renderButton(true);
    expect(screen.getByRole('button')).toHaveAttribute('disabled');
  });

  test('should not be disabled when passed false', () => {
    renderButton();
    expect(screen.getByRole('button')).not.toHaveAttribute('disabled');
  });

  test('should call onClick when button is clicked', async () => {
    renderButton();
    fireEvent.click(screen.getByTitle(id));
    await waitFor(() => {
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
  });

  test('should render a child component', () => {
    renderButton();
    expect(screen.getByTestId("ChildComponent")).toBeInTheDocument();
  });
});