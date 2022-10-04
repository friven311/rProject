import 'styled-components';

declare module 'styled-components' {
  type Theme = {
    colors: {
      primaryblack: string;
      primarywhite: string;
      primarygrey: string;
      lightgrey: string;
      primaryblackopacity: string;
    };
  }; // FIXME: Add theme object here

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
