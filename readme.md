# BarsShop fashion store

> eCommerce platform built with the MERN stack & Redux.

## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

## Usage

### ES Modules in Node

We us ECMAScript Modules in the backend in this project. Node is required to be v14.6+ or we will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error

You can also install and setup Babel if you would like

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 4000
MONGO_URI = mongodb_uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your_paypal_client_id
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:4000)
npm run dev

# Run backend only
npm run server

# Run frontend only
npm run client
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```



