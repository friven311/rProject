import styled, {DefaultTheme} from 'styled-components/native';

interface PropsText {
  variant: string;
  theme: DefaultTheme;
  disabled: boolean;
}

interface PropsContainer {
  variant: string;
  theme: DefaultTheme;
  disabled: boolean;
}

export const Text = styled.Text<PropsText>`
  color: ${({variant, theme}) => {
    switch (variant) {
      case 'black' || 'grey':
        return `${theme.colors.primarywhite}`;
      default:
        return `${theme.colors.primaryblack}`;
    }
  }};
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
`;

export const Container = styled.TouchableOpacity<PropsContainer>`
  flex-basis: auto;
  flex-grow: 1;
  background: ${({variant, theme}) => {
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
