import React from 'react'
import {FlexContainer, Box, FlexItem, Absolute} from '@primer/components'
import MemberInfo from './MemberInfo'

const oddLineStyles =
  `
  margin-right: 64px;
  &:after {
    background-image: url('./line.svg');
    background-size: 111px 557px;
    background-repeat: no-repeat;
    content: "";
    height: 557px;
    width: 111px;
    position: absolute;
    left: 300px;
    margin-top: 80px;
  }`

const evenLineStyles =
  `
  margin-left: 64px;
  &:after {
    background-image: url('./line.svg');
    background-size: 111px 557px;
    background-repeat: no-repeat;
    content: "";
    height: 557px;
    width: 111px;
    position: absolute;
    left: -47px;
    margin-top: 80px;
    transform: scale(-1, 1);
  }`


const direction = (isOdd) =>
  isOdd ? ['column', 'column', 'row-reverse', 'row-reverse'] : ['column', 'column', 'row', 'row',]

const Member = ({member, isOdd, shape}) =>
  <FlexContainer mb={12} justifyContent='flex-end' flexDirection={direction(isOdd)}>
    <MemberInfo member={member} />
    <FlexItem flexShrink='0' style={{position: 'relative'}}>
      <Box bg="red.2" width="300px" height="300px" css={isOdd ? oddLineStyles : evenLineStyles}>{shape}</Box>
    </FlexItem>
  </FlexContainer>


export default Member
