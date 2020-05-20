import styled from 'styled-components';
import { noSelect } from '@/styles/mixins';
import { zNav } from '@/styles/vars';

export const Movable = styled.nav<any>`
  transition: transform 0.1s ease-out;
  transform: translateX(-100%);
  background-color: ${props => props.theme.bgVariant};
  position: fixed;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  width: 240px;
  left: 0;
  top: 0;
  padding: 80px 20px;
  z-index: ${zNav};

  > ul {
    width: 100%;
  }
`;

export const Trigger = styled.a`
  cursor: pointer;
  display: inline-block;
  position: fixed;
  width: 32px;
  height: 32px;
  top: 20px;
  left: 20px;
  z-index: ${zNav + 1};
  ${noSelect};

  &:before {
    content: '';
    position: absolute;
    left: -15px;
    right: -15px;
    top: -15px;
    bottom: -15px;
  }

  > span {
    transition: all 0.1s ease-in-out;
    transform-origin: 50% 50%;
    background-color: ${props => props.theme.default};
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;

    &:nth-child(1) {
      top: 0;
    }

    &:nth-child(2) {
      top: 9px;
    }

    &:nth-child(3) {
      top: 18px;
    }
  }

  &:hover {
    > span {
      background-color: ${props => props.theme.primary};
    }
  }
`;

export const FlexAnchor = styled.div`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;

    .mt-10 {
      margin-top: 10px;
    }

    &:hover {
      background-color: ${props => props.theme.bg};
    }
  }
`;

export const Item = styled.li`
  margin-top: 0;
  margin-bottom: 0;

  & + & {
    margin-top: 30px;
  }
`;

export const Context = styled.div<any>`
  background-color: ${props => props.theme.bg};
  position: fixed;
  height: 60px;
  width: 100%;
  z-index: ${zNav};

  ${props => props.isOpen && `
    ${Movable} {
      transform: none;
    }

    ${Trigger} {
      > span {
        &:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }

        &:nth-child(2) {
          opacity: 0;
        }

        &:nth-child(3) {
          transform: translateY(-9px) rotate(-45deg);
        }
      }
    }
  `}
`;
