import React, { Component } from 'react';
import { Root, Tabs } from './config/router';
import { createAppContainer } from 'react-navigation';

const AppContainer = createAppContainer(Root);

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
