import React from 'react'
import {Box, Flex, Text} from '@primer/components'
import Octicon from './Octicon'
import {MarkGithub} from '@githubprimer/octicons-react'
import {Link as RouterLink} from 'react-router-dom'

export default function Nav() {
  return (
    <Box bg="gray.9" py={3} px={5}>
      <Flex alignItems="center">
        <Flex flex="auto">
          <RouterLink style={{color: 'inherit'}} to="/">
            <Flex color="blue.2" alignItems="center">
              <Octicon icon={MarkGithub} ariaLabel="Primer home" size="medium" />
              <Text mx={3} fontSize="2" lineHeight="condensed">
                Primer
              </Text>
            </Flex>
          </RouterLink>
        </Flex>
        <Text is="div" px={3} fontSize={2} color="blue.2">
          <RouterLink style={{color: 'inherit'}} to="/team">
            <Box display={['inline', 'none']}>Team</Box>
            <Box display={['none', 'inline']}>Meet the team</Box>
          </RouterLink>
        </Text>
        <Text is="div" pl={3} fontSize={2} color="blue.2">
          <RouterLink style={{color: 'inherit'}} to="/news">
            <Box display={['inline', 'none']}>News</Box>
            <Box display={['none', 'inline']}>What’s new</Box>
          </RouterLink>
        </Text>
      </Flex>
    </Box>
  )
}
