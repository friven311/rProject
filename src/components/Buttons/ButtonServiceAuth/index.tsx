import React from 'react';

import * as S from './styled';

import appleIcon from '../../../assets/icons/appleIcon.png';
import googleIcon from '../../../assets/icons/googleIcon.png';

type Props = {authenticationType: string; onPress: () => void; text: string};

const ButtonServiceAuth = ({onPress, authenticationType, text}: Props) => (
  <S.Touch onPress={onPress}>
    {authenticationType === 'Apple' ? (
      <S.ImageIcon source={appleIcon} />
    ) : (
      <S.ImageIcon source={googleIcon} />
    )}
    <S.Text>{text}</S.Text>
  </S.Touch>
);

export default ButtonServiceAuth;
