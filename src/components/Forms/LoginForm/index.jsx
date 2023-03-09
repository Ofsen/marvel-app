import axios from 'axios';
import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import {Button} from '../../Button';
import TextField from '../TextField';
import {useNavigation, Link} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGIN_API} from '../../../config/defaultValues';

const FormContainer = styled.View`
  width: 70%;
  margin-top: 16px;
  gap: 16px;
  color: white;
`;

const WhiteText = styled.Text`
  color: white;
  text-align: center;
`;

const LoginForm = () => {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    if (username.length < 3 || password.length < 8) {
      return alert('Invalid username or password');
    }
    axios
      .post(LOGIN_API, {
        username,
        password,
      })
      .then(res => {
        if (
          res.data.details === 'user connected' &&
          res.headers['x-access-token']
        ) {
          AsyncStorage.setItem('token', res.headers['x-access-token'])
            .then(() => {
              navigation.navigate('Characters');
            })
            .catch(err => alert(err));
        }
      })
      .catch(err => {
        alert(JSON.stringify(err));
      });
  };

  return (
    <FormContainer>
      <TextField
        label="Username"
        placeholder="tony@stark.com"
        keyboardType="email-address"
        change={setUsername}
        value={username}
      />
      <TextField
        label="Password"
        placeholder="tony@stark.com"
        type="password"
        change={setPassword}
        value={password}
      />
      <View style={{marginTop: 12}}>
        <Button label="Log in" pressHandler={handleLogin} />
      </View>
      <WhiteText>
        Not signed up yet ?{' '}
        <Link
          style={{textDecorationLine: 'underline', color: '#0e4faf'}}
          to={'/Signin'}>
          sign in
        </Link>
      </WhiteText>
    </FormContainer>
  );
};

export default LoginForm;
