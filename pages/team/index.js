import React from 'react'
import {Box, Text} from '@primer/components'
import Nav from '../../src/Nav'

export default function Team() {
  return (
    <Box>
      <Nav />
      <Box p={4}>
        <Text fontSize={5}>Meet the team</Text>
      </Box>
    </Box>
  )
}
