import ButtonBlack from './components/Buttons/ButtonBlack';
import React from 'react';
import {View, Text, useColorScheme} from 'react-native';
import {lightTheme, darkTheme} from './theme';
import {ThemeProvider} from 'styled-components';
import ButtonGrey from './components/Buttons/ButtonGrey';
import ButtonWhite from './components/Buttons/ButtonWhite';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <ButtonBlack title="Let's get started" />
        <ButtonGrey title="Let's get started" />
        <ButtonWhite title="Let's get started" />
      </ThemeProvider>
    </View>
  );
};

export default App;
