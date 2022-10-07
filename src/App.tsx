import React from 'react';
import {View, useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components';

import ButtonWithRightIcon from 'components/Buttons/ButtonWithRightIcon';
import PointOfInterest from 'components/Buttons/PointOfInterest';
import SocialButton from 'components/Buttons/SocialButtons';
import AddPhotoButton from 'components/Buttons/AddPhotoButton';
import CustomInput from 'components/TextInput/Index';
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
        {}
        <Button text="Let's get started" variant="black" onPress={onPress} disabled={false} />
        <Button text="Let's get started" variant="black" onPress={onPress} disabled />
        <Button text="Let's get started" variant="lightGrey" onPress={onPress} disabled={false} />
        <Button text="Let's get started" variant="white" onPress={onPress} disabled={false} />
        <ButtonWithRightIcon text="Message" onPress={onPress} />
        <View style={{flexDirection: 'row'}}>
          <ButtonServiceAuth text="Apple" authenticationType="Apple" onPress={onPress} />
          <ButtonServiceAuth text="Goolge" authenticationType="Google" onPress={onPress} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <PointOfInterest text="camping" />
          <PointOfInterest text="camping" />
          <PointOfInterest text="camping" />
        </View>
        <SocialButton text="Instagram" onPress={onPress} />
        <View style={{flexDirection: 'row'}}>
          <AddPhotoButton onPress={onPress} />
          <AddPhotoButton onPress={onPress} />
          <AddPhotoButton onPress={onPress} />
        </View>
        <CustomInput placeholder="Email or phone" />
      </ThemeProvider>
    </View>
  );
};

export default App;
