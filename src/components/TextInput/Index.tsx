import React, {useState} from 'react';

import Input from './styled';

interface Props {
  placeholder: string;
}

const CustomInput = ({placeholder}: Props) => {
  const [text, onChangeText] = useState('');
  return <Input onChangeText={onChangeText} value={text} placeholder={placeholder} />;
};

export default CustomInput;
