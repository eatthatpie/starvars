import React from 'react';
import DetailsPeople from '@/views/DetailsPeople';
import Nav from '@/components/Nav';
import ThemePicker from '@/components/ThemePicker';
import { useSelector } from 'react-redux';
import { selectCurrentTheme } from '@/store/selectors';
import { ThemeProvider } from 'styled-components';
import * as S from './styles';
import GlobalStyle from '@/styles/globalStyle';
import theme from '@/styles/theme';

function App() {
  const currentTheme = useSelector(selectCurrentTheme());
  const currentThemeObject = theme[currentTheme];

  return (
    <ThemeProvider theme={currentThemeObject}>
      <GlobalStyle />
      <S.App>
        <Nav />
        <S.TopRight>
          <ThemePicker />
        </S.TopRight>
        <DetailsPeople />
      </S.App>
    </ThemeProvider>
  );
}

export default App;
