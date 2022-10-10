import * as React from 'react';
import Svg, {Rect, Defs, Pattern, Use, Image} from 'react-native-svg';

const Ball = () => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <Rect width={24} height={24} fill="url(#pattern0)" />
    <Defs>
      <Pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
        <Use xlinkHref="#image0_738_15469" transform="scale(0.00625)" />
      </Pattern>
      <Image
        id="image0_738_15469"
        width={160}
        height={160}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);

export default Ball;