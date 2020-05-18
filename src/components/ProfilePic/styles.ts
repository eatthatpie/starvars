import styled from 'styled-components';

export const Img = styled.div<any>`
  width: ${props => props.size + 'px'};
  height: ${props => props.size + 'px'};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: ${props => props.theme.bgVariant};
  background-size: cover;
`;

export const Context = styled.div<any>`
  ${props => props.isRounded && `
    ${Img} {
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
      border: 2px solid ${props.theme.default};
      border-radius: 50%;
    }
  `}
`;
