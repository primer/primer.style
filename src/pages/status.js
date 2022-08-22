import componentMetadata from '@primer/component-metadata'
import {Box, Heading, Text, Link, themeGet} from '@primer/react'
import {StatusLabel} from '@primer/gatsby-theme-doctocat'
import fetch from 'isomorphic-unfetch'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'

// TODO: Make table header sticky
const Table = styled.table`
  display: block;
  width: 100%;
  overflow: auto;
  position: relative;
  border-collapse: collapse;

  th {
    font-family: ${themeGet('fonts.mono')};
    font-weight: ${themeGet('fontWeights.normal')};
    color: ${themeGet('colors.accent.fg')};
  }

  th,
  td {
    padding: ${themeGet('space.2')} ${themeGet('space.3')};
  }

  th:first-child,
  td:first-child {
    padding-left: 0;
  }

  th:last-child,
  td:last-child {
    padding-right: 0;
  }

  td {
    border-top: 1px solid ${themeGet('colors.border.default')};
    vertical-align: top;
  }

  th {
    position: sticky;
    top: 0;
  }

  img {
    background-color: transparent;
  }
`

export default function StatusPage() {
  const [components, setComponents] = React.useState(null)

  React.useEffect(() => {
    getComponents()
      .then((components) => setComponents(components))
      .catch((error) => console.error(error))
  }, [])

  return (
    <Layout
      pageContext={{
        frontmatter: {title: 'Component status', description: 'Status of components in the Primer Design System'},
      }}
    >
      <Box className="container-xl" px={5} pb={8}>
        <Box pt={8} pb={6}>
          <Heading sx={{color: 'accent.fg', fontSize: [48, 56], lineHeight: 1, mb: 3}}>Component status</Heading>
          <Text as="p" sx={{fontSize: 3}}>
            Status of components in the Primer Design System. <br />
            Check out the <Link href="https://primer.style/contribute/component-lifecycle">
              component lifecycle
            </Link>{' '}
            for more information about each status.
          </Text>
        </Box>
        {components ? (
          <Table>
            <colgroup>
              <col style={{width: '15%'}} />
              <col style={{width: '15%'}} />
              <col style={{width: '15%'}} />
              <col style={{width: '55%'}} />
            </colgroup>
            <thead>
              <tr>
                <th align="left">Component</th>
                {/* TODO: How would we add a Figma column? Where would that data come from ? */}
                <th>ViewComponent</th>
                <th>React</th>
                <th align="left">Description</th>
              </tr>
            </thead>
            <tbody>
              {components.map((component) => (
                <tr key={component.id}>
                  <td style={{whiteSpace: 'nowrap'}}>{component.displayName}</td>
                  <td align="center" style={{whiteSpace: 'nowrap'}}>
                    {component.implementations.viewComponent ? (
                      <Link href={component.implementations.viewComponent.url}>
                        <StatusLabel status={component.implementations.viewComponent.status} />
                      </Link>
                    ) : (
                      <Text sx={{color: 'fg.subtle'}}>Not available</Text>
                    )}
                  </td>
                  <td align="center" style={{whiteSpace: 'nowrap'}}>
                    {component.implementations.react ? (
                      <Link href={component.implementations.react.url}>
                        <StatusLabel status={component.implementations.react.status} />
                      </Link>
                    ) : (
                      <Text sx={{color: 'fg.subtle'}}>Not available</Text>
                    )}
                  </td>
                  <td style={{minWidth: 400}}>{component.description}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : null}
      </Box>
    </Layout>
  )
}

async function getComponents() {
  const handleError = (error) => {
    console.error(error)
  }

  // Get component status data
  const viewComponents = await fetch(`https://primer.github.io/view_components/components.json`)
    .then((res) => res.json())
    .catch(handleError)

  const reactComponents = await fetch(`https://primer.github.io/react/components.json`)
    .then((res) => res.json())
    .catch(handleError)

  const implementations = {
    react: {
      url: 'https://primer.style/react',
      data: reactComponents,
    },
    viewComponent: {
      url: 'https://primer.style/view-components',
      data: viewComponents,
    },
  }

  const components = {}

  for (const [implementation, {url, data}] of Object.entries(implementations)) {
    for (const {id, path, status} of data) {
      if (!(id in components)) {
        components[id] = {
          id,
          displayName: idToDisplayName(id),
          description: '',
          implementations: {},
        }
      }

      components[id].implementations[implementation] = {
        status: status.charAt(0).toUpperCase() + status.slice(1), // Capitalize the first letter
        url: `${url}${path}`,
      }
    }
  }

  for (const component of Object.values(componentMetadata.components)) {
    if (component.id in components) {
      components[component.id].displayName = component.displayName
      components[component.id].description = component.description
    }
  }

  return Object.values(components).sort((a, b) => a.id.localeCompare(b.id))
}

// Capitalize the first letter of the id and replace _ with spaces
function idToDisplayName(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).replace(/_/g, ' ')
}
