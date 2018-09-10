import React from 'react'
import NavLink from './NavLink'
import {Box, Text, Link} from 'primer-react'
import LinkLight from './LinkLight'
import Octicon, {MarkGithub} from '@githubprimer/octicons-react'

const Nav = props => (
  <Box bg='gray.9' py={3} className="box-shadow-large">
    <div className='d-flex flex-items-center flex-wrap flex-sm-nowrap p-responsive'>
      <LinkLight nounderline pl={3} href='/'>
        <Box color='blue.2' className="d-flex flex-items-center">
          <Octicon color="blue.2" icon={MarkGithub} ariaLabel="GitHub Primer home" size='medium' />
          <Text mx={3} color="blue.2" fontSize="2" lineHeight="condensed" >Primer</Text>
        </Box>
      </LinkLight>
      <Box mt={[3, 0]} className='flex-auto text-left, text-md-right'>
        <NavLink
        href='https://styleguide.github.com/primer/'
        title='Style guide'
        />
        <NavLink
          href='https://spectrum.chat/primer'
          title='Community'
        />
        <NavLink
          href='https://github.com/primer/'
          title='Open-source'
        />
      </Box>
    </div>
  </Box>
)

export default Nav
