import React from 'react'
import {Box, FlexContainer, Text, Link} from '@primer/components'
import Octicon, {MarkGithub} from '@githubprimer/octicons-react'
import {Link as RouterLink} from 'react-router-dom'

const Nav = () => (
  <Box bg="gray.9" py={3}>
    <div className="d-flex flex-items-center p-responsive">
      <FlexContainer flex="auto">
        <Box pr={2}>
          <RouterLink style={{color: 'inherit', textDecoration: 'none'}} to="/">
            <Box color="blue.2" className="d-flex flex-items-center">
              <Octicon color="blue.2" icon={MarkGithub} ariaLabel="GitHub Primer home" size="medium" />
              <Link mx={3} color="blue.2" hoverColor="blue.2" fontSize="2" lineHeight="condensed">
                Primer
              </Link>
            </Box>
          </RouterLink>
        </Box>
      </FlexContainer>
      <RouterLink style={{textDecoration: 'none'}} to="/team">
        <Link color="blue.2" px={3} hoverColor="blue.2">Meet the team</Link>
      </RouterLink>
      <RouterLink style={{textDecoration: 'none'}} to="/news">
        <Link color="blue.2" px={3} hoverColor="blue.2">What’s new</Link>
      </RouterLink>
    </div>
  </Box>
)

export default Nav
