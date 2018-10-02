import React from 'react'
import NavLink from './NavLink'
import {Box, Text, Link} from '@primer/components'
import Octicon, {MarkGithub} from '@githubprimer/octicons-react'

const Nav = props => (
  <Box bg='gray.9' py={3}>
    <div className='d-flex flex-items-center p-responsive'>
      <Link color="blue.3" pl={3} href='/'>
        <Box color='blue.2' className="d-flex flex-items-center">
          <Octicon color="blue.2" icon={MarkGithub} ariaLabel="GitHub Primer home" size='medium' />
          <Text mx={3} color="blue.2" fontSize="2" lineHeight="condensed" >Primer</Text>
        </Box>
      </Link>
    </div>
  </Box>
)

export default Nav
