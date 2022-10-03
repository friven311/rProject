import styled from 'styled-components/native';

export const Text = styled.Text`
  margin-right: 20px;
  color: ${({theme: {colors}}) => colors.primaryblack};
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
`;

export const Touch = styled.TouchableOpacity`
  justify-content: space-evenly;
  width: 48px;
  flex-direction: row;
  flex-basis: auto;
  flex-grow: 1;
  background: ${({theme: {colors}}) => colors.lightgrey};
  border-radius: 8px;
  padding: 10px;
  margin: 0 20px;
  align-items: center;
`;
export const ImageIcon = styled.Image`
  width: 20px;
  height: 20px;
`;
