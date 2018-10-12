import React from 'react'
import {Box, Flex} from '@primer/components'

const IndexGrid = ({children, ...rest}) => (
  <Box mx={'auto'} px={5} {...rest} className="container-xl">
    <Flex {...rest} flexWrap="wrap" alignItems="center" mx={-5}>
      {children}
    </Flex>
  </Box>
)

const Item = ({children, ...rest}) => (
  <Flex.Item width={[1, 1, 1, 6 / 12]} px={5} {...rest}>
    {children}
  </Flex.Item>
)

IndexGrid.Item = Item

export default IndexGrid
