import React from 'react'
import {Box, FlexContainer, FlexItem} from '@primer/components'

const IndexGrid = ({children, ...rest}) => (
  <Box mx={'auto'} px={4} {...rest} className="container-xl">
    <FlexContainer {...rest} flexWrap="wrap" alignItems="center" mx={-4}>
      {children}
    </FlexContainer>
  </Box>
)

const Item = ({children, ...rest}) => (
  <FlexItem width={[1, 1, 6/12]} px={4} {...rest}>
    {children}
  </FlexItem>
)

IndexGrid.Item = Item

export default IndexGrid
