import React from 'react'
import {FlexContainer, Box, Absolute} from '@primer/components'
import BackgroundImage from  './BackgroundImage'
import MemberInfo from './MemberInfo'

const Odd = ({member}) =>
  <FlexContainer mb={12} justifyContent='flex-end' flexDirection={'row-reverse'}>
    <MemberInfo member={member} />
    <Box bg="red.2" width="300" height="300" mr={8} ml={0}/>
    <Absolute left='348px' mt='150px'>
      <BackgroundImage width="156px" height="577px" position='absolute' backgroundImage='./line.svg' />
    </Absolute>
  </FlexContainer>

const Even = ({member}) =>
  <FlexContainer mb={12} justifyContent='flex-end' flexDirection={'row'}>
    <MemberInfo member={member} />
    <Box bg="red.2" width="300" height="300" mr={0} ml={8}/>
    <Absolute right='348px' mt='150px'>
      <BackgroundImage width="156px" height="577px" style={{transform: 'scaleX(-1)'}} position='absolute' backgroundImage='./line.svg' />
    </Absolute>
  </FlexContainer>

const Member = ({member, isOdd}) => isOdd ? <Odd member={member} /> : <Even member={member} />

export default Member
