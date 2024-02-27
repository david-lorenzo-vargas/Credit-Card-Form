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

    const userCardNumberArr = cardNumber.split('');

    const cardArr: string[] = [];

    cardNumberPlaceHolderArr.map((item, index) => userCardNumberArr.map((number, ix) => {
      if (index === ix){
        cardArr.push(number);
      } else {
        cardArr.push(item);
      }
    }));

    return cardArr.join('');
  }, [cardNumber]);

  return (
    <div className="rouded p-10 bg-gradient-to-tr from-violet-500 to-fuchsia-500">
      <div className="w-full flex flex-row items-center justify-end text-white">
        <Visa />
      </div>
      <div>
        <span>
          {cardNumberDisplayed}
        </span>
      </div>
      <div>
        <span>
          {nameOnCard ? nameOnCard :'Name on card'}
        </span>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div>
          <span>
            {`${expireMonth ? expireMonth : 'MM'}/${expireYear ? expireYear : 'YYYY'}`}
          </span>
        </div>
        <div>
          <span>
            {cvv ? cvv : 'CVV'}
          </span>
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
