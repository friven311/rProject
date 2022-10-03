import React from 'react';
import {View, useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components';
import ButtonBlack from './components/Buttons/ButtonBlack';
import {lightTheme, darkTheme} from './theme';
import ButtonGrey from './components/Buttons/ButtonGrey';
import ButtonWhite from './components/Buttons/ButtonWhite';
import ButtonServiceAuth from './components/Buttons/ButtonServiceAuth';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <ButtonBlack title="Let's get started" />
        <ButtonGrey title="Let's get started" />
        <ButtonWhite title="Let's get started" />
        <View style={{flexDirection: 'row'}}>
          <ButtonServiceAuth flag="Apple" />
          <ButtonServiceAuth flag="Google" />
        </View>
      </ThemeProvider>
    </View>
  );
};

export default App;
