import React from 'react'
import {FlexContainer, Box, FlexItem} from '@primer/components'
import MemberQuestions from './MemberQuestions'
import AvatarShape from './AvatarShape'

const oddLineStyles = `
  margin-right: 128px;
  }`

const evenLineStyles = `
  margin-left: 128px;
  }`

const direction = isOdd =>
  isOdd ? ['column-reverse', 'column-reverse', 'row-reverse', 'row-reverse'] : ['column-reverse', 'column-reverse', 'row', 'row']

const Member = ({member, isOdd, shape}) => (
  <FlexContainer mb={12} justifyContent="flex-end" flexDirection={direction(isOdd)}>
    <MemberQuestions member={member} />
    <FlexItem flexShrink="0" style={{position: 'relative'}}>
      <Box css={isOdd ? oddLineStyles : evenLineStyles}>
        <AvatarShape shape={shape} src={member.avatar} />
      </Box>
    </FlexItem>
  </FlexContainer>
)

export default Member
