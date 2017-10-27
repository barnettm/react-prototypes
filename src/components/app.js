import React from 'react';
import {Route} from 'react-router-dom';
import Welcome from './welcome';
import Nav from './nav';
import Macarons from './our_macarons';
import Gifts from './gifts_parties';
import Contact from './contact';

export default () => {
    return (
        <div className="container">
            <Nav />
            <Route exact path="/" component={Welcome}/>
            <Route path="/our_macarons" component={Macarons} />
            <Route path="/gifts_parties" component={Gifts} />
            <Route path="/contact" component={Contact} />
        </div>
    )
}

