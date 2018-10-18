import React from 'react'
import {Box, Flex, Text} from '@primer/components'
import {MarkGithub} from '@githubprimer/octicons-react'
import {Link as RouterLink} from 'react-router-dom'
import Octicon from './Octicon'

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
        <Text is="div" fontSize={2} color="blue.2">
          <RouterLink style={{color: 'inherit'}} to="/team">
            Meet the team
          </RouterLink>
        </Text>
      </Flex>
    </Box>
  )
}
