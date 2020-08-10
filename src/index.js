import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import VideoRegistration from './pages/cadastro/Video';
import Page404 from './pages/erro';
import CategoryRegistration from './pages/cadastro/Categoria';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={VideoRegistration} />
      <Route path="/cadastro/categoria" component={CategoryRegistration} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

