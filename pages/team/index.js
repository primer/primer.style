import React from 'react'
import {Box, Text, Heading, Link, FlexContainer} from '@primer/components'
import Octicon, {MarkGithub} from '@githubprimer/octicons-react'
import Nav from '../../src/Nav'
import MemberInfo from '../../src/MemberInfo'
import teamContent from '../../src/team-content'

export default () => (
  <Box>
    <Nav />
    <Box p={4}>
      <Text fontSize={5}>Meet the team</Text>
      {teamContent.map((member) => {
        return (
          <MemberInfo member={member} />
        )
      })}
    </Box>
  </Box>
)
