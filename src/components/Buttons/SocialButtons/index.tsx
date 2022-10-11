/* eslint-disable react/react-in-jsx-scope */
import Instagram from 'assets/icons/Instagram';
import Vector from 'assets/icons/Vector';

import * as S from './styled';

interface Props {
  text: string;
  onPress: () => void;
}

const SocialButton = ({text, onPress}: Props) => (
  <S.Touch onPress={onPress}>
    <Instagram />
    <S.Text>{text}</S.Text>
    <Vector />
  </S.Touch>
);

export default SocialButton;
