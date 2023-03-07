import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components';

import MarvelLogo from '../../assets/img/Marvel-Logo-2000-2012.png';

export const Logo = props => {
  const {source = MarvelLogo} = props;

  const StyledImage = styled.Image`
    height: 100px;
    aspect-ratio: 16/9;
  `;

  return <StyledImage source={source} />;
};
