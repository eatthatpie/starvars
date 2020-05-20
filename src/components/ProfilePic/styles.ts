import styled from 'styled-components';

const Circle = props => `
  width: ${props.size + 'px'};
  height: ${props.size + 'px'};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: ${props.theme.bgVariant};
  background-size: cover;
`;

export const Img = styled.div<any>`
  ${Circle};
  opacity: 0;
`;

export const Loader = styled.div<any>`
  ${Circle};
  position: absolute;
  border: 2px solid transparent;
  border-radius: 50%;
  animation: loading 1s 0s linear infinite;

  @keyframes loading {
    0%, 100% {
      background-color: ${props => props.theme.bgVariant};
    }

    50% {
      background-color: transparent;
    }
  }
`;

export const Context = styled.div<any>`
  ${props => props.isRounded && `
    ${Img} {
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
      border: 2px solid ${props.theme.default};
      border-radius: 50%;
    }
  `}

  ${props => props.isLoaded && `
    ${Img} {
      animation: none;
    }
  `}

  ${props => props.isLoaded && props.isReady && `
    ${Img} {
      transition: opacity 0.3s ease-in-out;
      opacity: 1;
    }
  `}
`;
