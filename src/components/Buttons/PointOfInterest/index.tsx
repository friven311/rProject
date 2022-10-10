import React, {useState} from 'react';

import CampingIcon from 'assets/icons/CampingIcon';

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
      <CampingIcon />
      <S.Text pressed={isPressed}>{text}</S.Text>
    </S.Container>
  );
};

export default PointOfInterest;
