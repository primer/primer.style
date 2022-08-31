import componentMetadata from '@primer/component-metadata'
import {Box, Heading, Text, Link, Label, themeGet} from '@primer/react'
import {StatusLabel} from '@primer/gatsby-theme-doctocat'
import fetch from 'isomorphic-unfetch'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'

// TODO: Make table header sticky
const Table = styled.table`
  display: block;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;

  th {
    background-color: ${themeGet('colors.canvas.subtle')};
  }

  th,
  td {
    padding: ${themeGet('space.2')} ${themeGet('space.3')};
    border-color: ${themeGet('colors.border.default')};
    border-style: solid;
    border-width: 0;
    border-left-width: 1px;
    border-top-width: 1px;
  }

  tr:first-child > th:first-child {
    border-top-left-radius: 6px;
  }

  tr:first-child > th:last-child {
    border-top-right-radius: 6px;
  }

  tr:last-child > td:first-child {
    border-bottom-left-radius: 6px;
  }

  tr:last-child > td:last-child {
    border-bottom-right-radius: 6px;
  }

  tr:first-child th:last-child,
  td:last-child {
    border-right-width: 1px;
  }

  tr:last-child td {
    border-bottom-width: 1px;
  }

  td {
    vertical-align: top;
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
      colorMode={'default'}
      pageContext={{
        frontmatter: {title: 'Component status', description: 'Status of components in the Primer Design System'},
      }}
    >
      <Box className="container-xl" px={5} pb={8}>
        <Box width={[1, 1, 1, 7 / 12]} pt={8} pb={6}>
          <Heading as="h1" sx={{fontSize: 7, mb: 2}}>
            Component status
          </Heading>
          <Text as="p" sx={{m: 0, fontSize: 3}}>
            Status of components in the Primer Design System. Check out the{' '}
            <Link href="https://primer.style/contribute/component-lifecycle">component lifecycle</Link> for more
            information about each status.
          </Text>
        </Box>
        {components ? (
          <Table>
            <col />
            <colgroup span="2" style={{textAlign: 'center'}}></colgroup>
            <colgroup span="2" style={{textAlign: 'center'}}></colgroup>
            <col />
            <thead>
              <tr>
                <th align="left" rowspan="2" colspan="1">
                  Component
                </th>
                <th rowspan="1" colspan="2">
                  ViewComponent
                </th>
                <th rowspan="1" colspan="2">
                  React
                </th>
                <th align="left" rowspan="2" colspan="1">
                  Description
                </th>
              </tr>
              <tr>
                <th>Status</th>
                <th>Accessibility</th>
                <th>Status</th>
                <th>Accessibility</th>
              </tr>
            </thead>
            <tbody>
              {console.log('COMPTNNT', components)}
              {components.map((component) => (
                <tr key={component.id}>
                  <td style={{whiteSpace: 'nowrap'}}>{component.displayName}</td>
                  <td style={{whiteSpace: 'nowrap'}}>
                    {component.implementations.viewComponent ? (
                      <Link href={component.implementations.viewComponent.url}>
                        <StatusLabel status={component.implementations.viewComponent.status} />
                      </Link>
                    ) : (
                      <Text sx={{fontSize: 1, color: 'fg.subtle'}}>Not available</Text>
                    )}
                  </td>
                  <td style={{whiteSpace: 'nowrap'}}>
                    {component.implementations.viewComponent && component.implementations.viewComponent.accessible ? (
                      <Label variant="accent">Reviewed</Label>
                    ) : (
                      <Text sx={{fontSize: 1, color: 'fg.subtle'}}>Not reviewed</Text>
                    )}
                  </td>

                  <td style={{whiteSpace: 'nowrap'}}>
                    {component.implementations.react ? (
                      <Link href={component.implementations.react.url}>
                        <StatusLabel status={component.implementations.react.status} />
                      </Link>
                    ) : (
                      <Text sx={{fontSize: 1, color: 'fg.subtle'}}>Not available</Text>
                    )}
                  </td>
                  <td style={{whiteSpace: 'nowrap'}}>
                    {component.implementations.react && component.implementations.react.accessible ? (
                      <Label variant="secondary">Reviewed</Label>
                    ) : (
                      <Text sx={{fontSize: 1, color: 'fg.subtle'}}>Not reviewed</Text>
                    )}
                  </td>
                  <td style={{minWidth: 400}}>
                    <Text sx={{fontSize: 1}}>{component.description}</Text>
                  </td>
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
    for (const {id, path, status, a11yReviewed} of data) {
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
        a11yReviewed: a11yReviewed || false,
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
