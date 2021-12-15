import componentMetadata from '@primer/component-metadata'
import {Heading, Text, Box} from '@primer/components'
import StatusLabel from '@primer/gatsby-theme-doctocat/src/components/status-label'
import fetch from 'isomorphic-unfetch'
import React from 'react'
import Layout from '../components/Layout'

export default function NewsPage() {
  const [components, setComponents] = React.useState(null)

  React.useEffect(() => {
    getComponents().then((components) => setComponents(components))
  }, [])

  return (
    <Layout pageContext={{frontmatter: {title: 'Status'}}}>
      <div className="container-xl">
        {components ? (
          <table style={{width: '100%'}}>
            <colgroup>
              <col style={{width: '20%'}} />
              <col style={{width: '20%'}} />
              <col style={{width: '20%'}} />
              <col style={{width: '40%'}} />
            </colgroup>
            <thead>
              <tr>
                <th align="left">Component</th>
                {/* TODO: How would we add a Figma column? Where would that data come from ? */}
                <th align="left">ViewComponent</th>
                <th align="left">React</th>
                <th align="left">Description</th>
              </tr>
            </thead>
            <tbody>
              {components.map((component) => (
                <tr key={component.id}>
                  <td>{component.displayName}</td>
                  <td>
                    {component.implementations.viewComponent ? (
                      <a href={component.implementations.viewComponent.url}>
                        <StatusLabel status={component.implementations.viewComponent.status} />
                      </a>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {component.implementations.react ? (
                      <a href={component.implementations.react.url}>
                        <StatusLabel status={component.implementations.react.status} />
                      </a>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>{component.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    </Layout>
  )
}

async function getComponents() {
  // Get component status data
  const viewComponents = await fetch(`https://primer.style/view-components/components.json`).then((res) => res.json())

  const reactComponents = await fetch(`https://primer.style/react/components.json`).then((res) => res.json())

  // TODO: handle errors

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
