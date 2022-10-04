import styled, {DefaultTheme} from 'styled-components/native';

interface Props {
  variant: string;
  theme: DefaultTheme;
  disabled?: string;
}

export const Text = styled.Text`
  color: ${({theme}: props) => `${theme.colors.primarywhite}`};
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  align-self: center;
  margin-right: 23%;
`;

export const Touch = styled.TouchableOpacity`
  flex-direction: row;
  flex-basis: auto;
  justify-content: flex-end;
  flex-grow: 1;
  background: ${({theme}: props) => `${theme.colors.primaryblack}`};
  border-radius: 20px;
  padding: 10px;
  margin: 0 20px;
`;

export const Separator = styled.View`
  width: 1px;
  height: 24px;
  background: rgb(255 255 255 / 30%);
  margin-right: 17px;
`;

export const ImageIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

export const IconSeparatorWrapper = styled.View`
  flex-direction: row;
  margin-right: 5%;
`;
