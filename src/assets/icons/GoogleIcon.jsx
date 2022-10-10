import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const GoogleIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none">
    <Path
      fill="#000"
      d="M19.456 8.154c.123.66.19 1.348.19 2.067 0 5.624-3.764 9.623-9.449 9.623A9.84 9.84 0 0 1 .353 10 9.841 9.841 0 0 1 10.197.156c2.658 0 4.879.978 6.583 2.566l-2.775 2.775V5.49c-1.033-.984-2.344-1.489-3.808-1.489-3.248 0-5.888 2.744-5.888 5.993 0 3.248 2.64 5.998 5.888 5.998 2.947 0 4.953-1.685 5.365-3.999h-5.365V8.154h9.26-.001z"
    />
  </Svg>
);

export default GoogleIcon;
