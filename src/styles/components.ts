import styled from 'styled-components';

export const Link = styled.div`
  display: inline-block;
  margin-bottom: 10px;

  & + & {
    margin-left: 10px;
  }

  a {
    transition: all 0.1s ease-in-out;
    cursor: pointer;
    border-bottom: 1px dashed ${props => props.theme.default};

    &:hover {
      color: ${props => props.theme.primary};
      border-color: ${props => props.theme.primary};
    }
  }
`;

export const Space = styled.div`
  display: block;
  height: 50px;
`;
