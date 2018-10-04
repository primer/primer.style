import React from 'react'
import {Box, Heading, Text, Link, FlexContainer} from '@primer/components'
import ButtonFillDark from './ButtonFillDark'
import Octicon, {Octoface, MarkGithub} from '@githubprimer/octicons-react'
import TwitterIcon from './TwitterIcon'
import SpectrumIcon from './SpectrumIcon'

import LinkDark from './LinkDark'

const OpenSource = props => (
  <Box bg="blue.2" pt={6} px={3} mt={6}>
    <Box className="container-xl p-responsive mx-auto">
      <Box mx={-4} className="d-flex flex-wrap">
        <Box mb={[5, 5, 0]} width={[1, 1, 6 / 12]} px={4}>
          <Heading lineHeight="1.25" color="black" mb={3} fontSize={7} fontWeight="bold">
            Open source
          </Heading>
          <Text is="p" color="black" mb={4} fontSize={4}>
            Primer is open-sourced on GitHub. Contributions and feedback are welcome!
          </Text>
          <ButtonFillDark mr={2} href="https://github.com/primer">
            <Octicon color="blue.2" icon={MarkGithub} size={20} verticalAlign="text-bottom" className="mr-2" />
            Contribute on GitHub
          </ButtonFillDark>
        </Box>
        <Box width={[1, 1, 6 / 12]} px={4}>
          <Heading lineHeight="1.25" color="black" mb={3} fontSize={7} fontWeight="bold">
            Keep in touch
          </Heading>
          <LinkDark pt={1} fontSize={2} mb={3} className="d-block" href="https://twitter.com/githubprimer">
            <Octicon color="blue.2" icon={TwitterIcon} size={20} verticalAlign="top" className="mr-2" />
            Follow us on Twitter
          </LinkDark>
          <LinkDark fontSize={2} mb={3} className="d-block" href="https://spectrum.chat/primer">
            <Octicon color="blue.2" icon={SpectrumIcon} size={20} verticalAlign="top" className="mr-2" />
            Chat with us in Spectrum
          </LinkDark>
          <LinkDark fontSize={2} mb={3} className="d-block" href="https://github.com/primer/primer/issues/new/choose">
            <Octicon color="blue.2" icon={Octoface} size={20} verticalAlign="text-top" className="mr-2" />
            Share feedback on GitHub
          </LinkDark>
        </Box>
      </Box>
    </Box>
    <Box color="black" className="container-xl p-responsive mx-auto">
      <Box mt={6} py={4} borderTop={2} borderColor="black">
        <Text pr={1} is="span">
          Created and maintained by GitHub&#8217;s
        </Text>
        <LinkDark fontWeight="bold" href="https://github.com/primer/primer.style#team">
          Design Systems team
        </LinkDark>
        <Text>.</Text>
        <Text is="p">Copyright GitHub 2018.</Text>
      </Box>
    </Box>
  </Box>
)

export default OpenSource
