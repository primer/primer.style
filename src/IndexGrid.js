import React from 'react'
import {Box, FlexContainer, FlexItem} from '@primer/components'

const IndexGrid = ({alignItems, children, flexWrap, ...rest}) => {
  const flexProps = {alignItems, flexWrap}
  return (
    <Box mx={'auto'} px={5} {...rest} className="container-xl">
      <FlexContainer {...flexProps} mx={-5}>
        {children}
      </FlexContainer>
    </Box>
  )
}

const Item = ({children, ...rest}) => (
  <FlexItem width={[1, 1, 1, 6 / 12]} px={5} {...rest}>
    {children}
  </FlexItem>
)

IndexGrid.Item = Item

export default IndexGrid
