import 'styled-components';

import lightTheme from '../theme/lightTheme';

declare module 'styled-components' {
  type Theme = typeof lightTheme;

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
