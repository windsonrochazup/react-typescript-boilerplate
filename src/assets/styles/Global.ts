import styled, { createGlobalStyle, css } from 'styled-components';

export const MyComponent = styled.div`
  color: ${props => props.theme.colors.main};
`;

export const MyGlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props?.theme?.colors?.main};
  }
`;

export const cssHelper = css`
  border: 1px solid ${props => props.theme.borderRadius};
`;
