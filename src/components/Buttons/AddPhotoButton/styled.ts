import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const heightMobileUI = Dimensions.get('window').height;
const widthMobileUI = Dimensions.get('window').width;

const responsiveWidthContainer = widthMobileUI - widthMobileUI * 0.733;
const responsiveHeightContainer = heightMobileUI - heightMobileUI * 0.815;

export const Container = styled.TouchableOpacity`
  width: ${responsiveWidthContainer}px;
  height: ${responsiveHeightContainer}px;
  justify-content: center;
  background: ${({theme: {colors}}) => colors.lightgrey};
  border: 2px dashed ${({theme: {colors}}) => colors.borderColor};
  border-radius: 10px;
  align-items: center;
`;

export const Icon = styled.Image`
  width: 24px;
  height: 24px;
`;
