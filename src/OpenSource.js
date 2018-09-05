import React from 'React'
import {Box, Heading, Text, Link, FlexContainer} from 'primer-react'
import Image from './Image'
import CssImage from './CssImage'
import ButtonFillDark from './ButtonFillDark'
import ButtonOutline from './ButtonOutline'
import Octicon, {FileCode, Ruby, Paintcan} from '@githubprimer/octicons-react'

import LinkDark from './LinkDark'

const OpenSource = props => (
  <Box bg="blue.2" py={6} mt={6}>
    <FlexContainer className='container-xl p-responsive mx-auto'>
      <Box mt={[4,3,0]} width={[1, 1, 6/12]} pr={[0, 3, 3, 6]} >
        <Heading lineHeight="1.25" color="black" mb={3} fontSize={7} fontWeight='bold'>Open source</Heading>
        <Text is='p' color="black" mb={4} fontSize={3}>Primer is open sourced on GitHub. Contributions and feedback are welcome!</Text>
        <ButtonFillDark mr={2} href='https://atom.io/packages/autocomplete-primer'>Fork on GitHub</ButtonFillDark>
      </Box>
      <Box my={[4,3,0]} width={[1, 1, 6/12]} pr={[0, 3, 3, 6]} >
        <Heading lineHeight="1.25" color="black" mb={3} fontSize={7} fontWeight='bold'>Keep in touch</Heading>
        <LinkDark fontSize={2} mb={2} className="d-block" href="https://twitter.com/githubprimer">Follow us on twitter</LinkDark>
        <LinkDark fontSize={2} mb={2} className="d-block" href="https://spectrum.chat/primer">Chat to us in Spectrum</LinkDark>
        <LinkDark fontSize={2} mb={2} className="d-block" href="https://github.com/primer/primer/issues/new/choose">Share feedback on GitHub</LinkDark>
      </Box>
    </FlexContainer>
    <Box color="black" className="container-xl p-responsive mx-auto">
      <Box mt={6} pt={4} borderTop={2} borderColor="black">
        <Text is="p">Copyright GitHub 2018. Available for use under the <LinkDark className="d-inline" fontWeight="bold" href="https://github.com/primer/primer/blob/master/LICENSE">MIT license</LinkDark>.</Text>
        <Text is="p">Created and maintained by GitHub&#8217;s <LinkDark fontWeight="bold" href="https://github.com/orgs/primer/teams/ds-core/members">Design Systems team</LinkDark>.</Text>
      </Box>
    </Box>

  </Box>
)

export default OpenSource
