import React from 'react';
import * as S from './styled';

const ButtonWhite = ({title}: {title: string}) => {
  const onPress = () => {
    console.log('button pressed');
  };
  return (
    <S.Touch onPress={onPress}>
      <S.Text>{title}</S.Text>
    </S.Touch>
  );
};

export default ButtonWhite;
