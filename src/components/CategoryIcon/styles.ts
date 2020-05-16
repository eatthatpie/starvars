import styled from 'styled-components';

export const Context = styled.div`
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
`;

export const Img = styled.img`
  filter: ${props => props.theme.iconFilter};
`;
