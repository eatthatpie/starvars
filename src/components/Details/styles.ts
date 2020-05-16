import styled from 'styled-components';

export const Context = styled.div`
`;

export const RelativeFlex = styled.div<any>`
  position: relative;
  display: flex;
  justify-content: center;

  ${props => props.column && `
    flex-direction: column;
    align-items: center;
  `}
`;

export const BottomRight = styled.div`
  position: absolute;
  bottom: 0;
  right: calc(50% - 90px);
`;
