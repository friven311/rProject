import React from 'react';
import {Image} from 'react-native';

import instagram from '../../../../assets/images/social/instagram.png';
import vector from '../../../../assets/images/common/Vector.png';

import * as S from './styled';

interface Props {
  text: string;
  onPress: () => void;
}

const SocialButton = ({text, onPress}: Props) => (
  <S.Touch onPress={onPress}>
    <S.InterestIcon source={instagram} />
    <S.Text>{text}</S.Text>
    <Image source={vector} style={{width: 5, height: 10}} />
  </S.Touch>
);

export default SocialButton;
