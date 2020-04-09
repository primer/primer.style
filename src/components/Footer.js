import React from 'react'
import {Box, BorderBox, Heading, Text, StyledOcticon} from '@primer/components'
import {Octoface, MarkGithub} from '@primer/octicons-react'
import ButtonFillDark from './ButtonFillDark'
import TwitterIcon from './TwitterIcon'
import SpectrumIcon from './SpectrumIcon'
import IndexGrid from './IndexGrid'
import LinkDark from './LinkDark'

export default function OpenSource() {
  return (
    <Box bg="blue.2" pt={12}>
      <IndexGrid alignItems="start">
        <IndexGrid.Item mb={[8, 8, 8, 0]}>
          <Heading color="black" mb={3} fontSize={7} fontWeight="bold">
            Open source
          </Heading>
          <Text as="div" color="black" mb={5} fontSize={4}>
            Primer is open-sourced on GitHub. Contributions and feedback are welcome!
          </Text>
          <ButtonFillDark mr={2} href="https://github.com/primer">
            <StyledOcticon icon={MarkGithub} size={20} verticalAlign="text-bottom" mr={2} />
            Contribute on GitHub
          </ButtonFillDark>
        </IndexGrid.Item>
        <IndexGrid.Item>
          <Heading color="black" mb={3} fontSize={7} fontWeight="bold">
            Keep in touch
          </Heading>
          <LinkDark pt={1} fontSize={2} mb={3} display="block" href="https://twitter.com/githubprimer">
            <StyledOcticon icon={TwitterIcon} size={20} verticalAlign="top" mr={2} />
            Follow us on Twitter
          </LinkDark>
          <LinkDark fontSize={2} mb={3} display="block" href="https://spectrum.chat/primer">
            <StyledOcticon icon={SpectrumIcon} size={20} verticalAlign="top" mr={2} />
            Chat with us in Spectrum
          </LinkDark>
          <LinkDark fontSize={2} mb={3} display="block" href="https://github.com/primer/css/issues/new/choose">
            <StyledOcticon icon={Octoface} size={20} verticalAlign="text-top" mr={2} />
            Share feedback on GitHub
          </LinkDark>
        </IndexGrid.Item>
      </IndexGrid>
      <Box color="black" px={5} mx="auto" className="container-xl">
        <BorderBox mt={12} py={5} borderRadius={0} border={0} borderTop={2} borderStyle="solid" borderColor="black">
          <Text pr={1} as="span">
            Created and maintained by GitHub&#8217;s
          </Text>
          <LinkDark fontWeight="bold" href="https://primer.style/about#team">
            Design Systems team
          </LinkDark>
          <Text>.</Text>
          <Text as="p">&copy; GitHub {new Date().getFullYear()}</Text>
        </BorderBox>
      </Box>
    </Box>
  )
}
