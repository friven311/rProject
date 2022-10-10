import React from 'react';
import PhoneIcon from 'assets/icons/PhoneIcon';

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
      <PhoneIcon />
    </S.IconSeparatorWrapper>
  </S.Touch>
);

export default ButtonWithRightIcon;
