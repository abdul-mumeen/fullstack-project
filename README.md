# Brickblock Coding Challenge - Fullstack

## Summary

This is a simple app that uses a Node GraphQL backend and a React/Typescript frontend.

## Backend

The backend is a single GraphQL endpoint which returns a list of ICO contributions from different users. The backend uses an apollo-server as it is straight forward to implement and has proper documentation.

## Frontend

This is a react based app that uses apollo-client to get data from the endpoint and redux to manage the state of the app. This displays three charts that analysis the total contributions of each currency per users (per address), the total currencies per type, and the total currency contributed by each user.

Two types of filtering are implemented; filtering by currency and filtering by value.

MaterialUI and SASS are used for styling and Rechart is the choice of chart rendering tool use which is due to the varieties of chart it provides and a proper documentation with examples.

## Running the app

The app has been dockerized to make distribution easy and avoid dependencies issue. You can run the app by following the steps below

1. start by cloning the app;

RUN `git clone git@github.com:abdul-mumeen/fullstack-project.git` using SSH
RUN `git clone https://github.com/abdul-mumeen/fullstack-project.git` using HTTPS

2. Move into project root folder

RUN `cd fullstack-project`

3. Install a single dependecy which is docker. You will need docker to run the app without so much hassle so you can find the instruction on how to install it [here](https://docs.docker.com/v17.09/engine/installation/)

4. Start the app

RUN `docker-compose up`

5. Go to `localhost:3000/` to access the app.

### Running the app without docker

1. Perform step 1 and 2 above.

2. Open the server root directory `cd server` and RUN `npm start`
3. Open the frontend root directory in a different terminal and RUN `npm start`
4. Go to `localhost:3000/` to access the app.

## What is not included

The following are missing from the app due to time constraints;

1. Testing
2. Deployment

## The Goal

Your task is to build a NodeJS/GraphQL API that returns a list of ICO contributions and a React app that visualizes this data in a meaningful way.

## The Process

1. Create a new repo wherever you like. Can be GitHub/GitLab/Bitbucket, doesn't matter.
2. In your repo, build a NodeJS API with a single GraphQL endpoint that returns a list of ICO contributions.
3. In the same repo, build a small React app that consumes the API and visualizes the data. There's not 1 right solution, but a few example features could be:
   1. Use charts to visualize the data
   2. Filter contributions by currency type
   3. Filter contributions by amount
4. Create a README.md explaining how to test the features you have built. Feel free to add additional thoughts, e.g. why you chose certain libraries or why you implemented a feature in a certain way etc.
5. Send us an email to dev@brickblock.io when you're ready to have it reviewed

## Additional Information

ICO contributions have the following structure:

```
{
    "address": "183nLVZFt3W6G79o5Yx8bTiEBsjER9eMVZ", // An Ethereum, Bitcoin or Litecoin address that contributed to our ICO
    "currency": "BTC", // Can be "ETH", "BTC" or "LTC"
    "value": 504114, // The contributed amount in the smallest possible unit (e.g. "wei" for Ethereum contributions, or "satoshi" for Bitcoin contributions
    "txid": "f6b48e20e78ed5800ca07ea2a782a14227fee043de86f88eaaebcd88d34c9650" // The transaction ID of this contribution
}
```

## Acceptance Criteria

- Your API accepts a GraphQL query and returns ICO contributions
- Your React app fetches data from the API and displays it in the UI
- Your app uses redux to manage its state
- Your app is easy to install and run locally
- Code Quality - The code is clean, well-structured and easy to understand

## Bonus Round (not required but nice-to-have)

- UX - Your app is easy to use and works well
- UI - Your app looks great
- Set up a CI pipeline for enforcing code quality e.g. eslint, flow, prettier
- Dockerize the app
- Deploy the app somewhere
- Add unit tests
- Add end-to-end tests
- Surprise us

## Rules

There are not many rules, really. It's all about the result. However, here are a few clarifications:

- Feel free to use as many 3rd party libraries as you'd like.
- It’s ok and even encouraged to look for inspiration elsewhere but if you're taking the lazy way of just copy-and-pasting CodePen snippets: We’ll know.
