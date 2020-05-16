import styled from 'styled-components';

export const Img = styled.div<any>`
  width: ${props => props.size + 'px'};
  height: ${props => props.size + 'px'};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Context = styled.div<any>`
  ${props => props.isRounded && `
    ${Img} {
      border-radius: 50%;
    }
  `}
`;