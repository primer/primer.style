import React from 'react'
import {Box, Text, Heading, Flex, Relative} from '@primer/components'
import LinkLight from '../components/LinkLight'
import MemberContainer from '../components/MemberContainer'
import {ReactComponent as TeamImage} from '../svg/team-illo.svg'
import teamContent from '../data/team'

const shapes = ['hexagon', 'square', 'circle', 'diamond']
const alumni = teamContent.filter(member => member.alumni)
const currentMembers = teamContent.filter(member => !member.alumni)

export default function Team(props) {
  return (
    <Flex className="container-xl overflow-hidden" flexDirection="column" {...props}>
      <Flex
        justifyContent="space-between"
        flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'row']}
        mb={10}
        mx={-5}
      >
        <Box width={[1, 1, 1, 7 / 12]} pt={[0, 0, 0, 8]} pb={[8, 8, 8, 12]} px={5}>
          <Heading fontSize={[48, 56]} color="blue.4" lineHeight={1} mb={3} mt={[4, 4, 4, 0]}>
            Meet the team
          </Heading>
          <Text as="p" fontSize={3} color="blue.2">
            The GitHub Design Infrastructure and Design Engineering teams build and maintain Primer — this includes our CSS framework, style guide
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
        <Relative as={Box} width={[11 / 12, 8 / 12, 8 / 12, 5 / 12]} mx="auto" mb={[4, 4, 4, 0]}>
          <Flex.Item px={5} pt={[6, 0, 0, 6]}>
            <TeamImage width="100%" height={null} />
          </Flex.Item>
        </Relative>
      </Flex>
      {getMemberContent(currentMembers)}
      <Heading fontSize={5} pb={3} mb={7} lineHeight={1.25} color="orange.4">
        Team alumni
      </Heading>
      {getMemberContent(alumni)}
    </Flex>
  )
}

const getMemberContent = teamMembers => {
  return teamMembers.map((member, i) => (
    <MemberContainer key={member.name} shape={shapes[i % shapes.length]} isOdd={i % 2 === 0} member={member} />
  ))
}
