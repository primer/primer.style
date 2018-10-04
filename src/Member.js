import React from 'react'
import {FlexContainer, Box, FlexItem, Absolute} from '@primer/components'
import MemberInfo from './MemberInfo'

const oddLineStyles =
  `&:after {
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
  `&:after {
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

const Odd = ({member, shape}) =>
  <FlexContainer mb={12} justifyContent='flex-end' flexDirection={['column', 'column', 'row-reverse', 'row-reverse']}>
    <MemberInfo member={member} />
    <FlexItem flexShrink='0' style={{position: 'relative'}}>
      <Box bg="red.2" width="300px" height="300px" css={oddLineStyles} mr={8} ml={0}>{shape}</Box>
    </FlexItem>
  </FlexContainer>

const Even = ({member, shape}) =>
  <FlexContainer mb={12} justifyContent='flex-end' flexDirection={['column', 'column', 'row', 'row',]}>
    <MemberInfo member={member} />
    <FlexItem style={{position: 'relative'}} flexShrink='0'>
      <Box bg="red.2" width="300" height="300" css={evenLineStyles} mr={0} ml={8}>{shape}</Box>
    </FlexItem>
  </FlexContainer>

const Member = ({member, isOdd, shape}) => isOdd ? <Odd member={member} shape={shape} /> : <Even member={member} shape={shape} />

export default Member
