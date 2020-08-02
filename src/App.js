/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Nav from './navigation';
import { StatusBar } from './components';

const App = () => (
  <Provider store={store}>
    <StatusBar />
    <Nav />
  </Provider>
)

export default App;
