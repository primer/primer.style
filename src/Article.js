import React from 'react'
import {Box, Link, Text, FlexContainer} from '@primer/components'
import Octicon, {Note, Tag, LinkExternal, Megaphone, Broadcast} from '@githubprimer/octicons-react'

const articleIcon = type => {
  switch (type) {
    case 'article':
      return Note
    case 'release':
      return Tag
    case 'podcast':
      return Broadcast
    case 'talk':
      return Megaphone
    default:
      return LinkExternal
  }
}

const articleDomain = url => {
  return url.substring(url.indexOf('//') + 2, url.indexOf('/', 9))
}

const articleDate = date => {
  const dateNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const day = new Date(date)
  const now = new Date()
  return `${dateNames[day.getMonth()]} ${day.getDate()}${
    now.getFullYear() > day.getFullYear() ? `, ${day.getFullYear()}` : ''
  }`
}

const Article = ({article}) => {
  return (
    <FlexContainer mb={5} alignItems="start">
      <Box mr={3} pt={1}>
        <Octicon icon={articleIcon(article.type)} size={32} />
      </Box>
      <Box>
        <Link href={article.url}>
          <Text f={4}>{article.title}</Text>
        </Link>
        <Box>
          <Text fontFamily="mono" f={1} color="blue.3">
            <Link color="blue.3" href={article.url}>
              {articleDomain(article.url)}
            </Link>{' '}
            &middot; {articleDate(article.date)}
          </Text>
        </Box>
      </Box>
    </FlexContainer>
  )
}

export default Article
