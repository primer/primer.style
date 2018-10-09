import React from 'react'
import {Box, Text, Heading, FlexContainer, Relative, FlexItem} from '@primer/components'
import Nav from '../../src/Nav'
import MemberContainer from '../../src/MemberContainer'
import teamContent from '../../src/team-content'
import TeamImage from '../meet-the-team.svg'

const shapes = ['hexagon', 'square', 'circle', 'diamond']

const getMemberContent = () => {
  let shapeIndex = 0
  return teamContent.map((member, i) => {
    if (i === shapes.length) shapeIndex = 0
    const element = <MemberContainer shape={shapes[shapeIndex]} isOdd={i % 2 === 0} member={member} />
    shapeIndex++
    return element
  })
}

const TeamIndex = () => (
  <Box>
    <Nav />
    <Box className="container-xl" pt={7} px={5} style={{overflow: 'hidden'}}>
      <FlexContainer
        justifyContent="space-between"
        flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'row', 'row']}
        mb={10}
        mx={-5}
      >
        <Box width={[1, 1, 1, 6 / 12]} pt={[0, 0, 0, 8]} pb={[8, 8, 8, 12]} px={5}>
          <Heading fontSize={[5, 7]} color="blue.4" lineHeight={1} mb={3}>
            Meet the team
          </Heading>
          <Text fontSize={4} color="blue.2" lineHeight={1.25}>
            Get to know the team behind Primer; how we got into design systems and what we’re most looking forward to
            Meet the GitHub Design Systems team
          </Text>
        </Box>
        <Relative top="-100px">
          <FlexItem width="430px" height="340px" flexShrink="0" ml={[0, 0, 5, 0, 0]}>
            <TeamImage />
          </FlexItem>
        </Relative>
      </FlexContainer>
      {getMemberContent()}
    </Box>
  </Box>
)

export default TeamIndex
