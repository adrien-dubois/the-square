import React from 'react';
import styled from 'styled-components';

export const LogoContain = styled.span`
  position: absolute;
  font-family: var(--font-2);
  font-size: 1.2rem;
  user-select: none;
  color: var(--teal-blue);

  &:after {
    content: "";
    height: 24px;
    width: 24px;
    border: 1px var(--blanc-casse) solid;
    position: absolute;
    bottom: 2px;
    left: -19px;
    z-index: -1;
  }
`;

const Logo = () => {
  return (
  <LogoContain className='logo'>
      SQ.
  </LogoContain>
 );
};

export default Logo;
