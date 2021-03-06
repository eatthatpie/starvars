import styled from 'styled-components';
import { wrapper } from '@/styles/mixins';

export const Context = styled.div`
  ${wrapper};
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;

  @media (max-width: 768px) {
    display: block;
    padding-top: 100px;
    padding-bottom: 20px;
  }
`;
