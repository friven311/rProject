import React from 'react';
import {View} from 'react-native';

import phone from '../../../../assets/images/ButtonIcons/ButtonWithRightIcon/phone.png';

import * as S from './styled';

interface Props {
  text: string;
  onPress: () => void;
}

const ButtonWithRightIcon = ({text, onPress}: Props) => (
  <S.Touch onPress={onPress}>
    <S.Text>{text}</S.Text>
    <S.IconSeparatorWrapper>
      <S.Separator />
      <S.ImageIcon source={phone} />
    </S.IconSeparatorWrapper>
  </S.Touch>
);

export default ButtonWithRightIcon;
