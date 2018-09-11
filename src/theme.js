// Imports primer-primitives package for use with styled-components and styled-system.
// Spacing primitives are defined as an object instead of an array in the original package and need to updated there so that you don't have to do primitives.space.space.
// Added width to theme, could also be added to primer-primitives (as could Breakpoints).

import primitives from 'primer-primitives'

const theme = {
  colors: primitives.colors,
  fontSizes: primitives.fontSizes,
  space: primitives.space.space
}

export default theme
