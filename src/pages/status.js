import componentMetadata from '@primer/component-metadata'
import {Box, Heading, Text, Link, themeGet, ActionList, ActionMenu} from '@primer/react'
import fetch from 'isomorphic-unfetch'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import StatusRows from '../components/StatusRows'
import {PageLayout} from '@primer/react'

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;

  a {
    color: currentColor;

    &:hover {
      text-decoration: none;
    }
  }

  th,
  td {
    padding: ${themeGet('space.2')} ${themeGet('space.3')};
    border-color: ${themeGet('colors.border.default')};
    border-style: solid;
    border-width: 0;
    border-left-width: 1px;
    border-top-width: 1px;
    font-weight: normal;
    vertical-align: top;
  }

  th {
    background-color: ${themeGet('colors.canvas.subtle')};
    font-weight: ${themeGet('fontWeights.bold')};
    vertical-align: middle;
  }

  tbody th {
    vertical-align: top;
  }

  thead tr:first-child > th:first-child {
    border-top-left-radius: 6px;
  }

  thead tr:first-child > th:last-child {
    border-top-right-radius: 6px;
  }

  tbody tr:last-child > th:first-child {
    border-bottom-left-radius: 6px;
  }

  tbody tr:last-child > td:last-child {
    border-bottom-right-radius: 6px;
  }

  tr:first-child th:last-child,
  td:last-child {
    border-right-width: 1px;
  }

  tr:last-child td,
  tbody tr:last-child th {
    border-bottom-width: 1px;
  }

  td {
    vertical-align: top;
  }
`

const STATUS_COLORS = {
  alpha: 'severe.fg',
  beta: 'attention.fg',
  stable: 'success.fg',
  deprecated: 'danger.fg',
}

function getStatusColor(status) {
  return STATUS_COLORS[status.toLowerCase()] || 'fg.muted'
}

const initialFieldTypes = [
  {type: '', name: 'All components'},
  {type: 'Accessibility', name: 'Reviewed for accessibility'},
]

export default function StatusPage() {
  const [components, setComponents] = React.useState([])
  const [selectedField, setSelectedField] = React.useState(initialFieldTypes[0])

  React.useEffect(() => {
    getComponents()
      .then((components) => setComponents(components))
      .catch((error) => console.error(error))
  }, [])

  const statusesList = components.reduce((statusesList, {implementations}) => {
    if (implementations.viewComponent) {
      statusesList.add(implementations.viewComponent.status)
    }

    if (implementations.react) {
      statusesList.add(implementations.react.status)
    }

    return new Set([...statusesList].sort())
  }, new Set())

  const statusFieldTypes = [...statusesList].map((status) => ({
    type: status,
    name: status,
  }))

  return (
    <Layout
      colorMode={'default'}
      pageContext={{
        frontmatter: {title: 'Component status', description: 'Status of components in the Primer Design System'},
      }}
    >
      <PageLayout>
        <PageLayout.Content>
          <Box width={[1, 1, 1, 7 / 12]} pt={8} pb={6}>
            <Heading as="h1" sx={{fontSize: 7, mb: 2}}>
              Component status
            </Heading>
            <Text as="p" sx={{mt: 0, fontSize: 3}}>
              Status of components in the Primer Design System. Check out the{' '}
              <Link href="https://primer.style/contribute/component-lifecycle">component lifecycle</Link> for more
              information about each status.
            </Text>
            <ActionMenu>
              <ActionMenu.Button aria-label="Show components">Show: {selectedField.name}</ActionMenu.Button>
              <ActionMenu.Overlay width="medium">
                <ActionList selectionVariant="single">
                  <ActionList.Group>
                    {initialFieldTypes.map((field, index) => (
                      <ActionList.Item
                        key={index}
                        selected={field.type === selectedField.type}
                        onSelect={() => setSelectedField(field)}
                      >
                        {field.name}
                      </ActionList.Item>
                    ))}
                  </ActionList.Group>
                  <ActionList.Divider />
                  <ActionList.Group title="Status">
                    {statusFieldTypes.map((field, index) => (
                      <ActionList.Item
                        key={index}
                        selected={field.type === selectedField.type}
                        onSelect={() => setSelectedField(field)}
                      >
                        <ActionList.LeadingVisual>
                          <Box
                            aria-hidden="true"
                            sx={{
                              height: '12px',
                              width: '12px',
                              backgroundColor: getStatusColor(field.type),
                              borderRadius: 99,
                            }}
                          />
                        </ActionList.LeadingVisual>
                        {field.name}
                      </ActionList.Item>
                    ))}
                  </ActionList.Group>
                </ActionList>
              </ActionMenu.Overlay>
            </ActionMenu>
          </Box>
          {components ? (
            <Table>
              <colgroup>
                <col span="2" style={{textAlign: 'center'}} />
                <col span="2" style={{textAlign: 'center'}} />
              </colgroup>
              <thead>
                <tr>
                  <th width="20%" align="left" rowSpan="2" colSpan="1">
                    Component
                  </th>
                  <th width="20%" rowSpan="1" colSpan="2">
                    ViewComponent
                  </th>
                  <th width="20%" rowSpan="1" colSpan="2">
                    React
                  </th>
                  <th width="40%" align="left" rowSpan="2" colSpan="1">
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
                <StatusRows components={components} type={selectedField.type} />
              </tbody>
            </Table>
          ) : null}
        </PageLayout.Content>
      </PageLayout>
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
