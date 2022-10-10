import styled, {DefaultTheme} from 'styled-components/native';

interface PropsText {
  theme: DefaultTheme;
  pressed: boolean;
}

interface PropsContainer {
  theme: DefaultTheme;
  pressed: boolean;
}

export const Text = styled.Text<PropsText>`
  color: ${({theme, pressed}) =>
    pressed ? `${theme.colors.primarywhite}` : `${theme.colors.primaryblack}`};
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin-right: 10px;
`;

export const Container = styled.TouchableOpacity<PropsContainer>`
  flex-direction: row;
  background: ${({theme, pressed}) =>
    pressed ? `${theme.colors.primaryblack}` : `${theme.colors.primarywhite}`};
  border-radius: 50px;
  padding: 10px;
  align-items: center;
`;

export const InterestIcon = styled.Image`
  width: 24px;
  height: 24px;
  margin: 0 10px;
`;
