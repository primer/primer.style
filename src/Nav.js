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
      </div>
    </Box>
  )
}
