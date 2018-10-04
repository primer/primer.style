import React from 'react'
import {Box} from '@primer/components'
import styled from 'react-emotion'

const Shape = styled((props) => {
  const d = {
    'hexagon': 'M237.421 1H81.5789L2 137.5L81.5789 274H237.421L317 137.5L237.421 1Z',
    'diamond': 'M347.849 174.985L174.924 1.62476L2.00001 174.984L174.925 348.344L347.849 174.985Z',
    'square': 'M270 1H1V265H270V1Z',
    'circle': 'M147.5 294C228.41 294 294 228.41 294 147.5C294 66.5903 228.41 1 147.5 1C66.5903 1 1 66.5903 1 147.5C1 228.41 66.5903 294 147.5 294Z'
  }

  return (
    <svg className={props.className} viewBox='0 0 350 350' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <clipPath id={`clip-${props.shape}`}>
        <path d={d[props.shape]}/>
      </clipPath>
      <path d={d[props.shape]} stroke='#2188FF' strokeWidth='10' strokeMiterlimit='10'/>
    </svg>
  )
})`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`

const Image = styled('img')`
  transition: transform 0.6s ease;
  filter: grayscale(100%);
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
`

const A = styled(Box)`
  position: relative;
  display: inline-block;
  overflow: hidden;
  width: ${props => props.width};
  height: ${props => props.height};
  -webkit-clip-path: url("#clip-${props => props.shape}");
  clip-path: url("#clip-${props => props.shape}");
  &:after {
    content: '';
    transition: opacity 0.6s ease;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle, #ffab70, #032f62),
      radial-gradient(circle, #85e89d, #e36209);
    background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red);
    mix-blend-mode: multiply;
    opacity: 0;
    z-index: 3;
  }
  &:hover:after {
    opacity: 1;
  }
  &:hover img {
    transform: scale(1.1);
  }
`

const AvatarShape = props => (
  <A {...props}>
    <Image src={props.src} />
    <Shape shape={props.shape} />
  </A>
)

AvatarShape.defaultProps = {
  width: '350px',
  height: '350px'
}

export default AvatarShape
