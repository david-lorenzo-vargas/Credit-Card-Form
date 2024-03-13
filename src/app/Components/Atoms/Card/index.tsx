import { ReactElement, useMemo } from "react";

import Visa from "../../icons/Visa";

const Card = ({
  cardNumber,
  nameOnCard,
  expireMonth,
  expireYear,
  cvv,
}: Props):ReactElement => {
  const cardNumberDisplayed = useMemo(() => {
    const cardNumberPlaceHolderArr = 'XXXXXXXXXXXXXXXX'.split('');

    const userCardNumberArr = cardNumber?.split('');

    const cardArr: string[] = [];

    cardNumberPlaceHolderArr.map((item: string, index: number) => {
      if (userCardNumberArr[index]) {
        cardArr.push(userCardNumberArr[index])
      } else {
        cardArr.push(item)
      }
    });

    return cardArr.join('');
  }, [cardNumber]);

  return (
    <div className="rounded p-3 bg-gradient-to-tr from-violet-500 to-fuchsia-500 h-40 md:h-60 flex flex-col justify-between">
      <div className="w-full flex flex-row items-center justify-end text-white">
        <Visa />
      </div>
      <div>
        <div>
          <span className="text-white font-semibold text-xs md:text-lg">
            {cardNumberDisplayed}
          </span>
        </div>
        <div>
          <span className="text-white font-semibold text-xs md:text-lg">
            {nameOnCard ? nameOnCard :'Name on card'}
          </span>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div>
            <span className="text-white font-semibold text-xs md:text-lg">
              {`${expireMonth ? expireMonth : 'MM'}/${expireYear ? expireYear : 'YYYY'}`}
            </span>
          </div>
          <div>
            <span className="text-white font-semibold text-xs md:text-lg">
              {cvv ? cvv : 'CVV'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface Props {
  cardNumber: string;
  nameOnCard: string;
  expireMonth: string;
  expireYear: string;
  cvv: string;
}

export default Card;
