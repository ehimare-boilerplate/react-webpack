import React from 'react';
import { render } from 'react-dom';


const App = () => {
    return(
        <div>
            <h1>Hello { name }!</h1>
            <h3>From inisde src/app.js, which is bundled to public/bundle.js</h3>
            <h3>{name} use this as your simple react project boilerplate. More like your own create-react-app</h3>
        </div>
    )
}

const name = "Ehimare";
const age = 2020 - 1989;

render(<App />, document.getElementById('root'));