# Book a Chef

It’s always nice to have a homecooked meal that is authentic and made in your own kitchen! This is a marketplace where you can book a chef in your area based on cuisine type and availability! Users will use this either for big events they host or small intimate family dinners when they want to try out a new cuisine.

## Live Site

https://chef-booking-app.herokuapp.com/login

## Tech Stack

    • MERN (MongoDB, Express, React, Node) Stack
    • Context API for state management
    • socket.io
    • Material-UI
    • Google maps API
    • Stripe payments
    • Mapbox
    • Amazon S3

## Getting started

The project is broken down into a client and server folder.

### Login

###### You can use the demo login to sign in directly

![login](https://user-images.githubusercontent.com/51274039/117385865-dc19f600-aeb3-11eb-9634-77b3b37a70f3.gif)

### Search By Recipes

![search-recipe](https://user-images.githubusercontent.com/51274039/117389622-9f9dc880-aeba-11eb-894c-506b90430aee.gif)

### Search By Chefs

![search-chef](https://user-images.githubusercontent.com/51274039/117390009-60bc4280-aebb-11eb-81c4-1be0f271dd19.gif)

### Contact Chef

![contact-chef (1)](https://user-images.githubusercontent.com/51274039/117391273-9bbf7580-aebd-11eb-8afb-c6694b2ff9d6.gif)

### Add Recipe To Cart

![add-to-cart (1)](https://user-images.githubusercontent.com/51274039/117390410-1ab3ae80-aebc-11eb-83bf-e901d56a6b9b.gif)

### Pick Date & Time

![pick-date-time](https://user-images.githubusercontent.com/51274039/117390648-8d248e80-aebc-11eb-81cc-3093c64934fd.gif)

### Make Payment and Book Chef

![final-payment (1)](https://user-images.githubusercontent.com/51274039/117391015-2653a500-aebd-11eb-8b53-26e8c3bd9d46.gif)

## Requirements

### MongoDB

The project uses MongoDB as a database. Please follow this [installation guide](https://docs.mongodb.com/manual/installation/) in how to install and start your local database server.

### Root .env configurations

    • GOOGLE_MAPS_API_KEY= {`Your Google Map API Key`}
    • AWS_ID={`Your AWS ID`}
    • AWS_SECRET={`Your AWS Secret`}
    • AWS_BUCKET_NAME={`Your AWS S3 Bucket`}
    • MONGODB_URI={`Your MongoDB Connection URI`}
    • JWT_SECRET={`JWT Secret`}
    • STRIPE_SECRET={`Stripe Secret`}

### Client .env config

    • REACT_APP_MAPBOX_TOKEN ={`Mapbox Token`}
    • REACT_APP_STRIPE_PUBLIC_KEY={`Stripe Public Key`}

## Install

`$ git clone https://github.com/Vaibhav-Kambli/team-manta-ray.git`

## Start Backend Server

`$ cd team-manta-ray`
`$ npm install`
`$ npm run dev`

## Start Client server

`$ cd team-manta-ray/client`
`$ npm install`
`$ npm start`
