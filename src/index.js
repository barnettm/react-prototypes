import React from 'react';
import ReactDOM from 'react-dom';

function luckyNumber(){
    return Math.floor(Math.random()*1000)+1;
}

function Greeting(user){
    return <div class="container">
        <h1>Hello {user.name}</h1>;
        <h2 class="text-muted">Your lucky number is: {user.luckyNumber}</h2>
    </div>
}

const user = {
    name: 'Matt',
    luckyNumber: luckyNumber()
};

ReactDOM.render(
    Greeting(user),
    document.getElementById('root')
);
