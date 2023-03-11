import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styled from 'styled-components/native';
// Screens
import Login from '../screens/Login';
import Signin from '../screens/Signin';
import Characters from '../screens/Characters';
import CharacterDetail from '../screens/CharacterDetail';
import {useAuth} from '../contexts/authContext';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  const {logged} = useAuth();

  React.useEffect(() => {
    console.log(logged);
  }, [logged]);

  return (
    <GlobalSafeArea>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {logged ? (
            <>
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="Characters"
                component={Characters}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="Character"
                component={CharacterDetail}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="Login"
                component={Login}
              />
              <Stack.Screen name="Signin" component={Signin} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalSafeArea>
  );
};

const GlobalSafeArea = styled.SafeAreaView`
  flex: 1;
`;
