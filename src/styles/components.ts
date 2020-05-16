import styled from 'styled-components';

export const Link = styled.a`
  cursor: pointer;
  border-bottom: 1px dashed ${props => props.theme.default};

  & + & {
    margin-left: 10px;
  }
`;

export const Space = styled.div`
  display: block;
  height: 50px;
`;
