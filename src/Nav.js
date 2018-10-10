import React from 'react'
import {Box, FlexContainer, Text} from '@primer/components'
import {MarkGithub} from '@githubprimer/octicons-react'
import {Link as RouterLink} from 'react-router-dom'
import Octicon from './Octicon'

export default function Nav() {
  return (
    <Box bg="gray.9" py={3} px={5}>
      <FlexContainer alignItems="center">
        <FlexContainer flex="auto">
          <RouterLink style={{color: 'inherit'}} to="/">
            <FlexContainer color="blue.2" alignItems="center">
              <Octicon icon={MarkGithub} color="blue.2" ariaLabel="Primer home" size="medium" />
              <Text mx={3} color="blue.2" fontSize="2" lineHeight="condensed">
                Primer
              </Text>
            </FlexContainer>
          </RouterLink>
        </FlexContainer>
        <Text is="div" fontSize={2} color="blue.2">
          <RouterLink style={{color: 'inherit'}} to="/team">
            Meet the team
          </RouterLink>
        </Text>
      </FlexContainer>
    </Box>
  )
}
