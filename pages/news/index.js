import React from 'react'
import {Box, Text, Heading, FlexContainer, Relative, FlexItem} from '@primer/components'
import Nav from '../../src/Nav'
import BackgroundImage from '../../src/BackgroundImage'
import whatsNew from '../../src/whats-new'
import Article from '../../src/Article'

const newsLinks = () => {
  return whatsNew.map(article => {
    return <Article article={article} key={article.url} />
  })
}

const NewsIndex = () => {
  return (
    <Box>
      <Nav />
      <Box className="container-xl" p={3} pt={7} style={{overflow: 'hidden'}}>
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
              <BackgroundImage width="430px" height="340px" backgroundImage={'./meet-the-team.svg'} />
            </FlexItem>
          </Relative>
        </FlexContainer>
        {newsLinks()}
      </Box>
    </Box>
  )
}

export default NewsIndex
