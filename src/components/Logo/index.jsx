import React from 'react';
import styled from 'styled-components';

import MarvelLogo from '../../assets/img/Marvel-Logo-2000-2012.png';

const StyledImage = styled.Image`
  height: 100px;
  aspect-ratio: 16/9;
`;

export const Logo = props => {
  const {source = MarvelLogo} = props;

  return <StyledImage source={source} />;
};
