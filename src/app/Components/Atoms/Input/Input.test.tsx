import { render, screen, waitFor, fireEvent } from '@testing-library/react';

import Input from '.';
import { beforeEach, describe } from 'node:test';
import { HTMLInputTypeAttribute } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

const mockOnChange = jest.fn();

const placeholder = 'placeHolder';
const inputName = 'inputName';
const label = 'label';

const renderInput = (
  type?: HTMLInputTypeAttribute, register?: UseFormRegisterReturn
) =>
  render(
  <Input
    label={label}
    placeholder={placeholder}
    inputName={inputName}
    type={type}
    {...register}
  />);

describe('input', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('should render', () => {
    renderInput();
    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('text input should render if type text is passed as prop', () => {
    renderInput('text');
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('number input should render if type number is passed as prop', () => {
    renderInput('number');
    expect(screen.getByRole('spinbutton')).toBeInTheDocument()
  });

  test('if there is no value, placeholder should render', () => {
    renderInput();
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  test('should call onChange when typing', async () => {
    renderInput();
    fireEvent.change(screen.getByRole('textbox'), {target: {value: 'aaa'}});
    expect(screen.getByRole('textbox')).toHaveValue('aaa');
  });
});
