import React from 'react'
import {Box, Text} from '@primer/components'
import LinkLight from './LinkLight'
import Octicon, {MarkGithub} from '@githubprimer/octicons-react'

export default function Nav() {
  return (
    <Box bg="gray.9" py={3}>
      <div className="d-flex flex-items-center p-responsive">
        <LinkLight nounderline pl={3} href="/">
          <Box color="blue.2" className="d-flex flex-items-center">
            <Octicon color="blue.2" icon={MarkGithub} ariaLabel="GitHub Primer home" size="medium" />
            <Text mx={3} color="blue.2" fontSize="2" lineHeight="condensed">
              Primer
            </Text>
          </Box>
        </LinkLight>
      </div>
    </Box>
  )
}
