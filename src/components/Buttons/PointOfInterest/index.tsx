import React, {useState} from 'react';
import {Image} from 'react-native';

import cycling from '../../../../assets/images/pointsOfInterests/camping.png';

import * as S from './styled';

interface Props {
  text: string;
  pressed: boolean;
  onPress: () => void;
}

const PointOfInterest = ({text, onPress}: Props) => {
  const [press, setPress] = useState(false);
  const onPresse = () => {
    setPress(!press);
  };
  return (
    <S.Touch onPress={onPresse} pressed={press} activeOpacity={1}>
      <S.InterestIcon source={cycling} />
      <S.Text pressed={press}>{text}</S.Text>
    </S.Touch>
  );
};

export default PointOfInterest;
