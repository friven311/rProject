import React from 'react';

import * as S from './styled';

interface Props {
  title: string;
  color: string;
  onPress: () => void;
}

const Button = ({title, color, onPress}: Props) => (
  <S.Touch onPress={onPress} color={color}>
    <S.Text color={color}>{title}</S.Text>
  </S.Touch>
);

export default Button;
