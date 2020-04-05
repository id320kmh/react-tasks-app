import React from 'react';
import {render} from 'react-dom';
import App from './App';
import './index.css';
import {compose, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import {rootReducer} from './reducers/rootReducer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { save } from 'redux-localstorage-simple';

import Home from './components/home/Home';
// import Contacts from './components/contacts/Contacts';
// import Posts from './components/posts/Posts';

const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(
      thunk,  
      save({ namespace: 'tasks' })
      ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          {/* <Route path='/contacts' component={Contacts}></Route>
          <Route path='/posts' component={Posts}></Route> */}
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>
)

render(
  app,
  document.getElementById('root')
);

serviceWorker.unregister(); 