import React from 'react';
import Nav from '@/components/Nav';
import ThemePicker from '@/components/ThemePicker';
import { useSelector } from 'react-redux';
import { selectCurrentTheme } from '@/store/selectors';
import { ThemeProvider } from 'styled-components';
import { RouterView } from 'best-react-router';
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
        <RouterView transition={{
          duration: 0.3,
          style: {
            enterActive: {},
            enter: {
              opacity: 0
            },
            enterTo: {
              opacity: 1
            },
            leaveActive: {},
            leave: {
              opacity: 1
            },
            leaveTo: {
              opacity: 0
            }
          }
        }} />
      </S.App>
    </ThemeProvider>
  );
}

export default App;
