# Tenant registration app

## Getting Started

### Installing

Install npm dependencies

```
npm install
```

Run dev server. Opens on port 3000

```
npm run start
```

## Running the tests

Unit test are covering only critical parts.
I am using Jest snapshots + Enzyme to cover unit tests.
To run tests:

```
npm run test
```

For integrations tests I am using Cypress
To run integrations tests.

```
npm run cypress
```

Note: you will need to have app running in dev mod on localhost:3000 for cypress to pick it up

### And coding style tests

I am using default create react app linter here.

## Built With

- [CRA](https://github.com/facebook/create-react-app)
- [Validate.js](https://validatejs.org/)
- [Enzyme](https://airbnb.io/enzyme/)
- [Cypress](https://docs.cypress.io/)

I have not used any UI framework or any other libs as I don't see much need in them for this task.

## Acknowledgments

- I took Home styles from main website as inspiration
- Due to it's simplicity application has only mobile and desktop version
- Styles are written in rather direct approach and can be further improved
- Registration form can be split in more components to keep it maitanable
- Test are covering happy path only
