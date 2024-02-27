import { render, screen, waitFor, fireEvent } from '@testing-library/react';

import CheckBox from '.';
import { beforeEach, describe } from 'node:test';

const mockOnClick = jest.fn();
const boxName = 'label';
const boxId = 'age';

const renderCheckBox = (checked = true) =>
  render(<CheckBox boxName={boxName} checked={checked} boxId={boxId} onClick={() => mockOnClick()} />);

describe('checkBox', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('should render', () => {
    renderCheckBox();
    expect(screen.getByText(boxName)).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  test('checkBox should be checked when checked prop is true', () => {
    renderCheckBox();
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  test('should not be checked when passed false', () => {
    renderCheckBox(false);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  test('should call onClick when chexkBox is clicked', async () => {
    renderCheckBox();
    fireEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => {
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
  });
});