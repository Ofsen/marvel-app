import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../../components/Button';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>The Marvel App</Text>
      <Button
        label="Log in"
        pressHandler={() => navigation.navigate('Login')}
      />
      <Button
        label="Sign in"
        pressHandler={() => navigation.navigate('Signin')}
      />
    </View>
  );
};

export default Home;
