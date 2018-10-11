import React from 'react'
import PropTypes from 'prop-types'
import {Box, Link, Text, FlexContainer} from '@primer/components'
import Octicon, {Note, Tag, LinkExternal, Megaphone, Broadcast} from '@githubprimer/octicons-react'

export const iconForType = {
  article: Note,
  release: Tag,
  podcast: Broadcast,
  talk: Megaphone
}

const articleIcon = type => iconForType[type] || LinkExternal

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

const Article = ({url, title, date, type}) => {
  return (
    <FlexContainer mb={5} alignItems="start">
      <Box mr={3} pt={1}>
        <Octicon icon={articleIcon(type)} size={32} />
      </Box>
      <Box>
        <Link href={url}>
          <Text f={4}>{title}</Text>
        </Link>
        <Box>
          <Text fontFamily="mono" f={1} color="blue.3">
            <Link color="blue.3" href={url}>
              {articleDomain(url)}
            </Link>{' '}
            &middot; {articleDate(date)}
          </Text>
        </Box>
      </Box>
    </FlexContainer>
  )
}

Article.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(iconForType)),
  url: PropTypes.string
}

export default Article
