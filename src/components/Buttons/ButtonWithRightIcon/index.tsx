import React from 'react';

import * as S from './styled';

interface Props {
  text: string;
  variant: string;
  disabled: boolean;
  onPress: () => void;
}

const ButtonWithRightIcon = ({text, variant, onPress, disabled}: Props) => (
  <S.Touch onPress={onPress} variant={variant} disabled={disabled}>
    <S.Text variant={variant}>{text}</S.Text>
  </S.Touch>
);

export default ButtonWithRightIcon;
