import React, {useState} from 'react';

import cycling from 'assets/icons/camping.png';

import * as S from './styled';

interface Props {
  text: string;
}

const PointOfInterest = ({text}: Props) => {
  const [isPressed, setisPressed] = useState(false);
  const onPress = () => {
    setisPressed(prevState => !prevState);
  };
  return (
    <S.Container onPress={onPress} pressed={isPressed} activeOpacity={1}>
      <S.InterestIcon source={cycling} />
      <S.Text pressed={isPressed}>{text}</S.Text>
    </S.Container>
  );
};

export default PointOfInterest;
