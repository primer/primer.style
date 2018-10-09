import React from 'react'
import {Box, Text, Heading, FlexContainer, Relative, FlexItem} from '@primer/components'
import Nav from '../../src/Nav'
import Member from '../../src/Member'
import teamContent from '../../src/team-content'
import BackgroundImage from '../../src/BackgroundImage'

const shapes = ['hexagon', 'square', 'circle', 'diamond']

const getMemberContent = () => {
  let shapeIndex = 0
  return teamContent.map((member, i) => {
    if (i === shapes.length) shapeIndex = 0
    const element = <Member shape={shapes[shapeIndex]} isOdd={i % 2 === 0} member={member} />
    shapeIndex++
    return element
  })
}

const TeamIndex = () => (
  <Box>
    <Nav />
          <Heading fontSize={7} color="blue.4">
    <Box className="container-xl" pt={7} px={5} style={{overflow: 'hidden'}}>
      <FlexContainer justifyContent="space-between" flexDirection={['column', 'column', 'row', 'row']} mb={10} mx={-5}>
        <Box width={[1, 1, 1, 6/12]} pt={8} pb={12} px={5}>
            Meet the team
          </Heading>
          <Text fontSize={4} color="blue.2">
            Get to know the team behind Primer; how we got into design systems and what we’re most looking forward to.
          </Text>
        </Box>
        <Relative top="-100px">
          <FlexItem flexShrink="0">
            <BackgroundImage width="430px" height="340px" backgroundImage={'./meet-the-team.svg'} />
          </FlexItem>
        </Relative>
      </FlexContainer>
      {getMemberContent()}
    </Box>
  </Box>
)

export default TeamIndex
