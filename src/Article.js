import React from 'react'
import {Box, Link} from '@primer/components'

const Article = ({article}) => {
  return (
    <Box>
      <Link href={article.url}>{article.title}</Link>
    </Box>
  )
}

export default Article
