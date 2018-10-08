import React from 'react'
import {Box, FlexContainer, Text} from '@primer/components'
import Octicon, {MarkGithub} from '@githubprimer/octicons-react'
import {Link as RouterLink} from 'react-router-dom'

export default function Nav() {
  return (
    <Box bg="gray.9" py={3} px={5}>
      <div className="d-flex flex-items-center">
        <FlexContainer flex="auto">
          <RouterLink style={{color: 'inherit'}} to="/">
            <Box color="blue.2" className="d-flex flex-items-center">
              <Octicon color="blue.2" icon={MarkGithub} ariaLabel="Primer home" size="medium" />
              <Text mx={3} color="blue.2" fontSize="2" lineHeight="condensed">
                Primer
              </Text>
            </Box>
          </RouterLink>
        </FlexContainer>
        <Text is="div" fontSize={2} px={3} color="blue.2">
          <RouterLink style={{color: 'inherit'}} to="/team">
            Meet the team
          </RouterLink>
        </Text>
      </div>
    </Box>
  )
}
