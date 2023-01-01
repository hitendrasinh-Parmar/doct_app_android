import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/root.navigator';
import ThemeProvider from './src/theme/ThemeProvider';
import { navigationRef } from './src/services/RootNavigationServices';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Provider store={store}>
        <ThemeProvider>
          <RootNavigator />
        </ThemeProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
