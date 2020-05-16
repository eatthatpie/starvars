import styled from 'styled-components';

export const Context = styled.div`
`;

export const Grid = styled.div`
  display: grid;
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

export const Item = styled.div`
  background-color: ${props => props.theme.bg};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1em 0 0;

  &:hover {
    background-color: ${props => props.theme.bgIntense};
  }
`;
