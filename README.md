# class31-project


Bazaar  app made with React + MongoDB + Nodejs + Expressjs

## Features
* sign up an sign in
* add products
* filter or sort products by categories, price, date, state, location
* payment 
* my account page 
* add products to favourite list
## Bazzar!
![image](https://user-images.githubusercontent.com/50028862/136008155-4d2d60e8-dd95-40c6-9581-fe2cba2caab9.png)
## Add products
![image](https://user-images.githubusercontent.com/50028862/136008193-c13fb47e-8a27-4a6d-8bd9-ff894c0525cc.png)
## my account page
![image](https://user-images.githubusercontent.com/50028862/136008229-98555350-042b-46db-b5cc-629ff57ec812.png)
## filter or sort products by categories, price, date, state, location
![image](https://user-images.githubusercontent.com/50028862/136008314-a6ecc2e3-1c49-4ac8-ac89-bcaa9df943af.png)
## payment and add products to favourite list
![image](https://user-images.githubusercontent.com/50028862/136008372-e103b009-6ba1-4391-a248-d363cb88d7c3.png)
## sign up and sign in
![image](https://user-images.githubusercontent.com/50028862/136008658-6039c2ee-b5c3-4ae0-9ae4-303a5ede457e.png)
![image](https://user-images.githubusercontent.com/50028862/136008719-d69e77dd-5568-462f-8ce9-86a9f306e015.png)
![image](https://user-images.githubusercontent.com/50028862/136008745-5397ff6d-21b2-4565-ad8b-60b189e7c12f.png)


## Installation
### To run the app with Node.js and MongoDB
> This app will fetch tracks from an external api, so there is no need for a database to store tracks, but we still need one for creating user's products

Install and start MongoDB (https://docs.mongodb.org/manual/installation).

Install Node.js (http://nodejs.org). Any version above 6.0 works fine

Open .env and adjust the `MONGODB_URI` to your MongoDB server name (localhost normally works if you're running locally).

1. Run `npm install`.

2. Run `npm start` to start the frontend server

Wait for the build process to complete

3. Run `nodemon server.js` to start the api server
4. Run `nodemon seeding.js` to seed all seeding data from MongoDB

Navigate to http://localhost:3000 in your browser to explore the app


## Build the app
* Build manually
```
 $ npm start
```
Or
* Build with Docker Compose

```
$ docker-compose build
$ docker-compose up
```

After building the app, frontend and backend servers will be merged into a single server and be available at http://localhost:3000
