import React, {useState} from 'react';

import Camping from 'assets/icons/Camping';

import * as S from './styled';

interface Props {
  text: string;
}

const PointOfInterest = ({text}: Props) => {
  const [isPressed, setIsPressed] = useState(false);
  const onPress = () => {
    setIsPressed(prevState => !prevState);
  };
  return (
    <S.Container onPress={onPress} pressed={isPressed} activeOpacity={1}>
      <Camping />
      <S.Text pressed={isPressed}>{text}</S.Text>
    </S.Container>
  );
};

export default PointOfInterest;
