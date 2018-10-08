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
    <Box bg="blue.2" pt={6} mt={6}>
      <IndexGrid>
        <IndexGrid.Item mb={[5, 5, 0]}>
          <Heading lineHeight="1.25" color="black" mb={3} fontSize={7} fontWeight="bold">
            Open source
          </Heading>
          <Text is="p" color="black" mb={4} fontSize={4}>
            Primer is open-sourced on GitHub. Contributions and feedback are welcome!
          </Text>
          <ButtonFillDark mr={2} href="https://github.com/primer">
            <FooterOcticon color="inherit" icon={MarkGithub} verticalAlign="text-bottom" />
            Contribute on GitHub
          </ButtonFillDark>
        </IndexGrid.Item>
        <IndexGrid.Item>
          <Heading lineHeight="1.25" color="black" mb={3} fontSize={7} fontWeight="bold">
            Keep in touch
          </Heading>
          <FooterLink href="https://twitter.com/githubprimer">
            <FooterOcticon icon={TwitterIcon} verticalAlign="top" />
            Follow us on Twitter
          </FooterLink>
          <FooterLink href="https://spectrum.chat/primer">
            <FooterOcticon icon={SpectrumIcon} verticalAlign="top" />
            Chat with us in Spectrum
          </FooterLink>
          <FooterLink href="https://github.com/primer/primer/issues/new/choose">
            <FooterOcticon icon={Octoface} verticalAlign="text-top" />
            Share feedback on GitHub
          </FooterLink>
        </IndexGrid.Item>
      </IndexGrid>
      <Box color="black" px={4} className="container-xl mx-auto">
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
}

function FooterOcticon(props) {
  return <Octicon mr={2} color="black" size={20} {...props} />
}

function FooterLink(props) {
  return <LinkDark fontSize={2} mb={3} css={{display: 'block'}} {...props} />
}
