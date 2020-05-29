# This is a small POC regarding React context.
 
## Goals
- Strong type contexts.
- ES6 source.
- Isolate context initialization and state management from context's owner.
- Provide state and handler functions to context's consumers in a centralized way.
- Multi-instances support.
 
## Contexts models
 
Context providers and states are implemented as separated modules conforming to its contracts.
There are two models:
 
* Open state with actions
 
This model is implemented as CountContext. The state is exposed so components and internal state are couples
 
* Opaque state with selectors and actions
 
This model is implemented as ChronoContext. The controller access the state by selectors so the external representation is decoupled from the internal state structure
 
Selectors are updated on every state change but actions functions are stables
 
 
 
## Available Scripts
 
In the project directory, you can run:
 
### `npm start`
 
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
 
The page will reload if you make edits.<br />
You will also see any lint errors in the console.
 
 
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
 
## Learn More
 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
 
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
 
To learn React, check out the [React documentation](https://reactjs.org/).
 
