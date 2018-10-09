import React from 'react'
import {Text, Heading, FlexContainer, Link, Box} from '@primer/components'
import Octicon, {MarkGithub} from '@githubprimer/octicons-react'
import {injectGlobal} from 'emotion'
import ReactMarkdown from 'react-markdown'

injectGlobal`
  .markdown a {
    color: #79b8ff;
  }
`

const MemberInfo = ({member}) => (
  <Box maxWidth="600px" id={member.handle}>
    <Heading fontSize={5} pb={3} lineHeight={1.25} color="blue.4">
      {member.name}, {member.title}
    </Heading>
    <FlexContainer alignItems="center" mt={2}>
      <Link
        fontFamily="mono"
        color="blue.3"
        hoverColor="blue.3"
        fontSize={2}
        href={`https://github.com/${member.github}`}
      >
        <Octicon size="24" color="blue.3" className="mr-3" icon={MarkGithub} />@{member.handle}
      </Link>
    </FlexContainer>
    <Text fontWeight="bold" is="div" fontSize={3} mt={3} mb={3}>
      What drew you into design systems?
    </Text>
    <Text fontSize={3}>
      <ReactMarkdown className="markdown" source={member.questionOne} />
    </Text>
    <Text fontWeight="bold" is="div" fontSize={3} mt={6} mb={3}>
      Who have you learned from or been inspired by?
    </Text>
    <Text fontSize={3}>
      <ReactMarkdown className="markdown" source={member.questionTwo} />
    </Text>
    <Text fontWeight="bold" is="div" mr={1} fontSize={3} mt={6} mb={3}>
      Favorite tools
    </Text>
    <Text fontSize={3}>
      {member.favoriteTools}
    </Text>
  </Box>
)

export default MemberInfo
