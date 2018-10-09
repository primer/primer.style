import React from 'react'
import {FlexContainer, Box, FlexItem} from '@primer/components'
import MemberQuestions from './MemberQuestions'
import AvatarShape from './AvatarShape'

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
    <FlexItem mb={[6, 12, 12, 0, 0]} flexShrink="0" style={{position: 'relative'}}>
      <Box mr={isOdd ? [0, 0, 0, 12, 12] : 0} ml={isOdd ? 0 : [0, 0, 0, 12, 12]}>
        <AvatarShape shape={shape} src={member.avatar} />
      </Box>
    </FlexItem>
  </FlexContainer>
)

export default Member
