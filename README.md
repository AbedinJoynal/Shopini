# Shopini

This is a full stack Ecommerce web application built using the MERN stack (MongoDB, Express, React, Node.js). Users can browse products, add them to a cart, and checkout to place orders. Admin users can manage products, orders, and users.

## Features

- Browse products by category
- Add/remove products in cart
- Sort products by price, rating, etc
- Payment integration
- Order management
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- Authentication (register, login, logout)

## Usage

To get started with the Ecommerce app, follow these steps:

1. Create a `.env` file in the root directory and add the following:

```
NODE_ENV = development
PORT = 
MONGO_URI = your mongodb uri
JWT_SECRET = 
PAYPAL_CLIENT_ID = your paypal client id
```

2. Install dependencies for both frontend and backend:

```
npm install
cd frontend
npm install
```

3. Run the app:

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

4. To build and deploy the app, follow these steps:

```
# Create frontend prod build
cd frontend
npm run build
```

## License
The MIT License

Copyright (c) 2023 Abedin Joynal
```
