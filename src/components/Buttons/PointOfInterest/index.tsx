import React, {useState} from 'react';

import cycling from '../../../../assets/images/pointsOfInterests/camping.png';

import * as S from './styled';

interface Props {
  text: string;
}

const PointOfInterest = ({text}: Props) => {
  const [press, setPress] = useState(false);
  const onPress = () => {
    setPress(prevState => !prevState);
  };
  return (
    <S.Touch onPress={onPress} pressed={press} activeOpacity={1}>
      <S.InterestIcon source={cycling} />
      <S.Text pressed={press}>{text}</S.Text>
    </S.Touch>
  );
};

export default PointOfInterest;
