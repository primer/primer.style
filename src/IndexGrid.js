import React from 'react'
import {Box, FlexContainer, FlexItem} from '@primer/components'

const IndexGrid = props => {
  const {alignItems, children, flexDirection, flexWrap, ...rest} = props
  const flexProps = {alignItems, flexDirection, flexWrap}
  return (
    <Box mx={'auto'} px={5} {...rest} className="container-xl">
      <FlexContainer {...flexProps} mx={-5}>
        {children}
      </FlexContainer>
    </Box>
  )
}

IndexGrid.Item = props => <FlexItem width={[1, 1, 1, 6 / 12]} px={5} {...props} />

export default IndexGrid
