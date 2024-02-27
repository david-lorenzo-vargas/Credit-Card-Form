## Getting Started

First, run the development server:

```bash
npm run dev
```

Required Node.js 18.17 or later.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

When the user lands on the Home page there is a text saying "Home Page" and a button "Consulation" that redirects to a new route '/consultation'.

On /consultation route, the user needs to answer to the questions "YES" or "NO" in order to see the next question appear, once all the questions have been answered, the 'Send' button gets enabled in order to send the information. As there is no API implementation in this task, we console.log the form data.

Local storage has been implemented in the '/consultation' page. Every time the user answeres a question, the state is stored in the local storage in case they want to come back later and continue with the progress instead of starting from the begining. Once the user completes all the questions and sends the data, the local storage gets emptied.

## Stack

Next.js
Typescript
Tailwind
Jest
React Testing Library

## Accesibility

As it is a medical web page we can assume there could be some users using some tools that would help them read the web and navigate though it. To achieve that, the web uses native HTML components such as <button>, <input>, <nav>... 

## Responsiveness

The web is reponsive, the footer renders two colums on desktop and just one column on mobile. The nav renders a "hamburger" nav if the user screen is less that 515px.

## TypeScript

All the types and enums are abstracted in a Types folder.

## Util

Util folder is created with a sub folder called API where all the API calls would be, as there is no API implemented, the data is in console.log.

## Atomic approach

Atomic approach has been used for structuring and ordering the componets separated in 'atoms', 'molecules' and 'organisms'.

## Testing

Jest and React Testing Library have been used for testing. I have added testing to some components but, as further implementation, it would be necessary to add more unit and integration testing for other functionalities and components.

For running tests: `npm run test`
