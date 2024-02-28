## Getting Started

First, install node modules:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Required Node.js 18.17 or later.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Description

Simple form for gathering card details from user. Along the user typing the card details get updated.
<br><br>
All the fields arequired so the button doesnt get enabled until all the fields are filled and by matching the correct validation.
<br><br>
On completion, the data gets console.log and a 'Thank you!' message gets render together with a 'Reset' button that resets all the form information.

## Stack

Next.js,
Typescript,
Tailwind,
React Hook Form,
Jest,
React Testing Library,

## React Hook Form

React Hook Form used for managinf the form. All the input are wrapped in a `<form>` tag and registered to the form by passing ´register´ as props. Atom components receive register prop and it is spead to have the input registered in the form. Button component doesnt accept onClick as it receives ´type='submit'´ and the submit is handle by passing `onSubmit={handleSubmit(submit)}` that comes from `useForm`.
<br><br>
Validation has been implemented via `register` by passing an object as a second argument where all the inputs are required and they have an specific pattern they need to full fill in order to be valid eg: `register("inputName", {required: true, pattern: /regex patter that needs to full fill/})`.
<br><br>
For enabling the button we pass `isValid` that comes from `formState` as prop to the button component.
<br><br>
For rendering the values typed in the card we use `watch` method that access the input value as follow `watch("inputName")`.
<br><br>
Once the form is validated and the submit button gets clicked, we check if the form has been submited by using `isSubmited` cominf from `formSate` and if `isSubmited===true` a 'Thank you!' text gets rendered together with a 'Reset button' that hanldes `reset` method for reseting the form state.

## Local Storage

Because there is no API for sending and storing data, we use `localStorage` for storing the card details data if the user decides to store it. If there was an API, for security reasons the data would be stored by sending it to the API instead of storing it in the `localStorage`.
<br><br>
A 'Save my card details' button is provided to the user, if clicked all the information from the form fields get stored in the Local Storage and when the user comes back, the form fields get filled with the information stored.
<br><br>
If information has been stored, a 'Remove my card details' button is provided to the user that will remove all the information stored in the Local Storage.

## Atomic approach

Atomic approach has been used for structuring and ordering the componets separated in 'atoms', 'molecules' and 'organisms'.

## Testing

Jest and React Testing Library have been used for testing. I have added testing to some components but, as further implementation, it would be necessary to add more unit and integration testing for other functionalities and components.

For running tests: `npm run test`
