import styled, {DefaultTheme} from 'styled-components/native';

interface Props {
  variant: string;
  theme: DefaultTheme;
  disabled: boolean;
}

export const Text = styled.Text`
  color: ${({variant, theme}: Props) => {
    if (variant === 'black' || variant === 'grey') return `${theme.colors.primarywhite}`;
    return `${theme.colors.primaryblack}`;
  }};
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
`;

export const Container = styled.TouchableOpacity`
  flex-basis: auto;
  flex-grow: 1;
  background: ${({variant, theme}: Props) => {
    switch (variant) {
      case 'black':
        return `${theme.colors.primaryblack}`;
      case 'lightGrey':
        return `${theme.colors.lightgrey}`;
      case 'white':
        return `${theme.colors.primarywhite}`;
      default:
        return `${theme.colors.lightgrey}`;
    }
  }};
  border-radius: 15px;
  padding: 10px;
  margin: 0 20px;
  align-items: center;
  opacity: ${({disabled}) => (disabled ? 0.3 : 1)};
`;
