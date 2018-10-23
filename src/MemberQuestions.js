import React from 'react'
import {Text, Heading, Link, Box} from '@primer/components'
import Octicon from './Octicon'
import {MarkGithub} from '@githubprimer/octicons-react'
import {injectGlobal} from 'emotion'
import ReactMarkdown from 'react-markdown'

injectGlobal`
  .markdown a {
    color: #79b8ff;
  }
`

const MemberInfo = ({member, colorName}) => {
  return (
    <Box width={[1, 1, 1, 1 / 2]} id={member.handle}>
      <Heading fontSize={5} pb={3} lineHeight={1.25} color={`${colorName}.4`}>
        {member.name}, {member.title}
      </Heading>
      <Link
        mt={2}
        fontFamily="mono"
        color={`${colorName}.3`}
        hoverColor={`${colorName}.3`}
        fontSize={2}
        href={`https://github.com/${member.handle}`}
      >
        <Octicon icon={MarkGithub} size={24} verticalAlign="middle" color={`${colorName}.3`} mr={3} />@{member.handle}
      </Link>
      <Text fontFamily="mono" color={`${colorName}.4`} is="div" fontSize={3} mt={7} mb={0}>
        What drew you into design systems?
      </Text>
      <Text color={`${colorName}.1`} fontSize={3}>
        <ReactMarkdown className="markdown" source={member.questionOne} />
      </Text>
      <Text fontFamily="mono" color={`${colorName}.4`} is="div" fontSize={3} mt={7} mb={0}>
        Who have you learned from or been inspired by?
      </Text>
      <Text color={`${colorName}.1`} fontSize={3}>
        <ReactMarkdown className="markdown" source={member.questionTwo} />
      </Text>
      <Text fontFamily="mono" color={`${colorName}.4`} is="div" fontSize={3} mt={7} mb={0}>
        Favorite tools
      </Text>
      <Text color={`${colorName}.1`} fontSize={3}>
        <ReactMarkdown className="markdown" source={member.favoriteTools} />
      </Text>
    </Box>
  )
}

MemberInfo.defaultProps = {
  color: 'blue'
}

export default MemberInfo
