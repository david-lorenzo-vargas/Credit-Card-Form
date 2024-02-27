"use client"

import { ReactElement, useCallback } from "react";
import {useForm, SubmitHandler} from "react-hook-form";

import Button from "../../Atoms/Button";
import Input from "../../Atoms/Input";
import Card from "../../Atoms/Card";

const CardForm = (): ReactElement => {
  const {
    handleSubmit,
    register,
    formState,
    watch,
  } = useForm<FormFields>({
    defaultValues: {
      cardNumber: "",
      cardName: "",
      cardMonth: "",
      cardYear: "",
      cardCvv: "",
      agreed: false,
    }
  });

  const onSubmit: SubmitHandler<FormFields> = useCallback((data) => {
    console.log({data});
  },[]);

  return (
    <>
      <div className="w-1/2 mb-5">
        <Card
          cardNumber={watch("cardNumber")}
          nameOnCard={watch("cardName")}
          expireMonth={watch("cardMonth")}
          expireYear={watch("cardYear")}
          cvv={watch("cardCvv")}
        />
      </div>
      <div className="w-1/2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="mb-1">
              <Input
                label="Card Number:"
                placeholder="Card number"
                inputName="cardNumber"
                register={register("cardNumber", {
                  required: true
                })}
              />
            </div>
            <div className="mb-1">
              <Input
                label="Name On Card:"
                placeholder="Name on card"
                inputName="cardName"
                register={register("cardName", {
                  required: true
                })}
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
                    register={register("cardMonth", {
                      required: true
                    })}
                  />
                </div>
                <div>
                  <Input
                    label="Year:"
                    placeholder="YYYY"
                    inputName="cardYear"
                    type="number"
                    register={register("cardYear", {
                      required: true
                    })}
                  />
                </div>
              </div>
              <div>
                <Input
                  label="CVV:"
                  placeholder="CVV"
                  inputName="CVV"
                  type="number"
                  register={register("cardCvv", {
                    required: true
                  })}
                />
              </div>
            </div>
            <Button
              type="submit"
              id="sendFormButton"
              rounded="rounded-full"
              bgColour="bg-blue"
              padding="px-5 py-2"
              disabled={!formState.isValid}
            >
              <span className="text-white">Send</span>
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

type FormFields = {
  cardNumber: string;
  cardName: string;
  cardMonth: string;
  cardYear: string;
  cardCvv: string;
  agreed: boolean;
}

export default CardForm;
