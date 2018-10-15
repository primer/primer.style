import React from 'react'
import {Box, Flex} from '@primer/components'

const IndexGrid = props => {
  const {alignItems, children, flexDirection, flexWrap, ...rest} = props
  const flexProps = {alignItems, flexDirection, flexWrap}
  return (
    <Box mx={'auto'} px={5} {...rest} className="container-xl">
      <Flex {...flexProps} mx={-5}>
        {children}
      </Flex>
    </Box>
  )
}

IndexGrid.defaultProps = {
  flexWrap: 'wrap'
}

IndexGrid.Item = props => <Flex.Item width={[1, 1, 1, 6 / 12]} px={5} {...props} />

export default IndexGrid
