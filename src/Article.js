import React from 'react'
import PropTypes from 'prop-types'
import {Box, Link, Text, Heading} from '@primer/components'
import Octicon from './Octicon'
import {Note, Tag, LinkExternal, Megaphone, Broadcast} from '@githubprimer/octicons-react'

export const iconForType = {
  article: Note,
  release: Tag,
  podcast: Broadcast,
  talk: Megaphone
}

const packageNames = {
  '@primer/css': 'Primer',
  primer: 'Primer',
  '@primer/components': 'Primer Components',
  octicons: 'Octicons'
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

const getTitle = (title, name, version) => {
  if (name && version) {
    return `${packageNames[name]} v${version}`
  }
  return title
}

const getDescription = description => {
  const maxWords = 30
  if (description) {
    const descriptionArray = description.split(' ')
    if (descriptionArray.length > maxWords) {
      return `${descriptionArray.slice(0, maxWords).join(' ')}...`
    } else {
      return description
    }
  }
}

const Article = ({url, title, description, date, type, name, version}) => {
  return (
    <Box mb={8} width={[1, 1, 1, 7 / 12]}>
      <Link target="_blank" href={url}>
        <Heading fontSize={4} pb={1} lineHeight={1.25} color="blue.4">
          {getTitle(title, name, version)}
        </Heading>
      </Link>
      <Box mb={3}>
        <Text fontSize={1} fontFamily="mono" color="blue.3">
          <Octicon icon={articleIcon(type)} size={16} css={{marginRight: '4px'}} />
          <Link color="blue.3" href={url}>
            {articleDomain(url)}
          </Link>
          &nbsp;&middot; {articleDate(date)}
        </Text>
      </Box>
      <Text is="p" mt={0} mb={1} color="blue.2" fontSize={3}>
        {getDescription(description)}
      </Text>
    </Box>
  )
}

Article.propTypes = {
  date: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(iconForType)),
  url: PropTypes.string,
  version: PropTypes.string
}

export default Article
