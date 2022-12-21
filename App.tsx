import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/root.navigator';
import ThemeProvider from './src/theme/ThemeProvider';
const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <RootNavigator />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
