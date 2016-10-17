import React from 'react';
import {Route} from 'react-router';

import About from './components/about_me'
import Contact from './components/contact'
import Algorithms from './components/algorithms'
import Reviews from './components/reviews'
import NoMatch from './components/no_match'
import App from './App'

export default (
    <Route path="/" component={App}>
        <Route path="about-me" component={About}/>
        <Route path="euler" component={Algorithms}/>
        <Route path="contact" component={Contact}/>
        <Route path="reviews" component={Reviews}/>
        <Route path="*" component={NoMatch}/>
    </Route>
)
