import React from 'react'
import {Box, FlexContainer, Text, Link} from '@primer/components'
import LinkLight from './LinkLight'
import Octicon, {MarkGithub} from '@githubprimer/octicons-react'

export default function Nav() {
  return (
    <Box bg="gray.9" py={3}>
      <div className="d-flex flex-items-center p-responsive">
        <FlexContainer flex="auto">
          <LinkLight nounderline pr={2} href="/">
            <Box color="blue.2" className="d-flex flex-items-center">
              <Octicon color="blue.2" icon={MarkGithub} ariaLabel="GitHub Primer home" size="medium" />
              <Text mx={3} color="blue.2" fontSize="2" lineHeight="condensed">
                Primer
              </Text>
            </Box>
          </LinkLight>
        </FlexContainer>
        <Link fontSize={2} px={3} color={'white'} href="/team">
          Meet the team
        </Link>
        <Link fontSize={2} pl={3} color={'white'} href="/news">
          What’s new
        </Link>
      </div>
    </Box>
  )
}
