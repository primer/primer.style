import React from 'react'
import {Box, Text, Heading, FlexContainer, Relative, FlexItem} from '@primer/components'
import Nav from '../../src/Nav'
import whatsNew from '../../src/whats-new'
import NewsList from '../../src/NewsList'
import TeamImage from '../meet-the-team.svg'

const NewsIndex = () => {
  return (
    <Box>
      <Nav />
      <Box className="container-xl" p={3} py={7} style={{overflow: 'hidden'}}>
        <FlexContainer justifyContent="space-between" flexDirection={['column', 'column', 'row', 'row']}>
          <Box maxWidth="550px">
            <Heading fontSize={7} color="blue.4">
              What’s new
            </Heading>
            <Text fontSize={4} color="blue.2">
              Keep up to date with the latest news, articles and talks from the Primer team.
            </Text>
          </Box>
          <Relative top="-100px">
            <FlexItem flexShrink="0">
              <TeamImage />
            </FlexItem>
          </Relative>
        </FlexContainer>
        <NewsList items={whatsNew} />
      </Box>
    </Box>
  )
}

export default NewsIndex
