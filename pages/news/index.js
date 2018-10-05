import React from 'react'
import {Box, Text} from '@primer/components'
import Nav from '../../src/Nav'

export default function News() {
  return (
    <Box>
      <Nav />
      <Box p={4}>
        <Text fontSize={5}>What’s new</Text>
      </Box>
    </Box>
  )
}
