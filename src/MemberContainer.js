import React from 'react'
import {FlexContainer, Box, FlexItem} from '@primer/components'
import MemberQuestions from './MemberQuestions'
import AvatarShape from './AvatarShape'
import DotsSVG from './svg/dots.svg'

const Dots = ({shape}) => {
  const css = {
    position: 'absolute',
    height: '92px',
    width: '168px'
  }
  switch (shape) {
    case 'hexagon':
      css.top = '230px'
      css.left = '130px'
      css.transform = 'rotate(180deg)'
      break
    case 'square':
      css.top = '250px'
      css.left = '75px'
      break
    case 'circle':
      css.top = '236px'
      css.left = '181px'
      css.transform = 'rotate(180deg)'
      break
    case 'diamond':
      css.top = '245px'
      css.left = '65px'
      break
    default:
  }
  return <DotsSVG shape={shape} style={css} />
}

const direction = isOdd =>
  isOdd
    ? ['column-reverse', 'column-reverse', 'column-reverse', 'row-reverse', 'row-reverse']
    : ['column-reverse', 'column-reverse', 'column-reverse', 'row', 'row']

const Member = ({member, isOdd, shape}) => (
  <FlexContainer
    mb={12}
    justifyContent="flex-end"
    alignItems={['center', 'center', 'center', 'initial', 'initial']}
    flexDirection={direction(isOdd)}
  >
    <MemberQuestions member={member} />
    <FlexItem mb={[6, 8, 8, 0, 0]} css={{flexShrink: 0, position: 'relative'}}>
      <Box mr={isOdd ? [0, 0, 0, 12, 12] : 0} ml={isOdd ? 0 : [0, 0, 12, 12, 12]}>
        <AvatarShape shape={shape} src={member.avatar} />
        <Dots shape={shape} />
      </Box>
    </FlexItem>
  </FlexContainer>
)

export default Member
