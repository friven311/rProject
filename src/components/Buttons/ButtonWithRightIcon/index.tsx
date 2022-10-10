import React from 'react';

import phone from 'assets/icons/phone.png';

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
