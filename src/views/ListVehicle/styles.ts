import styled from 'styled-components';
import { wrapper } from '@/styles/mixins';

export const Context = styled.div<any>`
  ${wrapper};
  padding-top: 80px;
  padding-bottom: 80px;
`;

export const Caption = styled.div`
  text-align: center;
  padding: 40px 0 80px;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  text-align: center;
  font-size: 1rem;
  width: 100%;
  padding: 10px;
  border: 0;
  margin-top: 60px;
  outline: 0;

  &:hover {
    background-color: ${props => props.theme.bgVariant};
  }
`;
