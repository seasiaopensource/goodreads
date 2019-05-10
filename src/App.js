import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Routes from './routes';
import NetworkService from './utils/network-service';
import { store } from './stores/main';
import './App.css';
import './css/book.css';


NetworkService.setupInterceptors(store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
