import React from 'react'
import {Box} from '@primer/components'
import {themeGet} from 'styled-system'
import styled from 'react-emotion'
import PropTypes from 'prop-types'
import Circle from './svg/circle.svg'
import Hexagon from './svg/hexagon.svg'
import Square from './svg/square.svg'
import Diamond from './svg/diamond.svg'

const Shape = styled(({className, shape}) => {
  const shapes = {
    hexagon: Hexagon,
    circle: Circle,
    square: Square,
    diamond: Diamond
  }
  const Tag = shapes[shape]
  return <Tag className={className} />
})`
  position: relative;
  z-index: 2;
  width: 100%;
  height: auto;
  stroke: ${themeGet('colors.blue.3')};
  stroke-width: 4;
  fill: none;
`

const Image = styled('img')`
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
  z-index: 2;
  display: inline-block;
  overflow: hidden;
  -webkit-clip-path: url("#clip-${props => props.shape}");
  clip-path: url("#clip-${props => props.shape}");
  &:after {
    content: '';
    transition: opacity 0.8s ease;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at top left, ${themeGet('colors.blue.4')}, transparent),
    radial-gradient(ellipse at bottom right, ${themeGet('colors.orange.4')}, transparent),
    linear-gradient(to right, ${themeGet('colors.orange.5')} 50%, transparent),
    linear-gradient(to left, ${themeGet('colors.blue.6')} 50%, transparent);
    mix-blend-mode: multiply;
    opacity: 0;
    z-index: 3;
  }
  &:hover:after {
    opacity: 1;
  }
`

const AvatarShape = props => (
  <A className={props.className} shape={props.shape}>
    <Image src={props.src} />
    <Shape shape={props.shape} />
  </A>
)

AvatarShape.propTypes = {
  shape: PropTypes.oneOf(['hexagon', 'square', 'circle', 'diamond'])
}

export default AvatarShape
