import React from 'react';
import Phone from 'assets/icons/Phone';

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
      <Phone />
    </S.IconSeparatorWrapper>
  </S.Touch>
);

export default ButtonWithRightIcon;
