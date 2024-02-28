import { render, screen } from '@testing-library/react';
import { beforeEach, describe } from 'node:test';

import Card from '.';

const nameOnCard = 'ABC';
const expireMonth = '01';
const expireYear = '1234';
const cvv = '123';

const renderCard = (cardNumber?: string) =>
  render(<Card
    cardNumber={cardNumber ?? ''}
    nameOnCard={nameOnCard}
    expireMonth={expireMonth}
    expireYear={expireYear}
    cvv={cvv}
  />);

describe('button', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('should render card name', () => {
    renderCard();
    expect(screen.getByText(nameOnCard)).toBeInTheDocument();
  });

  test('should render card expire month and year', () => {
    renderCard();
    expect(screen.getByText(`${expireMonth}/${expireYear}`)).toBeInTheDocument();
  });

  test('should render card cvv', () => {
    renderCard();
    expect(screen.getByText(cvv)).toBeInTheDocument();
  });

  test('if the component does not receive cardNumer, it should render 16 X', () => {
    renderCard();
    expect(screen.getByText('XXXXXXXXXXXXXXXX')).toBeInTheDocument();
  });

  test('if the component receives cardNumer, it should replace the corresponding X', () => {
    renderCard('123');
    expect(screen.getByText('123XXXXXXXXXXXXX')).toBeInTheDocument();
  });
});
