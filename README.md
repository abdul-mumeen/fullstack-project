# Brickblock Coding Challenge - Fullstack

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
* Your API accepts a GraphQL query and returns ICO contributions
* Your React app fetches data from the API and displays it in the UI
* Your app uses redux to manage its state
* Your app is easy to install and run locally
* Code Quality - The code is clean, well-structured and easy to understand

## Bonus Round (not required but nice-to-have)
* UX - Your app is easy to use and works well
* UI - Your app looks great
* Set up a CI pipeline for enforcing code quality e.g. eslint, flow, prettier
* Dockerize the app
* Deploy the app somewhere
* Add unit tests
* Add end-to-end tests
* Surprise us

## Rules
There are not many rules, really. It's all about the result. However, here are a few clarifications:

* Feel free to use as many 3rd party libraries as you'd like.
* It’s ok and even encouraged to look for inspiration elsewhere but if you're taking the lazy way of just copy-and-pasting CodePen snippets: We’ll know.
