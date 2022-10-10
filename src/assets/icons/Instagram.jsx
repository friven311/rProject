import * as React from 'react';
import Svg, {Rect, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const Instagram = () => (
  <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Rect x={7.5} y={8.75} width={25} height={23.75} fill="url(#paint0_linear_745_15918)" />
    <Path
      d="M20 23.5C18.125 23.5 16.5 22 16.5 20C16.5 18.125 18 16.5 20 16.5C21.875 16.5 23.5 18 23.5 20C23.5 21.875 21.875 23.5 20 23.5Z"
      fill="white"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.25 11.5H15.75C14.75 11.625 14.25 11.75 13.875 11.875C13.375 12 13 12.25 12.625 12.625C12.3283 12.9217 12.1881 13.2185 12.0186 13.5771C11.9739 13.6717 11.9271 13.7707 11.875 13.875C11.8557 13.933 11.8333 13.994 11.8094 14.0594C11.6786 14.4167 11.5 14.9047 11.5 15.75V24.25C11.625 25.25 11.75 25.75 11.875 26.125C12 26.625 12.25 27 12.625 27.375C12.9217 27.6717 13.2185 27.8119 13.5771 27.9814C13.6717 28.0261 13.7706 28.0728 13.875 28.125C13.933 28.1443 13.994 28.1667 14.0594 28.1906C14.4167 28.3214 14.9047 28.5 15.75 28.5H24.25C25.25 28.375 25.75 28.25 26.125 28.125C26.625 28 27 27.75 27.375 27.375C27.6717 27.0783 27.8119 26.7815 27.9814 26.4229C28.0261 26.3283 28.0728 26.2293 28.125 26.125C28.1443 26.067 28.1667 26.006 28.1906 25.9406C28.3214 25.5833 28.5 25.0953 28.5 24.25V15.75C28.375 14.75 28.25 14.25 28.125 13.875C28 13.375 27.75 13 27.375 12.625C27.0783 12.3283 26.7815 12.1881 26.4229 12.0186C26.3284 11.974 26.2292 11.9271 26.125 11.875C26.067 11.8557 26.006 11.8333 25.9406 11.8094C25.5833 11.6786 25.0953 11.5 24.25 11.5ZM20 14.625C17 14.625 14.625 17 14.625 20C14.625 23 17 25.375 20 25.375C23 25.375 25.375 23 25.375 20C25.375 17 23 14.625 20 14.625ZM26.75 14.5C26.75 15.1904 26.1904 15.75 25.5 15.75C24.8096 15.75 24.25 15.1904 24.25 14.5C24.25 13.8096 24.8096 13.25 25.5 13.25C26.1904 13.25 26.75 13.8096 26.75 14.5Z"
      fill="white"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 6.25C0 2.79822 2.79822 0 6.25 0H33.75C37.2018 0 40 2.79822 40 6.25V33.75C40 37.2018 37.2018 40 33.75 40H6.25C2.79822 40 0 37.2018 0 33.75V6.25ZM15.75 9.625H24.25C25.375 9.75 26.125 9.875 26.75 10.125C27.5 10.5 28 10.75 28.625 11.375C29.25 12 29.625 12.625 29.875 13.25C30.125 13.875 30.375 14.625 30.375 15.75V24.25C30.25 25.375 30.125 26.125 29.875 26.75C29.5 27.5 29.25 28 28.625 28.625C28 29.25 27.375 29.625 26.75 29.875C26.125 30.125 25.375 30.375 24.25 30.375H15.75C14.625 30.25 13.875 30.125 13.25 29.875C12.5 29.5 12 29.25 11.375 28.625C10.75 28 10.375 27.375 10.125 26.75C9.875 26.125 9.625 25.375 9.625 24.25V15.75C9.75 14.625 9.875 13.875 10.125 13.25C10.5 12.5 10.75 12 11.375 11.375C12 10.75 12.625 10.375 13.25 10.125C13.875 9.875 14.625 9.625 15.75 9.625Z"
      fill="white"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_745_15918"
        x1={33}
        y1={9}
        x2={8}
        y2={32}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FEDA75" />
        <Stop offset={0.265625} stopColor="#FA7E1E" />
        <Stop offset={0.506479} stopColor="#D62976" />
        <Stop offset={0.76542} stopColor="#962FBF" />
        <Stop offset={1} stopColor="#4F5BD5" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default Instagram;
