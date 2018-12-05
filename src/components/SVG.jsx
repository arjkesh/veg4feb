/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { width as twWidth } from '../../tailwind';

const Wrapper = styled.svg`
  ${tw('stroke-current absolute')};
  color: ${props => props.stroke};
  width: ${props => props.svgWidth};
  fill: ${props => props.fill};
  left: ${props => props.left};
  top: ${props => props.top};
`;

const icons = {
  carrot: {
    shape: (
      <g>
         <g transform="translate(-168.08511352539062,-4.255319118499756) rotate(57.40140914916992 252.38684082031244,208.1643676757813) " stroke="null" id="svg_24">
            <path fill="#ff7f00" id="svg_1" d="m190.133173,206.206672c12.193009,34.385316 209.898539,92.791775 208.93824,92.422643c-0.960299,-0.369134 -132.961762,-164.949965 -155.306664,-164.423161c-22.344882,0.526814 -65.824586,37.615202 -53.631576,72.000517z" />
            <path stroke="#00bf5f" id="svg_16" d="m187.838863,69.216913c-24.402591,-40.493026 54.816109,91.43904 27.308521,45.581691" stroke-width="24.5" />
            <path stroke="#00bf5f" id="svg_17" d="m136.15089,97.913307c-35.946434,-35.870144 80.852567,81.082823 40.285675,40.424053" stroke-width="24.5" />
            <path stroke="#00bf5f" id="svg_18" d="m113.422291,153.21704c-39.84995,-18.342882 89.717935,41.598227 44.707967,20.746809" stroke-width="24.5" />
           <path stroke="#b75500" opacity="0.19" id="svg_23" d="m230.25545,212.579814c-82.727704,-34.697119 182.491044,87.520681 92.472154,43.73532" />
          </g>
        </g>
    ),
    viewBox: '0 0 200 400',
  },
  triangle: {
    shape: (
      <polygon
        strokeWidth="1px"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="14.921,2.27 28.667,25.5 1.175,25.5 "
      />
    ),
    viewBox: '0 0 30 30',
  },
  circle: {
    shape: (
      <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z" />
    ),
    viewBox: '0 0 30 30',
  },
  arrowUp: {
    shape: (
      <React.Fragment>
        <path d="M28.74,20.81H1.26a1.26,1.26,0,0,1-1-2L14.16.5a1.25,1.25,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,18.8a1.25,1.25,0,0,1-1,2ZM3.81,18.29H26.22L15.16,3.37Z" />{' '}
        <path d="M28.74,42H1.26a1.28,1.28,0,0,1-1.13-.71A1.26,1.26,0,0,1,.26,40l13.9-18.29a1.28,1.28,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,40a1.26,1.26,0,0,1,.12,1.32A1.28,1.28,0,0,1,28.74,42ZM3.81,39.47H26.22L15.16,24.55Z" />
      </React.Fragment>
    ),
    viewBox: '0 0 30 42',
  },
  upDown: {
    shape: (
      <React.Fragment>
        <path d="M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z" />
        <path d="M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z" />
      </React.Fragment>
    ),
    viewBox: '0 0 30 44.58',
  },
  box: {
    shape: (
      <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z" />
    ),
    viewBox: '0 0 30 30',
  },
  hexa: {
    shape: (
      <polygon
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
      />
    ),
    viewBox: '0 0 30 30',
  },
};

const SVG = ({ stroke, fill, width, icon, left, top, className }) => (
  <Wrapper
    viewBox={icons[icon].viewBox}
    stroke={stroke}
    fill={fill}
    svgWidth={twWidth[`${width}`]}
    left={left}
    top={top}
    className={className}
  >
    {icons[icon].shape}
  </Wrapper>
);

export default SVG;

SVG.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.number,
  icon: PropTypes.oneOf(['triangle', 'circle', 'arrowUp', 'upDown', 'box', 'hexa']).isRequired,
  left: PropTypes.string,
  top: PropTypes.string,
  className: PropTypes.string,
};

SVG.defaultProps = {
  stroke: 'transparent',
  width: 8,
  fill: 'none',
  left: '0%',
  top: '0%',
  className: 'fancy-icon',
};
