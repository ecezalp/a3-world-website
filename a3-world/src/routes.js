import React from 'react';
import {Route} from 'react-router';

import About from './components/about_me'
import Contact from './components/contact'
import Algorithms from './components/algorithms'
import Reviews from './components/reviews'
import NoMatch from './components/no_match'
import Pictures from './components/pictures'
import Projects from './components/projects'
import App from './App'

export default (
    <Route path="/" component={App}>
        <Route path="about" component={About}/>
        <Route path="algorithms/:id" component={Algorithms} />
        <Route path="contact" component={Contact}/>
        <Route path="pictures" component={Pictures}/>
        <Route path="projects/:id" component={Projects}/>
        <Route path="reviews/:id" component={Reviews}/>
        <Route path="*" component={NoMatch}/>
    </Route>
)
