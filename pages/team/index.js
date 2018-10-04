import React from 'react'
import {Box, Text, Heading, Link, FlexContainer, Relative, FlexItem, Absolute} from '@primer/components'
import Octicon, {MarkGithub} from '@githubprimer/octicons-react'
import Nav from '../../src/Nav'
import Member from  '../../src/Member'
import teamContent from '../../src/team-content'
import BackgroundImage from  '../../src/BackgroundImage'

const shapes = ['square', 'circle', 'hexigon', 'diamond']

const getMemberContent = () => {
  let shapeIndex = 0
  return teamContent.map((member, i) => {
    if (i === shapes.length) shapeIndex = 0
    const element = <Member shape={shapes[shapeIndex]} isOdd={i % 2 === 0} member={member} />
    shapeIndex++
    return element
  })
}

export default () => (
  <Box>
    <Nav />
    <Box className='container-xl' p={3} pt={7} style={{overflow: 'hidden'}}>
      <FlexContainer justifyContent='space-between' flexDirection={['column', 'column', 'row', 'row',]}>
        <Box maxWidth='550px'>
          <Heading fontSize={7} color='blue.4'>Meet the team</Heading>
          <Text fontSize={4} color='blue.2'>
            Get to know the team behind Primer; how we got into design systems and what we’re most looking forward to.
          </Text>
        </Box>
        <Relative top='-100px'>
          <FlexItem flexShrink="0">
            <BackgroundImage width='430px' height='340px' backgroundImage={`url('./meet-the-team.svg')`}/>
          </FlexItem>
        </Relative>
      </FlexContainer>
      {getMemberContent()}
    </Box>
  </Box>
)
