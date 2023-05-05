import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import './i18n';
import { RootStoreModel, StoreProvider } from './models';
import AppStack from './navigators/app-navigator';

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
