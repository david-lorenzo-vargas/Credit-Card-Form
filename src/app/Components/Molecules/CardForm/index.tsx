"use client"

import { ReactElement, useCallback, useEffect } from "react";
import {useForm, SubmitHandler} from "react-hook-form";

import Button from "../../Atoms/Button";
import Input from "../../Atoms/Input";
import Card from "../../Atoms/Card";
import CheckBox from "../../Atoms/CheckBox";

const CardForm = (): ReactElement => {
  const {
    handleSubmit,
    register,
    formState,
    watch,
    reset,
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
      {formState.isSubmitted ? (
        <div className="w-1/2 h-96 flex flex-col items-center justify-center">
          <span className="text-lg font-semibold">
            Thank you!
          </span>
          <Button
            bgColour="bg-acceptGreen"
            type="button"
            id="resetFromButton"
            rounded="rounded-full"
            padding="px-5 py-2"
            onClick={() => reset()}
          >
            <span className="text-white">
              Reset
            </span>
          </Button>
        </div>
      ) : (
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
                      required: true,
                      pattern: /^\d{16}$/
                    })}
                  />
                </div>
                <div className="mb-1">
                  <Input
                    label="Name On Card:"
                    placeholder="Name on card"
                    inputName="cardName"
                    register={register("cardName", {
                      required: "Sorry numbers and specials characters are not allowed",
                      pattern: /^[a-zA-Z\s]{1,}$/
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
                          required: "Sorry you must enter a valid month",
                          pattern: /^\d{1,12}$/
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
                          required: "Sorry you must enter a valid year",
                          pattern: /^[0-2][0-9]{3}$/
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
                        required: true,
                        pattern: /^\d{3}$/
                      })}
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center mb-3">
                  <CheckBox
                    boxId="agreedTerms"
                    size="h-5 w-5"
                    checked={watch("agreed")}
                    register={register("agreed", {
                      required: true
                    })}
                  />
                  <div className="ml-3">
                    <span>
                      I read and agreed Terms & Conditions
                    </span>
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
      )}
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
