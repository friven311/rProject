import styled from 'styled-components/native';

export const Text = styled.Text`
  color: ${({theme: {colors}}) => colors.primaryblack};
  font-weight: 400;
  font-size: 16px;
  margin-right: 10px;
`;

export const Touch = styled.TouchableOpacity`
  justify-content: space-around;
  flex-direction: row;
  background: ${({theme: {colors}}) => colors.primarywhite};
  border-radius: 15px;
  padding: 10px;
  margin: 0 20px;
  align-items: center;
`;

export const InterestIcon = styled.Image`
  width: 40px;
  height: 40px;
  margin: 0 10px;
`;
