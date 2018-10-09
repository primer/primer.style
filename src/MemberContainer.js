import React from 'react'
import {FlexContainer, Box, FlexItem} from '@primer/components'
import MemberQuestions from './MemberQuestions'
import AvatarShape from './AvatarShape'

const oddDots = `
  &:after {
    background-image: url(./dots-2.svg);
    background-size: 155px 280px;
    background-repeat: no-repeat;
    content: "";
    height: 280px;
    width: 155px;
    position: absolute;
    right: 140px;
    top: -50px;
    transform: rotate(-45deg);
  }`
 const evenDots = `
  &:after {
    background-image: url(./dots.svg);
    background-size: 270px 265px;
    background-repeat: no-repeat;
    content: "";
    height: 265px;
    width: 270px;
    position: absolute;
    left: 80px;
    top: 50px;
    transform: rotate(-5deg);
  }`

const direction = isOdd =>
  isOdd ? ['column-reverse', 'column-reverse', 'column-reverse', 'row-reverse', 'row-reverse'] : ['column-reverse', 'column-reverse', 'column-reverse', 'row', 'row']

const Member = ({member, isOdd, shape}) => (
  <FlexContainer mb={12} justifyContent="flex-end" alignItems={['center', 'center', 'center', 'initial', 'initial']} flexDirection={direction(isOdd)}>
    <MemberQuestions member={member} />
    <FlexItem mb={[6, 12, 12, 0, 0]} flexShrink="0" style={{position: 'relative'}}>
      <Box css={isOdd ? oddDots : evenDots} mr={isOdd ? [0, 0, 0, 12, 12] : 0} ml={isOdd ? 0 : [0, 0, 0, 12, 12]}>
        <AvatarShape shape={shape} src={member.avatar} />
      </Box>
    </FlexItem>
  </FlexContainer>
)

export default Member
