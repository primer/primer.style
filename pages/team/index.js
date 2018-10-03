import React from 'react'
import {Box, Text, Heading, Link, FlexContainer} from '@primer/components'
import Octicon, {MarkGithub} from '@githubprimer/octicons-react'
import Nav from '../../src/Nav'
import MemberInfo from '../../src/MemberInfo'
import teamContent from '../../src/team-content'

export default () => (
  <Box>
    <Nav />
    <Box p={7}>
      <Text fontSize={5}>Meet the team</Text>
      {teamContent.map((member, i) => {
        const isOdd = i % 2 === 0;
        return (
          <FlexContainer mb={12} justifyContent='flex-end' flexDirection={isOdd ? 'row-reverse' : 'row'}>
            <MemberInfo member={member} />
            <Box bg="blue.4" width="300" height="300" mr={isOdd ? 8 : 0} ml={isOdd ? 0 : 8}/>
          </FlexContainer>
        )
      })}
    </Box>
  </Box>
)
