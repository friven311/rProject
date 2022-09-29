import 'styled-components/native';

declare module 'styled-components/native' {
  type Theme = Record<string, string>; // FIXME: Add theme object here

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
