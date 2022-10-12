import React from 'react';

import Pluss from 'assets/icons/Pluss';

import * as S from './styled';

interface Props {
  onPress: () => void;
}

const AddPhotoButton = ({onPress}: Props) => (
  <S.Container onPress={onPress}>
    <Pluss />
  </S.Container>
);

export default AddPhotoButton;
