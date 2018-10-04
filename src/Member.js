import React from 'react'
import {FlexContainer, Box, Absolute} from '@primer/components'
import BackgroundImage from  './BackgroundImage'
import MemberInfo from './MemberInfo'

const Odd = ({member, shape}) =>
  <FlexContainer mb={12} justifyContent='flex-end' flexDirection={'row-reverse'}>
    <MemberInfo member={member} />
    <Box bg="red.2" width="300" height="300" mr={8} ml={0}>{shape}</Box>
    <Absolute left='348px' mt='150px'>
      <BackgroundImage width="156px" height="577px" position='absolute' backgroundImage='./line.svg' />
    </Absolute>
  </FlexContainer>

const Even = ({member, shape}) =>
  <FlexContainer mb={12} justifyContent='flex-end' flexDirection={'row'}>
    <MemberInfo member={member} />
    <Box bg="red.2" width="300" height="300" mr={0} ml={8}>{shape}</Box>
    <Absolute right='348px' mt='150px'>
      <BackgroundImage width="156px" height="577px" style={{transform: 'scaleX(-1)'}} position='absolute' backgroundImage='./line.svg' />
    </Absolute>
  </FlexContainer>

const Member = ({member, isOdd, shape}) => isOdd ? <Odd member={member} shape={shape} /> : <Even member={member} shape={shape} />

export default Member
