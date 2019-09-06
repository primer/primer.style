import React, {useState} from 'react'
import {Flex, Box, themeGet} from '@primer/components'
import MemberQuestions from './MemberQuestions'
import AvatarShape from './AvatarShape'
import {ReactComponent as DotsSVG} from '../svg/dots.svg'

const Dots = ({shape, color}) => {
  const css = {
    position: 'absolute',
    height: '92px',
    width: '168px',
    fill: color
  }
  return <DotsSVG shape={shape} style={Object.assign(css, shapeStyles[shape])} />
}

const direction = isOdd =>
  isOdd
    ? ['column-reverse', 'column-reverse', 'column-reverse', 'row-reverse', 'row-reverse']
    : ['column-reverse', 'column-reverse', 'column-reverse', 'row', 'row']

export default function Member(props) {
  const [hover, setHover] = useState(false)

  const {member, isOdd, shape, ...rest} = props
  const colorName = member.color || 'blue'
  const color = themeGet(`colors.${colorName}.4`)(rest)
  const avatarImage = hover ? member.gif : member.avatar

  return (
    <Flex
      mb={12}
      justifyContent="flex-end"
      alignItems={['center', 'center', 'center', 'initial', 'initial']}
      flexDirection={direction(isOdd)}
    >
      <MemberQuestions member={member} colorName={colorName} />
      <Flex.Item mb={[6, 8, 8, 0, 0]} style={{flexShrink: 0, position: 'relative'}}>
        <Box mr={isOdd ? [0, 0, 0, 12, 12] : 0} ml={isOdd ? 0 : [0, 0, 12, 12, 12]}>
          <Dots shape={shape} color={color} />
          <AvatarShape
            shape={shape}
            src={avatarImage}
            bg={color}
            href={`https://github.com/${member.handle}`}
            onFocus={() => setHover(true)}
            onBlur={() => setHover(false)}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          />
        </Box>
      </Flex.Item>
    </Flex>
  )
}

const shapeStyles = {
  hexagon: {
    top: '230px',
    left: '130px',
    transform: 'rotate(180deg)'
  },
  square: {
    top: '250px',
    left: '75px'
  },
  circle: {
    top: '236px',
    left: '181px',
    transform: 'rotate(180deg)'
  },
  diamond: {
    top: '245px',
    left: '65px'
  }
}
