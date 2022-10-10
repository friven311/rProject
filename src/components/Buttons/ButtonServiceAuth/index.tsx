import React from 'react';

import AppleIcon from 'assets/icons/AppleIcon';
import GoogleIcon from 'assets/icons/GoogleIcon';
import * as S from './styled';

interface Props {
  authenticationType: string;
  onPress: () => void;
  text: string;
}

const ButtonServiceAuth = ({onPress, authenticationType, text}: Props) => (
  <S.Touch onPress={onPress}>
    {authenticationType === 'Apple' ? <AppleIcon /> : <GoogleIcon />}
    <S.Text>{text}</S.Text>
  </S.Touch>
);

export default ButtonServiceAuth;
