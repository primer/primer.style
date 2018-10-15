import React from 'react'
import {Box, Text, Heading, FlexContainer, FlexItem} from '@primer/components'
import Nav from '../../src/Nav'
import whatsNew from '../../src/whats-new'
import NewsList from '../../src/NewsList'
import NewsImage from '../news-illo.svg'

const NewsIndex = () => {
  return (
    <Box>
      <Nav />
      <Box className="container-xl" pt={7} px={5} style={{overflow: 'hidden'}}>
        <FlexContainer
          justifyContent="space-between"
          flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'row', 'row']}
          mb={10}
          mx={-5}
        >
          <Box width={[1, 1, 1, 7 / 12]} pt={[0, 0, 0, 8]} pb={[6, 6, 6, 8]} px={5}>
            <Heading fontSize={[5, 7]} color="blue.4" lineHeight={1} mb={3}>
              What’s new
            </Heading>
            <Text is="p" fontSize={3} color="blue.2">
              Keep up to date with the latest articles, podcasts, releases and talks from the GitHub Design Systems
              team.
            </Text>
          </Box>
          <FlexItem width="435px" height="241px" pt={[0, 0, 0, 6]} css={{flexShrink: 0}} ml={[0, 0, 5, 0, 0]}>
            <NewsImage />
          </FlexItem>
        </FlexContainer>
        <NewsList items={whatsNew} />
      </Box>
    </Box>
  )
}

export default NewsIndex
