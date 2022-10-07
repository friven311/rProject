import styled, {DefaultTheme} from 'styled-components/native';

type Props = {
  variant: string;
  theme: DefaultTheme;
  disabled?: string;
};

export const Text = styled.Text`
  color: ${({variant, theme}: props) => {
    if (variant === 'black' || variant === 'grey') return `${theme.colors.primarywhite}`;
    return `${theme.colors.primaryblack}`;
  }};
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
`;

export const Touch = styled.TouchableOpacity`
  flex-basis: auto;
  flex-grow: 1;
  background: ${({variant, theme, disabled}: props) => {
    if (disabled) {
      return `${theme.colors.primaryblackopacity}`;
    }
    if (variant === 'black') {
      return `${theme.colors.primaryblack}`;
    }
    if (variant === 'lightGrey') {
      return `${theme.colors.lightgrey}`;
    }
    if (variant === 'white') {
      return `${theme.colors.primarywhite}`;
    }

    return `${theme.colors.lightgrey}`;
  }};
  border-radius: 15px;
  padding: 10px;
  margin: 0 20px;
  align-items: center;
`;
