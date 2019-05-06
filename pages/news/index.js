import React from 'react'
import {ThemeProvider} from 'styled-components'
import {Box, Text, Heading, theme, Flex, Relative, BaseStyles} from '@primer/components'
import {Header, JumpNav, ResponsiveJumpNav} from '@primer/blueprints'
import styled from 'styled-components'
import whatsNew from '../../src/whats-new'
import NewsList from '../../src/NewsList'
import NewsImage from '../news-illo.svg'

const Anchor = styled.div`
  display: block;
  position: relative;
  top: -70px;
  visibility: hidden;
`

const NewsIndex = () => {
  return (
    <BaseStyles>
      <ThemeProvider theme={theme}>
        <Box bg="black" color="blue.2">
          <Header root="https://primer.style" title="Primer" subtitle="Blueprints" next>
            <JumpNav />
          </Header>
          <Box className="container-xl" pt={8} px={5} style={{overflow: 'hidden'}}>
            <Flex
              justifyContent="space-between"
              flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'row', 'row']}
              mb={[0, 0, 10]}
              mx={-5}
            >
              <Box width={[1, 1, 1, 7 / 12]} pt={[0, 0, 0, 8]} pb={[6, 5, 5, 6]} px={5}>
                <Heading fontSize={[48, 56]} color="blue.4" lineHeight={1} mb={3}>
                  What’s new
                </Heading>
                <Text as="p" fontSize={3} color="blue.2">
                  Keep up to date with the latest articles, podcasts, releases and talks from the GitHub Design Systems
                  team.
                </Text>
              </Box>

              <Relative width={[11 / 12, 8 / 12, 8 / 12, 5 / 12]} mx={'auto'} mb={[4, 4, 4, 0]}>
                <Flex.Item px={5} style={{flexShrink: 0}}>
                  <NewsImage width="100%" height={null} />
                </Flex.Item>
              </Relative>
            </Flex>
            <NewsList items={whatsNew} />
          </Box>
          <Anchor id="jumpnav" />
          <Box display={['block', 'block', 'block', 'none']}>
            <ResponsiveJumpNav />
          </Box>
        </Box>
      </ThemeProvider>>
    </BaseStyles>
  )
}

export default NewsIndex
