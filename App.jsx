import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Screens
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Signin from './src/screens/Signin';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
