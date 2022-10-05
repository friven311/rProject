import React, {useState} from 'react';

import * as S from './styled';

interface Props {
  placeholder: string;
}

const CustomInput = ({placeholder}: Props) => {
  const [text, onChangeText] = useState('');
  return (
    <S.Input
      onChangeText={onChangeText}
      value={text}
      placeholder={placeholder}
      placeholderTextColor="#808080"
    />
  );
};

export default CustomInput;
