/**
 * ToDoApp use Redux and Native Base
 * https://github.com/facebook/react-native
 * Coder: MTAZero - Bui Xuan Thuy
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Tasks from './Data/ListTask.js';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './Reducers';

import MainComponent from './Containers';

const store = createStore(allReducers);

const App = () => (
    <Provider store = {store}>
        <MainComponent/>
    </Provider>
);

export default App;
