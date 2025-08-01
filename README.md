# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This is a responsive and interactive credit card input form built with **Next.js** and **TypeScript**, designed to provide real-time feedback as users enter their card information. It mimics a real card display by updating the front and back visuals based on form inputs.

The project emphasizes accessibility, form validation, user experience, and modern styling practices.

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

### Links

- Solution URL: [View the project on GitHub](https://github.com/mavic01/cardz/)
- Live Site URL: [View live site URL here](https://cardz-mauve.vercel.app/)

## My process

### Built with

| Tool / Library       | Purpose                                 |
|----------------------|------------------------------------------|
| [Next.js](https://nextjs.org/)             | React framework for building the app |
| [TypeScript](https://www.typescriptlang.org/)     | Type-safe development experience     |
| [Tailwind CSS](https://tailwindcss.com/)          | Utility-first CSS styling             |
| [React Hook Form](https://react-hook-form.com/)   | Efficient form management             |
| [Zod](https://zod.dev/)                            | Schema validation and parsing         |
| [@hookform/resolvers](https://react-hook-form.com/get-started#SchemaValidation) | Integration of `zod` with `react-hook-form` |
| [Lucide React](https://lucide.dev/)               | For the success checkmark icon        |
| [Next Image](https://nextjs.org/docs/api-reference/next/image) | Optimized image rendering             |

### What I learned

I learnt how to use the useForm hook from react hook form and to manage form input fields and handle form submit. I also learnt how to validate form fields by using zod with ths useForm hook, with the help of zod reslover. I learnt that this is a better way of doing things than just declaring several useState Hooks and having an onChange event in each field

### Continued development

Building this project gave me a solid chance to work hands-on with form validation and dynamic UIs. But there are still a few things I’d like to revisit or expand on:

- I’d like to **add auto-formatting to the card number field** — so users don’t have to manually add spaces while typing.
- I might also experiment with **adding animations** — for example, flipping the card visually when the user is entering their CVV.
- Eventually, I’d like to **connect the form to a real payment API like Stripe** (just as a learning exercise, not for actual transactions).

Overall, this was a fun and rewarding challenge. I’m proud of the progress so far, but there’s still more I’d like to improve.

## Author

- Website - [Portfolio](https://mavic-portfolio.vercel.app/)
- Frontend Mentor - [@mavic01](https://www.frontendmentor.io/profile/mavic01)
- Twitter - [@IberiV](https://x.com/IberiV)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

I’m grateful to my mentor and boss, Mr. Oluwasetemi Ojo, for his clear teaching, patient guidance, and constant encouragement throughout my learning journey. His support has made a meaningful difference.

