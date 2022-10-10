import styled from 'styled-components/native';

const Input = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor: theme.colors.primarygrey,
}))`
  margin: 0 20px;
  padding-left: 16px;
  background: ${({theme: {colors}}) => colors.lightgrey};
  border-radius: 10px;
`;

export default Input;
