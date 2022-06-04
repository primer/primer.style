import componentMetadata from '@primer/component-metadata'
import {Box, Heading, Text, themeGet} from '@primer/components'
import StatusLabel from '@primer/gatsby-theme-doctocat/src/components/status-label'
import fetch from 'isomorphic-unfetch'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import LinkLight from '../components/LinkLight'

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
    color: ${themeGet('colors.blue.3')};
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
    border-top: 1px solid ${themeGet('colors.gray.7')};
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
    const fetchData = async () => {
      try {
        const components = await getComponents()
        setComponents(components)
      } catch (error) {
        console.error('this is what broke', error)
      }
    }

    if (!components) {
      fetchData()
    }
  }, [components])

  console.log(123, components)

  return (
    <Layout
      pageContext={{
        frontmatter: {title: 'Component status', description: 'Status of components in the Primer Design System'},
      }}
    >
      <Box className="container-xl" px={5} pb={8}>
        <Box pt={8} pb={6}>
          <Heading fontSize={[48, 56]} color="blue.4" lineHeight={1} mb={3}>
            Component status
          </Heading>
          <Text as="p" fontSize={3} color="blue.2">
            Status of components in the Primer Design System.
            <br />
            Check out the
            <LinkLight href="https://primer.style/contribute/component-lifecycle">component lifecycle</LinkLight> for
            more information about each status.
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
                      <a href={component.implementations.viewComponent.url}>
                        <StatusLabel status={component.implementations.viewComponent.status} />
                      </a>
                    ) : (
                      <Text color="gray.5">Not available</Text>
                    )}
                  </td>
                  <td align="center" style={{whiteSpace: 'nowrap'}}>
                    {component.implementations.react ? (
                      <a href={component.implementations.react.url}>
                        <StatusLabel status={component.implementations.react.status} />
                      </a>
                    ) : (
                      <Text color="gray.5">Not available</Text>
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
    .then((res) => {
      return res.json()
    })
    .catch(handleError)

  const reactComponents = await fetch(`https://primer.github.io/react/components.json`)
    .then((res) => {
      return res.json()
    })
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
