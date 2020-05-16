import styled from 'styled-components';

export const Context = styled.div`
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

export const Item = styled.div`
  background-color: ${props => props.theme.bgVariant};
`;
