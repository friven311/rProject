import styled from 'styled-components/native';

export const Input = styled.TextInput`
  margin: 0 20px;
  padding-left: 16px;
  background: ${({theme: {colors}}) => colors.lightgrey};
  border-radius: 10px;
`;
