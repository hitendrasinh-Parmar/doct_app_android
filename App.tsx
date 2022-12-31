import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/root.navigator';
import ThemeProvider from './src/theme/ThemeProvider';
import { navigationRef } from './src/services/RootNavigationServices';
import { UserProvider } from './src/context/user.temp.context';
const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <UserProvider>
        <ThemeProvider>
          <RootNavigator />
        </ThemeProvider>
      </UserProvider>
    </NavigationContainer>
  );
};

export default App;
