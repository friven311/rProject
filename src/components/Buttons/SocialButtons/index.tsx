import React from 'react';

import instagram from 'assets/icons/instagram.png';
import vector from 'assets/icons/Vector.png';

import * as S from './styled';

interface Props {
  text: string;
  onPress: () => void;
}

const SocialButton = ({text, onPress}: Props) => (
  <S.Touch onPress={onPress}>
    <S.InterestIcon source={instagram} />
    <S.Text>{text}</S.Text>
    <S.VectorIcon source={vector} />
  </S.Touch>
);

export default SocialButton;
