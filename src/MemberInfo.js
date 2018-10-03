import React from 'react'
import {Text, FlexContainer, Link, Box} from '@primer/components'
import Octicon, {MarkGithub} from '@githubprimer/octicons-react'

const MemberInfo = ({member}) => (
  <Box maxWidth="600px">
    <Text is="p" fontSize={4} mb={0} color="blue.4">
      <Text fontWeight="bold">{member.name}</Text>, {member.title}
    </Text>
    <FlexContainer alignItems="center">
      <Octicon size="24" className="mr-3" icon={MarkGithub}/>
      <Link fontFamily="mono" color="blue.2" fontSize={3} href={`https://github.com/${member.github}`}>@{member.github}</Link>
    </FlexContainer>
    <Text is="p" fontSize={3} mt={4}>{member.bio}</Text>
  </Box>
)

export default MemberInfo
