import React from 'react'
import PropTypes from 'prop-types'
import {Box, Link, Text, Heading, StyledOcticon} from '@primer/react'
import {NoteIcon, TagIcon, MegaphoneIcon, BroadcastIcon} from '@primer/octicons-react'

export const iconForType = {
  article: NoteIcon,
  release: TagIcon,
  podcast: BroadcastIcon,
  talk: MegaphoneIcon,
}

const packageNames = {
  '@primer/css': 'Primer CSS',
  primer: 'Primer CSS',
  '@primer/react': 'Primer React',
  '@primer/octicons': 'Octicons',
}

const articleIcon = (type) => iconForType[type] || LinkExternal

const articleDomain = (url) => {
  return url.substring(url.indexOf('//') + 2, url.indexOf('/', 9))
}

const now = new Date()
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const articleDate = (date) => {
  const day = new Date(date)
  return `${monthNames[day.getMonth()]} ${day.getDate()}${
    now.getFullYear() > day.getFullYear() ? `, ${day.getFullYear()}` : ''
  }`
}

const getTitle = (title, name, version) => {
  if (name && version) {
    return `${packageNames[name] || name} v${version}`
  }
  return title
}

const getDescription = (description) => {
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
    <Box pb={8} width={[1, 1, 1, 7 / 12]}>
      <Link target="_blank" href={url}>
        <Heading sx={{fontSize: 4, pb: 1, lineHeight: 1.25}}>{getTitle(title, name, version)}</Heading>
      </Link>
      <Box>
        <Text sx={{m: 0, fontSize: 1, fontFamily: 'mono'}}>
          <Link href={url}>
            <StyledOcticon icon={articleIcon(type)} size={16} sx={{mr: 1}} />
            {articleDomain(url)}
          </Link>
          &nbsp;&middot; {articleDate(date)}
        </Text>
      </Box>
      <Text sx={{m: 0, fontSize: 3}} as="p">
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
  version: PropTypes.string,
}

export default Article
