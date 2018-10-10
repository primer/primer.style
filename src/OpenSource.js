import React from 'react'
import {Box, Heading, Text} from '@primer/components'
import {Octoface, MarkGithub} from '@githubprimer/octicons-react'
import Octicon from './Octicon'
import ButtonFillDark from './ButtonFillDark'
import TwitterIcon from './TwitterIcon'
import SpectrumIcon from './SpectrumIcon'
import IndexGrid from './IndexGrid'
import LinkDark from './LinkDark'

export default function OpenSource() {
  return (
    <Box bg="blue.2" pt={12} mt={6}>
      <IndexGrid>
        <IndexGrid.Item mb={[8, 8, 8, 0]}>
          <Heading lineHeight="1.25" color="black" mb={3} fontSize={7} fontWeight="bold">
            Open source
          </Heading>
          <Text is="p" color="black" mb={5} fontSize={4}>
            Primer is open-sourced on GitHub. Contributions and feedback are welcome!
          </Text>
          <ButtonFillDark mr={2} href="https://github.com/primer">
            <Octicon icon={MarkGithub} color="blue.2" size={20} verticalAlign="text-bottom" mr={2} />
            Contribute on GitHub
          </ButtonFillDark>
        </IndexGrid.Item>
        <IndexGrid.Item>
          <Heading lineHeight="1.25" color="black" mb={3} fontSize={7} fontWeight="bold">
            Keep in touch
          </Heading>
          <LinkDark pt={1} fontSize={2} mb={3} className="d-block" href="https://twitter.com/githubprimer">
            <Octicon icon={TwitterIcon} color="blue.2" size={20} verticalAlign="top" mr={2} />
            Follow us on Twitter
          </LinkDark>
          <LinkDark fontSize={2} mb={3} className="d-block" href="https://spectrum.chat/primer">
            <Octicon icon={SpectrumIcon} color="blue.2" size={20} verticalAlign="top" mr={2} />
            Chat with us in Spectrum
          </LinkDark>
          <LinkDark fontSize={2} mb={3} className="d-block" href="https://github.com/primer/primer/issues/new/choose">
            <Octicon icon={Octoface} color="blue.2" size={20} verticalAlign="text-top" mr={2} />
            Share feedback on GitHub
          </LinkDark>
        </IndexGrid.Item>
      </IndexGrid>
      <Box color="black" px={5} className="container-xl mx-auto">
        <Box mt={12} py={5} borderTop={2} borderColor="black">
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
}
