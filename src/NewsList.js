import React from 'react'
import {themeGet} from 'styled-system'
import {Box, Flex, Text} from '@primer/components'
import Article, {iconForType} from './Article'
import Octicon from '@githubprimer/octicons-react'
import styled from 'react-emotion'

const FilterButton = styled(props => {
  return (
    <Flex alignItems="center" is="a" {...props} color={props.selected ? 'blue.2' : 'blue.3'}>
      {props.children}
    </Flex>
  )
})`
  cursor: pointer;
  &:hover {
    color: ${props => themeGet(props.selected ? 'colors.blue.2' : 'colors.blue.3')};
    text-decoration: ${props => (props.selected ? 'none' : 'underline')};
  }
`

class NewsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {filter: null}
  }

  setFilter(type) {
    if (this.state.filter === type) {
      this.setState({filter: null})
    } else {
      this.setState({filter: type})
    }
  }

  render() {
    const {filter} = this.state
    let {items} = this.props

    const types = items.reduce((types, {type}) => {
      types.add(type)
      return types
    }, new Set())

    if (filter) {
      items = items.filter(item => item.type === filter)
    }
    return (
      <Box mt={[4, 0]}>
        <Text fontSize={2} fontFamily="mono">
          <Flex flexWrap="wrap" mb={[8, 9]} flexDirection={['column', 'column', 'row', 'row']}>
            <FilterButton mb={[3, 3, 3, 0]} mr={5} onClick={() => this.setFilter(null)} selected={filter === null}>
              All
            </FilterButton>
            {[...types].sort().map(type => {
              return (
                <FilterButton
                  mb={[3, 3, 3, 0]}
                  mr={5}
                  onClick={() => this.setFilter(type)}
                  key={type}
                  selected={filter === type}
                >
                  <Octicon icon={iconForType[type]} size={20} css={{marginRight: '8px'}} />
                  {`${type.charAt(0).toUpperCase()}${type.slice(1)}`}s
                </FilterButton>
              )
            })}
          </Flex>
        </Text>
        <Box>
          {items.sort((a, b) => new Date(b.date) - new Date(a.date)).map(article => {
            return <Article {...article} key={article.url} />
          })}
        </Box>
      </Box>
    )
  }
}

export default NewsList
