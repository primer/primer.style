import React, {useEffect, useState} from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {Box, Text, Heading} from '@primer/react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import NewsList from '../components/NewsList'
import {ReactComponent as NewsImage} from '../svg/news-illo.svg'
import posts from '../data/posts.yml'

const LATEST_RELEASE_API_URL = `https://releases-git-lint-actions.primer.now.sh/api`

export default function NewsPage() {
  const {
    allPrimerRelease: {nodes: oldReleases},
  } = useStaticQuery(graphql`
    query newsReleases {
      allPrimerRelease {
        nodes {
          date
          title
          version
          npm {
            name
          }
          github {
            html_url
          }
        }
      }
    }
  `)

  // console.warn('default releases:', defaultReleases)
  const [releases, setReleases] = useState(oldReleases)

  useEffect(() => {
    getReleases().then((latest) => setReleases(latest))
  }, [])

  const newsItems = releases
    // tidy up release data for the Article component
    .map((release) => ({
      ...release,
      name: release.npm ? release.npm.name : null,
      type: 'release',
      url: release.github.html_url,
      description: null,
    }))
    .concat(posts)
    .sort((a, b) => b.date.localeCompare(a.date))

  return (
    <Layout pageContext={{frontmatter: {title: 'News'}}}>
      <Box className="container-xl overflow-hidden" flexDirection="column" pt={8} px={5}>
        <Box
          justifyContent="space-between"
          display={'flex'}
          flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'row']}
          mb={[0, 0, 10]}
          mx={-5}
        >
          <Box width={[1, 1, 1, 7 / 12]} pt={[0, 0, 0, 8]} pb={[6, 5, 5, 6]} px={5}>
            <Heading sx={{fontSize: [48, 56], color: 'accent.fg', lineHeight: 1, mb: 3}}>What’s new</Heading>
            <Text as="p" sx={{fontSize: 3}}>
              Keep up to date with the latest articles, podcasts, releases and talks from the GitHub Design Systems
              team.
            </Text>
          </Box>

          <Box position={'relative'} width={[11 / 12, 8 / 12, 8 / 12, 5 / 12]} mx="auto" mb={[4, 4, 4, 0]}>
            <Box px={5} style={{flexShrink: 0}}>
              <NewsImage width="100%" height={null} />
            </Box>
          </Box>
        </Box>
        <NewsList items={newsItems} />
      </Box>
    </Layout>
  )
}

async function getReleases() {
  const {releases} = await fetch(LATEST_RELEASE_API_URL).then((res) => res.json())
  return releases
}
