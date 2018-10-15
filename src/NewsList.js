import React from 'react'
import {themeGet} from 'styled-system'
import {Link, Box, FlexContainer} from '@primer/components'
import Article, {iconForType} from './Article'
import Octicon from '@githubprimer/octicons-react'
import styled from 'react-emotion'

const FilterButton = styled(props => {
  return (
    <Link {...props} color={props.selected ? 'white' : 'blue.3'} mr={3}>
      {props.children}
    </Link>
  )
})`
  cursor: pointer;
  &:hover {
    color: ${props => themeGet(props.selected ? 'colors.white' : 'colors.blue.3')};
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
        <FlexContainer flexWrap="wrap" mb={[4, 7]}>
          <FilterButton mb={[3, 0]} mr={3} onClick={() => this.setFilter(null)} selected={filter === null}>
            All
          </FilterButton>
          {[...types].sort().map(type => {
            return (
              <FilterButton
                mb={[3, 0]}
                mr={3}
                onClick={() => this.setFilter(type)}
                key={type}
                selected={filter === type}
              >
                <Box display="inline-block" mr={1}>
                  <Octicon icon={iconForType[type]} />
                </Box>
                {`${type.charAt(0).toUpperCase()}${type.slice(1)}`}s
              </FilterButton>
            )
          })}
        </FlexContainer>
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
