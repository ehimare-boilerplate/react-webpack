import React from 'react';
import { render } from 'react-dom';

const App = () => {
    return(
        <div>
            <h1>Hello World!</h1>
            <h3>From inisde src/app.js, which is bundled to public/bundle.js</h3>
            <h3>This is just another begining</h3>
        </div>
    )
}

render(<App />, document.getElementById('root'));