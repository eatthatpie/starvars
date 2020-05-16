import styled from 'styled-components';

export const Context = styled.div`
  padding: 0 0 30px;
  width: 100%;
  min-width: 320px;
`;

export const Label = styled.div`
  color: ${props => props.theme.muted};
  font-size: 0.8rem;
`;

export const Children = styled.div`
  padding: 10px 0 0;
`;
