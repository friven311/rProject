import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryblack: string;
      primarywhite: string;
      primarygrey: string;
      lightgrey: string;
    };
  }
}
