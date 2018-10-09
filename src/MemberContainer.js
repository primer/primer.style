import React from 'react'
import {FlexContainer, Box, FlexItem} from '@primer/components'
import MemberQuestions from './MemberQuestions'
import AvatarShape from './AvatarShape'

const oddDots = `
  &:after {
    background-image: url(./dots.svg);
    background-size: 168px 92px;
    background-repeat: no-repeat;
    content: "";
    height: 92px;
    width: 168px;
    position: absolute;
    top: 220px;
    left: 145px;
    transform: rotate(-180deg);
  }`
 const evenDots = `
  &:after {
    background-image: url(./dots.svg);
    background-size: 168px 92px;
    background-repeat: no-repeat;
    content: "";
    height: 92px;
    width: 168px;
    position: absolute;
    top: 234px;
    left: 46px;
  }`

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
    <FlexItem mb={[6, 8, 8, 0, 0]} flexShrink="0" style={{position: 'relative'}}>
      <Box css={isOdd ? oddDots : evenDots} mr={isOdd ? [0, 0, 0, 12, 12] : 0} ml={isOdd ? 0 : [0, 0, 12, 12, 12]}>
        <AvatarShape shape={shape} src={member.avatar} />
      </Box>
    </FlexItem>
  </FlexContainer>
)

export default Member
