import './app/i18n';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './app/navigators/app-navigator';
import { StoreProvider, RootStoreModel } from './app/models';

const App = () => {
  return (
    <StoreProvider value={RootStoreModel}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
