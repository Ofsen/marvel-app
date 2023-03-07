import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';

const TextField = props => {
  const {label, placeholder, value, type, change, keyboardType} = props;

  const FieldContainer = styled.View`
    gap: 4px;
  `;

  const Label = styled.Text`
    color: white;
  `;

  const Input = styled.TextInput`
    border: 2px solid white;
    color: #beced8;
    padding: 8px 16px;
  `;

  return (
    <FieldContainer>
      <Label>{label}</Label>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={change}
        keyboardType={keyboardType}
        secureTextEntry={type === 'password'}
      />
    </FieldContainer>
  );
};

export default TextField;
