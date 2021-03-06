import styled from 'styled-components';

export const Context = styled.div<any>`
  display: inline-block;
  position: relative;

  &:before {
    content: '';
    background-color: ${props => props.theme.bgVariant};
    position: absolute;
    top: -7px;
    bottom: -7px;
    left: -7px;
    right: -7px;
    border-radius: 5px;
  }

  ${props => props.isTransparent && `
    &:before {
      background-color: transparent;
    }
  `}
`;

export const Img = styled.img`
  filter: ${props => props.theme.iconFilter};
`;
