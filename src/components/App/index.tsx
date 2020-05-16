import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentTheme } from '@/store/selectors';
import { ThemeProvider } from 'styled-components';
import * as S from './styles';
import theme from '@/styles/theme';

function App() {
  const currentTheme = useSelector(selectCurrentTheme());
  const currentThemeObject = theme[currentTheme];

  return (
    <ThemeProvider theme={currentThemeObject}>
      <S.App>
        Reload test.
      </S.App>
    </ThemeProvider>
  );
}

export default App;
