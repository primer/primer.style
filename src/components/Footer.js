import React from 'react'
import {Box, Link, Heading, Text, StyledOcticon} from '@primer/react'
import {MarkGithubIcon} from '@primer/octicons-react'
import TwitterIcon from './TwitterIcon'
import IndexGrid from './IndexGrid'

export default function OpenSource() {
  return (
    <Box px={2} py={6}>
      <IndexGrid alignItems="start">
        <IndexGrid.Item mb={[8, 8, 8, 0]}>
          <Heading sx={{fontSize: 7, mb: 3, color: 'accent.fg'}}>Open source</Heading>
          <Text as="p" sx={{fontSize: 4, mb: 5}}>
            Primer is open-sourced on GitHub. Contributions and feedback are welcome!
          </Text>
          <Link href="https://github.com/primer" target="_blank">
            <StyledOcticon icon={MarkGithubIcon} size={20} sx={{mr: 2}} />
            Contribute on GitHub
          </Link>
        </IndexGrid.Item>
        <IndexGrid.Item>
          <Heading sx={{fontSize: 7, mb: 3, color: 'accent.fg'}}>Keep in touch</Heading>
          <Link sx={{pt: 1, mb: 3, display: 'flex', alignItems: 'center'}} href="https://twitter.com/githubprimer" target="_blank">
            <Box sx={{mr: 2, display: 'inline-flex'}}>
              <TwitterIcon />
            </Box>
            Follow us on Twitter
          </Link>
          <Link
            sx={{pt: 1, mb: 3, display: 'flex', alignItems: 'center'}}
            href="https://github.com/primer/css/issues/new/choose"
            target="_blank"
          >
            <StyledOcticon icon={MarkGithubIcon} size={20} sx={{mr: 2}} />
            Share feedback on GitHub
          </Link>
        </IndexGrid.Item>
      </IndexGrid>
      <Box px={5} mx="auto" className="container-xl">
        <Box sx={{mt: 12, py: 5, border: 0, borderTop: 2, borderStyle: 'solid', borderColor: 'border.default'}}>
          <Text pr={1} as="span">
            Created and maintained by GitHub&#8217;s
          </Text>
          <Link href="https://primer.style/about#team">Design Infrastructure and Design Engineering teams</Link>
          <Text>.</Text>
          <Text as="p">&copy; GitHub {new Date().getFullYear()}</Text>
        </Box>
      </Box>
    </Box>
  )
}
