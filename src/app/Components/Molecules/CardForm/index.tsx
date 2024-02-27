import { ReactElement } from "react";

import Button from "../../Atoms/Button";
import Input from "../../Atoms/Input";

const CardForm = (): ReactElement => {
  return (
    <form>
      <div>
        <div className="mb-1">
          <Input
            label="Card Number:"
            placeholder="Card number"
            inputName="cardNumber"
          />
        </div>
        <div className="mb-1">
          <Input
            label="Name On Card:"
            placeholder="Name on card"
            inputName="cardName"
          />
        </div>
        <div className="flex flex-row items-center justify-between mb-5">
          <div className="flex flex-row items-center mr-2">
            <div className="mr-2">
              <Input
                label="Moth:"
                placeholder="MM"
                inputName="cardMonth"
                type="number"
              />
            </div>
            <div>
              <Input
                label="Year:"
                placeholder="YYYY"
                inputName="cardYear"
                type="number"
              />
            </div>
          </div>
          <div>
            <Input
              label="CVV:"
              placeholder="CVV"
              inputName="CVV"
              type="number"
            />
          </div>
        </div>
        <Button
          type="submit"
          id="sendFormButton"
          disabled={false}
          rounded="rounded-full"
          bgColour="bg-blue"
          padding="px-5 py-2"
        >
          <span className="text-white">Send</span>
        </Button>
      </div>
    </form>
  );
};

export default CardForm;
