# Getting Started with Create React App

![projectImg](https://user-images.githubusercontent.com/52724178/133043523-e3a9c40e-46ba-444a-a574-c086d80054f6.png)

This project was built using 
  - React
  - Node
  - Express
  - Docer
  - Postman
  - Github Actions CI/CD
  - Heroku deployment
  
## Brief Description

In this project I attempted to connect a react application to a node server making a request to a Whois api. I was successful in, creating a styled React frontend, node server to test with Postman, images with Docker, CI/CD pipeline, and deployment to Heroku. While I was not able to complete the full project as instructed I hope you see areas that your team can help with in my growth as a developer. 

## My Journey Creating This Project

This project was challenging and exposed areas in which I need to work in. I was not able to complete the full project as I ran into issues with Docker, CI/CD and Deployment which took a lot of my dev time. I figured that being able to create Docker images, CI/CD, and deployment were important areas for you to consider in furthering the hiring process. Those are all things I don't have a lot of experience with, but I gave it my best shot. I ran into a couple roadblocks with Docker and the API. I have never created a prod environment and deployed through that. Making sure to compile the typescript files and serve those up with the node endpoint was hard to figuring out. I'm sure it's relatively simple, but I couldn't figure that part out. Finding a good Whois API was difficult also. I couldn't find a lot of documentation and signed up to multiple sites to receive an api key to test data with. Because of this, I spent a large majority of my time getting that to work and also wasn't able to properly pass a query string from the front end to the node server. I just hard coded that in the server. Anyway, I commented out code in the frontend and backend where I was trying to make that connection so you look at my thought process there. For that reason it's just returning information for one domain name. If you run this application locally it will populate some data, but if you look on Heroku the data is empty.

## Available Scripts

From the parent directory you can run

### `docker-compose build`

This will create two images. One for the client application and one for the api-server

### `docker-compose up`

This will run `npm start` for both the frontend and backend

## Heroku

To view this app on heroku, navigate to `https://josh-docker-prod.herokuapp.com/`
- Because I am using free storage the server to run it will take roughly 30 seconds or so to start.
- I would've picked a better name but I was just playing around with creating applications and this worked so that's what it is.. ha
- The image at the top is a screenshot from the Heroku ran application

## Thank You

If you have made it this far I just want to say thank you for giving me the opportunity to go through this process with you. While submitting this I get a sense that I may not be the dev you need as I wasn't able to meet all the base requirements, but again I hope you can see past that and allow me the chance to grow as a member of your team. 
