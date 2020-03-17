import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';


function App () {

    return (
        <Card img={'https://images-na.ssl-images-amazon.com/images/I/81GhJuX-uRL._SY355_.png'}
            string={'Lovely'}></Card>
    )

}

ReactDOM.render(<App />, document.getElementById('root'));