# Rent My Stuff

## Project Description

Rent My Stuff is a multi-page e-commerce application that allows users to rent other users items.

The way the app works is for a user to log in to an existing one, and browse the availble items for rent. When a prospective renter finds the item that they want, they can place a bid on that item as a request to rent it. The owner of the item will then go to their 'mystuff' page where the item that they own will have a button option called _item bids_. This _item bids_ button will allow them to see multiple people who want to rent their item based on the schedule and bid price they are willing to pay. The owner can either _Accept_ and _Reject_ that renter for that specific item which based on the renters 'trustworthiness' and/or the bid price they placed.

The other functionality of our app also allows the owner to leave a review for the renter that they rented out the item too after the item is rented back to the owner and similarly a renter can leave a review for that specific item that they rented out from the owner.

### Goals and Milestones for the project

- Making the app respond to real-time events by implementing web-sockets.

- Have a scannable QR code system for when the renter will puck up and drop of the item from the owner. This is to confirm that the renter got the item from the owner, and the renter returned the item back to the owner.

- Add a chat feature so that there is a way for the owner and the renter to communicate.

- Implement a payment method system such as Stripe in the app.

### Project members

The members who did this project are [Robert Servado](https://github.com/ArjayS) and [Roberto Cervantes Betancourt](https://github.com/robertocervantesbetancourt)

## Project Conception

We did our Project Planning using Miro, [RentMyStuff](https://miro.com/app/board/uXjVPekaWGA=/?share_link_id=417791244789)

## Setup Instruction

Install dependencies with,

```sh
npm install
```

After installing the dependencies run `npm start` to start the RentMyStuff Client File.

### Dependencies

```js
  "dependencies": {
    "@headlessui/react": "^1.7.4",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.2.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.7.1",
    "react-rating-stars-component": "^2.2.0",
    "react-router-dom": "^6.4.3",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
```

```js
  "devDependencies": {
    "autoprefixer": "^10.4.13",
    "postcss": "^8.4.19",
    "tailwindcss": "^3.2.4"
  }
```

### Rent My Stuff API

Go to the [Rent MY Stuff API](https://github.com/ArjayS/rent_my_stuff_api) and follow the instruction on setting up both the installation of the dependencies and preparing the database and then hit `npm start` to run the Rent My Stuff API.

## Rent My Stuff GIF Functionality

#### Unauthenticated User Browsing the Site and Logging In as a Renter

![Unauthenticated User Browsing the Site and Logging In as a Renter](https://github.com/ArjayS/rent_my_stuff/blob/main/src/gif/GIF%201.%20Unauthenticated%20User%20signing%20in.gif)

#### Authenticated User Searching for an item and placing a bid as a Renter

![Authenticated User Searching for an item and placing a bid as a Renter](https://github.com/ArjayS/rent_my_stuff/blob/main/src/gif/GIF%202.%20Authenticated%20User%20searching%20an%20item%20and%20placing%20a%20bid.gif)

#### Authenticated User (Owner) Accepting a Bid made by a Renter

![Authenticated User (Owner) Accepting a Bid made by a Renter](https://github.com/ArjayS/rent_my_stuff/blob/main/src/gif/GIF_3.%20Authenticated%20Owner%20Accepting%20a%20Bid%20by%20a%20Renter.gif)

#### Authenticated User (Owner) Placing a Review to the Renter

![Authenticated User (Owner) Placing a Review to the Renter](https://github.com/ArjayS/rent_my_stuff/blob/main/src/gif/GIF%204.%20Owner%20Leaving%20a%20comment%20to%20a%20renter.gif)

#### Authenticated User (Renter) Checking a Review made by an Owner of an item they rented

![Authenticated User (Renter) Checking a Review made by an Owner of an item they rented](https://github.com/ArjayS/rent_my_stuff/blob/main/src/gif/GIF%205.%20Renter%20checking%20a%20review%20made%20by%20an%20owner.gif)

#### Authenticated User Placing an Item Review on an Item as a Renter

![Authenticated User Placing an Item Review on an Item as a Renter](https://github.com/ArjayS/rent_my_stuff/blob/main/src/gif/GIF%206.%20Renter%20making%20an%20item%20review.gif)

#### Authenticated User Adding an Item for rent

![Authenticated User Adding an Item for rent](https://github.com/ArjayS/rent_my_stuff/blob/main/src/gif/GIF%207.%20Authenticated%20User%20Adding%20an%20item.gif)
