import React from 'react';
import ReactDOM from 'react-dom';

function luckyNumber(){
    return Math.floor(Math.random()*1000)+1
}

ReactDOM.render(
    <h1 className="container">React Prototypes!</h1>,
    document.getElementById('root')
);
