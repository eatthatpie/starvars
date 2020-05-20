import styled from 'styled-components';
import { positionCover } from '@/styles/mixins';
import { Img } from '@/components/ProfilePic/styles';

export const Context = styled.div<any>`
  ${props => props.isLoading && `
    ${Border} {
      display: none;
    }

    ${Item} {
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

export const Grid = styled.div`
  display: grid;
  overflow: hidden;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 50px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 425px) {
    display: block;
  }
`;

export const Border = styled.div`
  ${positionCover()};
  pointer-events: none;

  div {
    &:before,
    &:after {
      content: '';
      transition: all 0.15s ease-in-out;
      background-color: ${props => props.theme.primary};
      position: absolute;
      opacity: 0;
    }

    &:nth-child(1):before {
      transform: translateX(-50px);
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
    }

    &:nth-child(1):after {
      transition-delay: 0.06s;
      transform: translateX(50px);
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
    }

    &:nth-child(2):before {
      transition-delay: 0.09s;
      transform: translateY(50px);
      top: 0;
      bottom: 0;
      left: 0;
      width: 2px;
    }

    &:nth-child(2):after {
      transition-delay: 0.03s;
      transform: translateY(-50px);
      top: 0;
      bottom: 0;
      right: 0;
      width: 2px;
    }
  }
`;

export const Item = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 1em 0 0;

  &:hover {
    ${Border} {
      div {
        &:before,
        &:after {
          transform: none;
          opacity: 1;
        }
      }
    }
  }
`;
