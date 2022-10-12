import React from 'react';

import Apple from 'assets/icons/Apple';
import Google from 'assets/icons/Google';
import * as S from './styled';

interface Props {
  authenticationType: string;
  onPress: () => void;
  text: string;
}

const ButtonServiceAuth = ({onPress, authenticationType, text}: Props) => (
  <S.Touch onPress={onPress}>
    {authenticationType === 'Apple' ? <Apple /> : <Google />}
    <S.Text>{text}</S.Text>
  </S.Touch>
);

export default ButtonServiceAuth;
