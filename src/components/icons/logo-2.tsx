import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { Color } from '@src-types/styled.d';

export interface LogoProps {
  theme: DefaultTheme;
}

const Logo = ({ theme }: LogoProps): React.FC<LogoProps> => {
  return (
    <div className="hex-logo">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 -4 88.59 99.306"
      >
        <g transform="scale(0.9)">
          <path
            stroke={theme.primary.hex}
            strokeMiterlimit="10"
            d="M45.377,98.392c-0.953,0.55-2.513,0.552-3.467,0.005l-39.68-22.75
        c-0.954-0.547-1.732-1.895-1.729-2.995l0.139-45.739c0.003-1.1,0.785-2.45,1.738-3l39.837-23c0.953-0.55,2.513-0.552,3.467-0.005
        l39.68,22.75c0.954,0.547,1.732,1.895,1.729,2.995l-0.139,45.739c-0.003,1.1-0.785,2.45-1.738,3L45.377,98.392z"
          />
        </g>
      </svg>
      <div className="callout">NEON</div>
    </div>
  );
};
export default withTheme(Logo);
