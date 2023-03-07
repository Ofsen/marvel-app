import React from 'react';
import styled from 'styled-components';
import TextField from '../TextField';

const LoginForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const FormContainer = styled.View`
    width: 70%;
    margin-top: 16px;
    gap: 16px;
  `;

  return (
    <FormContainer>
      <TextField
        label="Email"
        placeholder="tony@stark.com"
        type="email"
        keyboardType="email-address"
        change={e => {
          e.preventDefault();
          setEmail(e.target.value);
        }}
        value={email}
      />
      <TextField
        label="Password"
        placeholder="tony@stark.com"
        type="password"
        change={e => {
          e.preventDefault();
          setPassword(e.target.value);
        }}
        value={password}
      />
    </FormContainer>
  );
};

export default LoginForm;
