import { render, screen } from '@testing-library/react';
import { beforeEach, describe } from 'node:test';

import Card from '.';

const cardNumber = '123';
const nameOnCard = 'ABC';
const expireMonth = '01';
const expireYear = '1234';
const cvv = '123';

const renderCard = () =>
  render(<Card
    cardNumber={cardNumber}
    nameOnCard={nameOnCard}
    expireMonth={expireMonth}
    expireYear={expireYear}
    cvv={cvv}
  />);

describe('button', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('should render card number', () => {
    renderCard();
    expect(screen.getByText(cardNumber)).toBeInTheDocument();
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
});
