import componentMetadata from '@primer/component-metadata'
import {Box, Heading, Label, Text, themeGet} from '@primer/components'
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
    background-color: ${themeGet('colors.gray.0')};
    border-top: 1px solid ${themeGet('colors.gray.3')};
    border-left: 1px solid ${themeGet('colors.gray.3')};
  }

  th:last-child {
    border-right: 1px solid ${themeGet('colors.gray.3')};
  }

  th,
  td {
    padding: ${themeGet('space.2')} ${themeGet('space.3')};
    text-align: left;
    color: ${themeGet('colors.gray.8')};
  }

  td {
    border-top: 1px solid ${themeGet('colors.gray.3')};
    border-left: 1px solid ${themeGet('colors.gray.3')};
    vertical-align: top;
  }

  td:last-child {
    border-right: 1px solid ${themeGet('colors.gray.3')};
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
          <Heading fontSize={[48, 56]} color="gray.8" lineHeight={1} mb={3}>
            Component status
          </Heading>
          <Text as="p" fontSize={3} color="gray.6">
            Status of components in the Primer Design System.
            <br />
            Check out the{' '}
            <LinkLight href="https://primer.style/contribute/component-lifecycle">component lifecycle</LinkLight> for
            more information about each status.
          </Text>
        </Box>
        {components ? (
          <Table>
            <colgroup>
              <col style={{width: '10%'}} />
              <col style={{width: '10%'}} />
              <col style={{width: '10%'}} />
              <col style={{width: '10%'}} />
              <col style={{width: '10%'}} />
              <col style={{width: '50%'}} />
            </colgroup>
            <thead>
              <tr>
                <th rowspan="2" colspan="1">
                  Component
                </th>
                <th rowspan="1" colspan="2" style={{textAlign: 'center'}}>
                  ViewComponent
                </th>
                <th rowspan="1" colspan="2" style={{textAlign: 'center'}}>
                  React
                </th>
                <th rowspan="2" colspan="1">
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
            {/* <thead>
              <tr>
                <th>Component</th>
                <th>ViewComponent</th>
                <th>Accessible</th>
                <th>React</th>
                <th>Accessible</th>
                <th>Description</th>
              </tr>
            </thead> */}
            <tbody>
              {components.map((component) => (
                <tr key={component.id}>
                  <td style={{whiteSpace: 'nowrap'}}>{component.displayName}</td>
                  <td style={{textAlign: 'center'}} align="left">
                    {component.implementations.viewComponent ? (
                      <a href={component.implementations.viewComponent.url}>
                        <StatusLabel status={component.implementations.viewComponent.status} />
                      </a>
                    ) : (
                      <Text color="gray.5">-</Text>
                    )}
                  </td>
                  <td style={{textAlign: 'center'}}>
                    <Text color="gray.5">-</Text>
                  </td>
                  <td style={{textAlign: 'center'}}>
                    {component.implementations.react ? (
                      <a href={component.implementations.react.url}>
                        <StatusLabel status={component.implementations.react.status} />
                      </a>
                    ) : (
                      <Text color="gray.5">-</Text>
                    )}
                  </td>
                  <td style={{textAlign: 'center'}}>
                    {(component.implementations.react && component.displayName === 'Select') ||
                    component.displayName === 'Action menu' ? (
                      <Label color="blue.5" bg="white" style={{border: '1px solid', borderColor: 'blue.5'}}>
                        Reviewed
                      </Label>
                    ) : (
                      <Text color="gray.5">-</Text>
                    )}
                  </td>
                  <td style={{minWidth: 400}}>
                    <Text color="gray.8">{component.description}</Text>
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
