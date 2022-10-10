import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

const Facebook = () => (
  <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Rect x={10} y={10} width={21.25} height={20} fill="#3360FF" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 6.25C0 2.79822 2.79822 0 6.25 0H33.75C37.2018 0 40 2.79822 40 6.25V33.75C40 37.2018 37.2018 40 33.75 40H6.25C2.79822 40 0 37.2018 0 33.75V6.25ZM20 10C25.5 10 30 14.5 30 20C30 25 26.375 29.25 21.375 30V22.875H23.75L24.25 20H21.5V18.125C21.5 17.375 21.875 16.625 23.125 16.625H24.375V14.125C24.375 14.125 23.25 13.875 22.125 13.875C19.875 13.875 18.375 15.25 18.375 17.75V20H15.875V22.875H18.375V29.875C13.625 29.125 10 25 10 20C10 14.5 14.5 10 20 10Z"
      fill="white"
    />
  </Svg>
);

export default Facebook;
