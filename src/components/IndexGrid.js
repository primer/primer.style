import React from 'react'
import {Box} from '@primer/react'

const IndexGrid = (props) => {
  const {alignItems, children, flexDirection, flexWrap, ...rest} = props
  const flexProps = {alignItems, flexDirection, flexWrap}
  return (
    <Box mx={'auto'} px={5} {...rest} className="container-xl">
      <Box display="flex" {...flexProps} mx={-5}>
        {children}
      </Box>
    </Box>
  )
}

IndexGrid.defaultProps = {
  flexWrap: 'wrap',
}

IndexGrid.Item = (props) => <Box width={[1, 1, 1, 6 / 12]} px={5} {...props} />

export default IndexGrid
