# Credir Card Form

## Table of Contents
1. [Getting Started](#getting-started)
2. [Description](#description)
3. [Stack](#stack)
4. [React Hook Form](#react-hook-form)
5. [Local Storage](#local-storage)
6. [Atomic approach](#atomic-approach)
7. [Testing](#testing)
8. [Accessibility](#accessibility)
9. [Responsiveness](#responsiveness)

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
<br><br>

<h3>Card form</h3>

![Card-Form](https://github.com/david-lorenzo-vargas/Credit-Card-Form/assets/72414745/e4f242b7-4240-4280-83e2-dd7b0174e976.gif)
<br><br>
<h3>Card form setting the local storage</h3>

![Card-Form-savedDetails](https://github.com/david-lorenzo-vargas/Credit-Card-Form/assets/72414745/7baf6dc3-6023-4dfc-b2aa-34f39d3725fd.gif)
<br><br>
<h3>Card form removing the stored details</h3>

![Card-Form-reset](https://github.com/david-lorenzo-vargas/Credit-Card-Form/assets/72414745/0ca75e09-2a82-4c19-848f-576ffef368e5.gif)


## Stack

<ul>
  <li>Next.js</li>
  <li>Typescript</li>
  <li>Tailwind</li>
  <li>React Hook Form</li>
  <li>Jest</li>
  <li>React Testing Library</li>
</ul>

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

## Accessibility

Native HTML tags have been used as well as WAI-ARIA roles and aria labels for acceissibility. This would help web reading tools to navigate through the form.

An 93 overall scored achieved in Lighthouse tool

![Screenshot 2024-03-13 at 15 45 59](https://github.com/david-lorenzo-vargas/Credit-Card-Form/assets/72414745/a442cdf3-adec-4ded-aa5b-2657c448a6b4)

## Responsiveness

Responsive design working in mobile, tablet and desktop

### Mobile

![Screenshot 2024-03-13 at 16 22 25](https://github.com/david-lorenzo-vargas/Credit-Card-Form/assets/72414745/3bfeef27-737a-43b0-a47b-78cb7097c055)

### Tablet

![Screenshot 2024-03-13 at 16 22 40](https://github.com/david-lorenzo-vargas/Credit-Card-Form/assets/72414745/ba42c5cb-b297-4b1b-9004-db8d170d79fc)

### Desktop

![Screenshot 2024-03-13 at 16 22 52](https://github.com/david-lorenzo-vargas/Credit-Card-Form/assets/72414745/37508989-8540-40e2-b344-eefff0ec8780)
