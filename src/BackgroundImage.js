import {
  backgroundImage,
} from 'styled-system'
import {Box} from '@primer/components'
import styled from 'react-emotion'

const BackgroundImage = styled(Box)`
  background-color: 'transparent'
  &:after {
    background: url('./line.svg');
    background-size: 662px 300px;
    background-repeat: no-repeat;
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 200px;
    left: 65px;
  }
`

export default BackgroundImage
