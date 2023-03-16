import React, { FC } from 'react';
import styled, { StyledComponent } from 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components';

interface WrapperProps {
  style: FlattenSimpleInterpolation;
  children: React.ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children, style }) => {
  const StyledWrapper: StyledComponent<'div', any> = styled.div`
    ${style}
  `;

  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;