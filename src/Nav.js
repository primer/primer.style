import React from 'React'
import NavLink from './NavLink'
import {Box, Text, Link} from 'primer-react'
import LinkLight from './LinkLight'
import Octicon, {MarkGithub} from '@githubprimer/octicons-react'

const Nav = props => (
  <Box bg='gray.9' py={3} className="box-shadow-large">
    <div className='d-flex flex-items-center flex-wrap flex-md-nowrap p-responsive'>
      <LinkLight nounderline pl={2} href='/'>
        <Box color='blue.2' className="d-flex flex-items-center">
          <Octicon color="blue.2" icon={MarkGithub} ariaLabel="GitHub Primer home" size='medium' />
          <Text mx={3} color="blue.2" fontSize="2" lineHeight="condensed" >Primer</Text>
        </Box>
      </LinkLight>
      <Box pr={[4, 2]} className='flex-auto text-right'>
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
        <NavLink
        href='/team'
        title='Team'
        />
      </Box>
    </div>
  </Box>
)

export default Nav
