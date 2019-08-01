import React, {useState} from 'react'
import {Box, Flex, Text, StyledOcticon, themeGet} from '@primer/components'
import Article, {iconForType} from './Article'
import styled from 'styled-components'

export default function NewsList({items, defaultFilter, ...rest}) {
  const [filter, updateFilter] = useState(defaultFilter)
  const setFilter = value => updateFilter(filter === value ? null : value)

  const types = items.reduce((types, {type}) => {
    types.add(type)
    return types
  }, new Set())

  if (filter) {
    items = items.filter(item => item.type === filter)
  }

  // sort alphabetically by date
  items.sort((a, b) => a.date.localeCompare(b.date))

  return (
    <Box mt={[4, 0]} {...rest}>
      <Text fontSize={2} fontFamily="mono">
        <Flex flexWrap="wrap" mb={[8, 9]} flexDirection={['column', 'column', 'row', 'row']}>
          <FilterButton mb={[3, 3, 3, 0]} mr={5} onClick={() => setFilter(null)} selected={filter === null}>
            All
          </FilterButton>
          {Array.from(types)
            .sort()
            .map(type => (
              <FilterButton
                mb={[3, 3, 3, 0]}
                mr={5}
                onClick={() => setFilter(type)}
                key={type}
                selected={filter === type}
              >
                <StyledOcticon icon={iconForType[type]} size={20} mr={2} />
                {`${type.charAt(0).toUpperCase()}${type.slice(1)}`}s
              </FilterButton>
            ))}
        </Flex>
      </Text>
      <Box>
        {items.map(article => (
          <Article {...article} key={article.url} />
        ))}
      </Box>
    </Box>
  )
}

const FilterButton = styled(props => {
  return (
    <Flex alignItems="center" as="a" {...props} color={props.selected ? 'blue.2' : 'blue.3'}>
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
