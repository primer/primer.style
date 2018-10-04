import React from 'react'
import {Box, Text, Heading, Link, FlexContainer, Absolute} from '@primer/components'
import Octicon, {MarkGithub} from '@githubprimer/octicons-react'
import Nav from '../../src/Nav'
import Member from  '../../src/Member'
import teamContent from '../../src/team-content'

export default () => (
  <Box>
    <Nav />
    <Box p={7}>
      <Text fontSize={5}>Meet the team</Text>
      {teamContent.map((member, i) => {
        return <Member isOdd={i % 2 === 0} member={member} />
      })}
    </Box>
  </Box>
)
