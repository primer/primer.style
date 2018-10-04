import React from 'react'
import {Box} from '@primer/components'

const IndexGrid = ({children, ...rest}) => (
  <Box mx={'auto'} px={4} {...rest} className="container-xl">
    <Box mx={-4} className="d-flex flex-wrap flex-items-center">
      {children}
    </Box>
  </Box>
)

const Item = ({children, ...rest}) => (
  <Box width={[1, 1, 6/12]} px={4} {...rest}>
    {children}
  </Box>
)

IndexGrid.Item = Item

export default IndexGrid
