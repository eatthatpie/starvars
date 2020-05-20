import styled from 'styled-components';
import { Img } from '@/components/ProfilePic/styles';
import { Context as CategoryIcon } from '@/components/CategoryIcon/styles';

export const Context = styled.div<any>`
  ${props => props.isLoading && `
    header {
      position: relative;

      &:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 20px;
        bottom: 20px;
        animation: loading 1s 0s linear infinite;
      }
    }

    ${CategoryIcon} {
      display: none;
    }

    ${Img} {
      animation: loading 1s 0s linear infinite;
      box-shadow: none;
      border: 0;
    }
  `}

  @keyframes loading {
    0%, 100% {
      background-color: ${props => props.theme.bgVariant};
    }

    50% {
      background-color: transparent;
    }
  }
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
