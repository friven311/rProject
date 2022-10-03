import React from 'react';

import * as S from './styled';

interface ImageObjectProps {
  appleIcon: string;
  googleIcon: string;
}

type Prop = {registrationType: string; onPress: () => void};

const imageObject: ImageObjectProps = {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, global-require
  appleIcon: require('./assets/appleIcon.png'),
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, global-require
  googleIcon: require('./assets/googleIcon.png'),
};

const ButtonServiceAuth = ({registrationType, onPress}: Prop) => {
  let title: string;
  let flexImage: string;
  if (registrationType === 'Apple') {
    title = 'Apple';
    flexImage = imageObject.appleIcon;
  } else {
    title = 'Google';
    flexImage = imageObject.googleIcon;
  }
  return (
    <S.Touch onPress={onPress}>
      <S.ImageIcon source={flexImage} />
      <S.Text>{title}</S.Text>
    </S.Touch>
  );
};

export default ButtonServiceAuth;
