import React from 'react'
import {Box, FlexContainer, Relative} from '@primer/components'
import Article, {iconForType} from './Article'
import ButtonOutline from './ButtonOutline'
import ButtonFill from './ButtonFill'
import Octicon from '@githubprimer/octicons-react'
import styled from 'react-emotion'

const FilterButton = styled(props => {
  const Tag = props.selected ? ButtonFill : ButtonOutline
  return <Tag {...props}>{props.children}</Tag>
})`
  cursor: pointer;
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
      <Relative css={{top: `-32px`}}>
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
                {`${type.charAt(0).toUpperCase()}${type.slice(1)}`}
              </FilterButton>
            )
          })}
        </FlexContainer>
        <Box>
          {items.sort((a, b) => new Date(b.date) - new Date(a.date)).map(article => {
            return <Article {...article} key={article.url} />
          })}
        </Box>
      </Relative>
    )
  }
}

export default NewsList
