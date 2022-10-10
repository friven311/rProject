import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100px;
  height: 150px;
  justify-content: center;
  flex-direction: row;
  background: ${({theme: {colors}}) => colors.lightgrey};
  border: 2px dashed ${({theme: {colors}}) => colors.borderColor};
  border-radius: 10px;
  padding: 10px;
  align-items: center;
  margin: 15px;
`;

export const Icon = styled.Image`
  width: 24px;
  height: 24px;
`;
