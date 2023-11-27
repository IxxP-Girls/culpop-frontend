import { css } from '@emotion/react';

import blackWoff from '../assets/fonts/Pretendard-Black.woff';
import blackWoff2 from '../assets/fonts/Pretendard-Black.woff2';

import boldWoff from '../assets/fonts/Pretendard-Bold.woff';
import boldWoff2 from '../assets/fonts/Pretendard-Bold.woff2';
import extraBoldWoff from '../assets/fonts/Pretendard-ExtraBold.woff';
import extraBoldWoff2 from '../assets/fonts/Pretendard-ExtraBold.woff2';

import lightWoff from '../assets/fonts/Pretendard-Light.woff';
import lightWoff2 from '../assets/fonts/Pretendard-Light.woff2';
import extraLightWoff from '../assets/fonts/Pretendard-ExtraLight.woff';
import extraLightWoff2 from '../assets/fonts/Pretendard-ExtraLight.woff2';

import mediumWoff from '../assets/fonts/Pretendard-Medium.woff';
import mediumWoff2 from '../assets/fonts/Pretendard-Medium.woff2';

import regularWoff from '../assets/fonts/Pretendard-Regular.woff';
import regularWoff2 from '../assets/fonts/Pretendard-Regular.woff2';

import semiBoldWoff from '../assets/fonts/Pretendard-SemiBold.woff';
import semiBoldWoff2 from '../assets/fonts/Pretendard-SemiBold.woff2';

import thinWoff from '../assets/fonts/Pretendard-Thin.woff';
import thinWoff2 from '../assets/fonts/Pretendard-Thin.woff2';

const GlobalFonts = css`
  @font-face {
    font-family: 'Pretendard';
    font-weight: 100;
    src:
      local('Pretendard Thin'),
      url(${thinWoff}) format('woff'),
      url(${thinWoff2}) format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 200;
    src:
      local('Pretendard Extra Bold'),
      url(${extraLightWoff}) format('woff'),
      url(${extraLightWoff2}) format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    src:
      local('Pretendard Light'),
      url(${lightWoff}) format('woff'),
      url(${lightWoff2}) format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    src:
      local('Pretendard Reglar'),
      url(${regularWoff}) format('woff'),
      url(${regularWoff2}) format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    src:
      local('Pretendard Medium'),
      url(${mediumWoff}) format('woff'),
      url(${mediumWoff2}) format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    src:
      local('Pretendard Semi Bold'),
      url(${semiBoldWoff}) format('woff'),
      url(${semiBoldWoff2}) format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    src:
      local('Pretendard Bold'),
      url(${boldWoff}) format('woff'),
      url(${boldWoff2}) format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 800;
    src:
      local('Pretendard Extra Bold'),
      url(${extraBoldWoff}) format('woff'),
      url(${extraBoldWoff2}) format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 900;
    src:
      local('Pretendard Black'),
      url(${blackWoff}) format('woff'),
      url(${blackWoff2}) format('woff2');
    font-display: swap;
  }
`;

export default GlobalFonts;
