import React from 'react'
import NavLink from './NavLink'
import {Box, FlexContainer, Text, Link} from '@primer/components'
import LinkLight from './LinkLight'
import Octicon, {MarkGithub} from '@githubprimer/octicons-react'
import { Link as RouterLink } from 'react-router-dom'

const Nav = props => (
  <Box bg='gray.9' py={3}>
    <div className='d-flex flex-items-center p-responsive'>
      <FlexContainer flex='auto'>
        <Box pr={2}>
          <RouterLink style={{color: 'inherit'}} to='/'>
            <Box color='blue.2' className="d-flex flex-items-center">
              <Octicon color="blue.2" icon={MarkGithub} ariaLabel="GitHub Primer home" size='medium' />
              <Text mx={3} color="blue.2" fontSize="2" lineHeight="condensed" >Primer</Text>
            </Box>
          </RouterLink>
        </Box>
      </FlexContainer>
      <Text is='div' fontSize={2} px={3} color='white' hoverColor='white'>
        <RouterLink style={{color: 'inherit'}} to='/team'>Meet the team</RouterLink>
      </Text>
      <Text is='div' fontSize={2} px={3} color='white' hoverColor='white'>
        <RouterLink style={{color: 'inherit'}} to='/news'>What’s new</RouterLink>
      </Text>

    </div>
  </Box>
)

export default Nav
