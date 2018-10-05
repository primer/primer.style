import React from 'react'
import {Box, FlexContainer, Text} from '@primer/components'
import Octicon, {MarkGithub} from '@githubprimer/octicons-react'
import {Link as RouterLink} from 'react-router-dom'

const Nav = () => (
  <Box bg="gray.9" py={3}>
    <div className="d-flex flex-items-center p-responsive">
      <FlexContainer flex="auto">
        <Box pr={2}>
          <RouterLink style={{color: 'inherit'}} to="/">
            <Box color="blue.2" className="d-flex flex-items-center">
              <Octicon color="blue.2" icon={MarkGithub} ariaLabel="GitHub Primer home" size="medium" />
              <Text mx={3} color="blue.2" fontSize="2" lineHeight="condensed">
                Primer
              </Text>
            </Box>
          </RouterLink>
        </Box>
      </FlexContainer>
      <Text is="div" fontSize={2} px={3} color="blue.2">
        <RouterLink style={{color: 'inherit'}} to="/team">
          Meet the team
        </RouterLink>
      </Text>
      <Text is="div" fontSize={2} px={3} color="blue.2">
        <RouterLink style={{color: 'inherit'}} to="/news">
          What’s new
        </RouterLink>
      </Text>
    </div>
  </Box>
)

export default Nav
