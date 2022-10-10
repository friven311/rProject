import React from 'react';

import pluse from '../../../assets/icons/pluse.png';

import * as S from './styled';

type Props = {
  onPress: () => void;
};

const AddPhotoButton = ({onPress}: Props) => (
  <S.Container onPress={onPress}>
    <S.Icon source={pluse} />
  </S.Container>
);

export default AddPhotoButton;
