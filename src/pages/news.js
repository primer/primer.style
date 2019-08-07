import React, {useState} from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {Box, Text, Heading, Flex, Relative} from '@primer/components'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import NewsList from '../components/NewsList'
import {ReactComponent as NewsImage} from '../svg/news-illo.svg'
import posts from '../data/posts.yml'

const LATEST_RELEASE_API_URL = `https://releases-git-lint-actions.primer.now.sh/api`

export default function NewsPage(props) {
  const {
    allPrimerRelease: {nodes: oldReleases}
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
  /* eslint-disable-next-line no-unused-vars */
  const [releases, updateReleases] = useState(oldReleases)
  const [updated, setUpdated] = useState(false)

  for (const release of releases) {
    release.name = release.npm ? release.npm.name : null
    release.type = 'release'
    release.url = release.github.html_url
    delete release.description
  }

  const newsItems = posts.concat(releases)
  newsItems.sort((a, b) => b.date.localeCompare(a.date))

  if (!updated) {
    setTimeout(async () => {
      const latest = await getReleases()
      // console.warn('latest release data:', latest)
      updateReleases(latest)
      setUpdated(true)
    }, 10)
  }

  return (
    <Layout title="News" {...props}>
      <Flex className="container-xl overflow-hidden" flexDirection="column" pt={8} px={5}>
        <Flex
          justifyContent="space-between"
          flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'row']}
          mb={[0, 0, 10]}
          mx={-5}
        >
          <Box width={[1, 1, 1, 7 / 12]} pt={[0, 0, 0, 8]} pb={[6, 5, 5, 6]} px={5}>
            <Heading fontSize={[48, 56]} color="blue.4" lineHeight={1} mb={3}>
              What’s new
            </Heading>
            <Text as="p" fontSize={3} color="blue.2">
              Keep up to date with the latest articles, podcasts, releases and talks from the GitHub Design Systems
              team.
            </Text>
          </Box>

          <Relative width={[11 / 12, 8 / 12, 8 / 12, 5 / 12]} mx="auto" mb={[4, 4, 4, 0]}>
            <Flex.Item px={5} style={{flexShrink: 0}}>
              <NewsImage width="100%" height={null} />
            </Flex.Item>
          </Relative>
        </Flex>
        <NewsList items={newsItems} />
      </Flex>
    </Layout>
  )
}

async function getReleases() {
  const {releases} = await fetch(LATEST_RELEASE_API_URL).then(res => res.json())
  return releases
}
