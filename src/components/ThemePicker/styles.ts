import styled from 'styled-components';
import { positionCover } from '@/styles/mixins';

export const Context = styled.div``;

export const Flex = styled.div`
  display: flex;
`;

export const Item = styled.a<any>`
  cursor: pointer;
  display: inline-block;
  position: relative;
  margin-left: 10px;
  width: 20px;
  height: 20px;

  &:before {
    content: '';
    transition: opacity 0.1s ease-in-out;
    background-color: ${props => props.theme.default};
    ${positionCover('-2px')};
    border-radius: 50%;
    z-index: -1;
    opacity: 0;
  }

  > span {
    ${positionCover()};
    border-radius: 50%;
  }

  ${props => props.isActive && `
    &:before {
      opacity: 0.5;
    }
  `}
`;
