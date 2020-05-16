import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTheme } from '@/store/selectors';
import * as S from './styles';
import themes from '@/styles/theme';

function Item(props) {
  const { isActive, onClick, label, color } = props;

  return (
    <S.Item isActive={isActive} onClick={onClick} title={label}>
      <span style={{ backgroundColor: color }} />
    </S.Item>
  );
}

function ThemePicker() {
  const currentTheme = useSelector(selectCurrentTheme());
  const dispatch = useDispatch();

  return (
    <S.Context>
      <S.Flex>
        {Object.keys(themes).map(theme => (
          <Item
            key={theme}
            label={theme}
            color={themes[theme].bgVariant}
            isActive={theme === currentTheme}
            onClick={() => dispatch({ type: 'set_theme', theme })}
          />
        ))}
      </S.Flex>
    </S.Context>
  );
}

export default ThemePicker;
