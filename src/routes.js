import React from 'react';
import {Route,IndexRoute} from 'react-router';
import Container from './components/container.jsx';
import innerContainer from './components/UserComponent.jsx';
import VideoContainer from './components/VideoGroups.jsx';
import App from './App.jsx'


export default (
  <Route path="/" component={App}>
  //  <IndexRoute component={Container}/>
    <Route path="user" component={innerContainer}/>
    <Route path="video" component={VideoContainer}/>
  </Route>
);
