import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThemeProvider} from 'styled-components';
import theme from './src/config/theme';
// Screens
import Login from './src/screens/Login';
import Signin from './src/screens/Signin';
import Characters from './src/screens/Characters';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Login"
            component={Login}
          />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Characters"
            component={Characters}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
