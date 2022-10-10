import React from 'react';

import pluse from '../../../../assets/images/common/pluse.png';

import * as S from './styled';

interface Props {
  onPress: () => void;
}

const AddPhotoButton = ({onPress}: Props) => (
  <S.Container onPress={onPress}>
    <S.InterestIcon source={pluse} />
  </S.Container>
);

export default AddPhotoButton;
