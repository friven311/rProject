import styled, {DefaultTheme} from 'styled-components/native';

type props = {
  theme: DefaultTheme;
  disabled?: string;
  pressed?: boolean;
};

export const Text = styled.Text`
  color: ${({theme, pressed}: props) => {
    if (pressed) {
      return `${theme.colors.primarywhite}`;
    }
    return `${theme.colors.primaryblack}`;
  }};
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  margin-right: 10px;
`;

export const Touch = styled.TouchableOpacity`
  flex-direction: row;
  background: ${({theme, pressed}: props) => {
    if (pressed) {
      return `${theme.colors.primaryblack}`;
    }

    return `${theme.colors.lightgrey}`;
  }};
  border-radius: 50px;
  padding: 10px;
  align-items: center;
`;

export const InterestIcon = styled.Image`
  width: 24px;
  height: 24px;
  margin: 0 10px;
`;
