import React from 'react';
import {View, useColorScheme} from 'react-native';

import {ThemeProvider} from 'styled-components';
import Button from './components/Buttons/Button';
import {lightTheme, darkTheme} from './theme';
import ButtonServiceAuth from './components/Buttons/ButtonServiceAuth';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const onPress = () => {
    console.log('buttonPressed');
  };
  return (
    <View>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Button title="Let's get started" color="black" onPress={onPress} />
        <Button title="Let's get started" color="grey" onPress={onPress} />
        <Button title="Let's get started" color="white" onPress={onPress} />
        <View style={{flexDirection: 'row'}}>
          <ButtonServiceAuth registrationType="Apple" />
          <ButtonServiceAuth registrationType="Google" />
        </View>
      </ThemeProvider>
    </View>
  );
};

export default App;
