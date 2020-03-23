# Next Cripto Quiz
Trivia app game made based on the Binance glossary API.

Tech stack: **NextJs, React, Typescript**
Styles: **Styled-JSX**
Tests: **Jest, Enzyme**

Try the live version:
https://quiz.matiasbenedetto.now.sh

## Development:
`npm run dev`

## Build:
`npm run build`

## Start compiled:
`npm run build`

`npm run start`

## Run Tests
`npm run test`

## Data flow:
In the app there are 3 react contexts (Glossary, Quiz, and User) that stores and provides data application wide.

The data from the API is requested only once. The entire glossary is stored in a React Context and provided to the app via a context Provider.
When a user selects an difficulty option to start the game, the glossary is filtered accordinly to user difficuly selection and the questions that were already answered ok.

Based on the user actions the components dispatch actions to the contexts and these are handled by reducers in a flux/redux like style.

## Screenshot

## Pending to do:
- Better test coverage
- Error boundaries
