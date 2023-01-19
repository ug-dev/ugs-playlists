import './app/i18n';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './app/navigators/app-navigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
