import React from 'react'
import PropTypes from 'prop-types'
import {Box, Link, Text} from '@primer/components'
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
    <Box mb={7}>
      <Link href={url}>
        <Text fontFamily="mono" fontSize={3}>
          {title}
        </Text>
      </Link>
      <Box mb={3}>
        <Text fontSize={1} color="blue.1">
          <Link color="blue.1" href={url}>
            {articleDomain(url)}
          </Link>
          &nbsp;&middot; {articleDate(date)}
        </Text>
      </Box>
      <Box>
        <Box display="inline-block" borderRadius="3" borderColor="blue.3" border="1" px={1} color="blue.3">
          <Octicon icon={articleIcon(type)} size={16} />
          <Text fontSize={1}>{` ${type.charAt(0).toUpperCase()}${type.slice(1)}`}</Text>
        </Box>
      </Box>
    </Box>
  )
}

Article.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(iconForType)),
  url: PropTypes.string
}

export default Article
