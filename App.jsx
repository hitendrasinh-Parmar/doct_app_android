import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/root.navigator'
const App = () => {

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
