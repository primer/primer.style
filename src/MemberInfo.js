import React from 'react'
import {Text, FlexContainer, Link, Box} from '@primer/components'
import Octicon, {MarkGithub} from '@githubprimer/octicons-react'
import { injectGlobal } from 'emotion'
import ReactMarkdown from 'react-markdown'

injectGlobal`
  .markdown a {
    color: #79b8ff;
  }
`

const MemberInfo = ({member}) => (
  <Box maxWidth="600px" id={member.handle}>
    <Text is="p" fontSize={4} mb={0} color="blue.4">
      <Text fontWeight="bold">{member.name}</Text>, {member.title}
    </Text>
    <FlexContainer alignItems="center" mt={2}>
      <Link
        fontFamily="mono"
        color="blue.3"
        hoverColor="blue.3"
        fontSize={3}
        href={`https://github.com/${member.github}`}
      >
        <Octicon size="24" color="blue.3" className="mr-3" icon={MarkGithub} />@{member.handle}
      </Link>
    </FlexContainer>
    <Box mt={4}>
      <Text fontWeight="bold" mr={1} fontSize={3}>
        Favorite CSS feature:
      </Text>
      <Text fontSize="3" fontFamily="mono">
        {member.cssFeature}
      </Text>
    </Box>
    <Text fontWeight="bold" is="p" fontSize={3} mt={4}>
      What drew you into design systems?
    </Text>
    <Text fontSize={3}>
      <ReactMarkdown className='markdown' source={member.questionOne} />
    </Text>
    <Text fontWeight="bold" is="p" fontSize={3} mt={4}>
      Who have you learned from or been inspired by?
    </Text>
    <Text fontSize={3}>
      <ReactMarkdown className='markdown' source={member.questionTwo} />
    </Text>
    <Text fontWeight="bold" mr={1} fontSize={3} mt={4}>
      Favorite tools:
    </Text>
    <Text fontSize={3}>
      <ReactMarkdown className='markdown' source={member.favoriteTools} />
    </Text>
  </Box>
)

export default MemberInfo
