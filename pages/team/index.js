import React from 'react'
import {Box, Text, Heading, Flex, Relative} from '@primer/components'
import Nav from '../../src/Nav'
import LinkLight from '../../src/LinkLight'
import MemberContainer from '../../src/MemberContainer'
import teamContent from '../../src/team-content'
import TeamImage from '../team-illo.svg'

const shapes = ['hexagon', 'square', 'circle', 'diamond']

const getMemberContent = () => {
  let shapeIndex = 0
  return teamContent.map((member, i) => {
    if (i === shapes.length) shapeIndex = 0
    const element = <MemberContainer key={member.name} shape={shapes[shapeIndex]} isOdd={i % 2 === 0} member={member} />
    shapeIndex++
    return element
  })
}

const TeamIndex = () => (
  <Box>
    <Nav />
    <Box className="container-xl" pt={8} px={5} css={{overflow: 'hidden'}}>
      <Flex
        justifyContent="space-between"
        flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'row', 'row']}
        mb={10}
        mx={-5}
      >
        <Box width={[1, 1, 1, 7 / 12]} pt={[0, 0, 0, 8]} pb={[8, 8, 8, 12]} px={5}>
          <Heading fontSize={[48, 56]} color="blue.4" lineHeight={1} mb={3} mt={[4, 4, 4, 0]}>
            Meet the team
          </Heading>
          <Text is="p" fontSize={3} color="blue.2">
            The GitHub Design Systems team builds and maintains Primer — this includes our CSS framework, style guide
            documentation, Octicons, numerous tools and libraries that support design and front-end, and our up-coming
            React.js component library.
          </Text>

          <Text fontSize={3} color="blue.2">
            Our team officially formed in early 2016 with just two team members, and keeps on growing, with
            opportunities for apprenticeships and internships in the future. Keep an eye on the GitHub&nbsp;
            <LinkLight href="https://github.com/about/careers">careers page</LinkLight> if you’re interested in new
            openings on our team.
          </Text>
        </Box>
        <Relative width={[11 / 12, 8 / 12, 8 / 12, 5 / 12]} mx={'auto'} mb={[4, 4, 4, 0]}>
          <Flex.Item px={5}>
            <TeamImage width="100%" height={null} />
          </Flex.Item>
        </Relative>
      </Flex>
      {getMemberContent()}
    </Box>
  </Box>
)

export default TeamIndex
