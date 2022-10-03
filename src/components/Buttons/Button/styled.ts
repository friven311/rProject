import styled from 'styled-components/native';

export const Text = styled.Text`
  color: ${({color, theme}) => {
    if (color === 'black' || color === 'grey') return `${theme.colors.primarywhite}`;
    return `${theme.colors.primaryblack}`;
  }};
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
`;

export const Touch = styled.TouchableOpacity`
  flex-basis: auto;
  flex-grow: 1;
  background: ${({color, theme}) => {
    if (color === 'black') return `${theme.colors.primaryblack}`;
    if (color === 'grey') return `${theme.colors.primarygrey}`;
    if (color === 'white') return `${theme.colors.primarywhite}`;
    return `${theme.colors.lightgrey}`;
  }};
  border-radius: 8px;
  padding: 10px;
  margin: 0 20px;
  align-items: center;
`;
