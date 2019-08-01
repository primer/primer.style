import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ChevronDown} from '@primer/octicons-react'
import {Details, Text, Relative, StyledOcticon, Absolute, Box} from '@primer/components'
// import getDirectionStyles from './getDirectionStyles'

const DropdownMenu = styled.div`
  box-shadow: 0px 4px 12px rgba(27, 31, 35, 0.15);
  border: 1px solid rgba(219, 237, 255, 0.3);
  border-radius: 4px;
  max-width: 215px;
  overflow: hidden;
`

export default function NavDropdown({children, title, color, direction = 'se', ...rest}) {
  return (
    <Box {...rest}>
      <Details
        overlay
        mx={3}
        render={({toggle}) => (
          <>
            <Text color={color} as="summary" onClick={toggle}>
              {title} <StyledOcticon icon={ChevronDown} />
            </Text>
            <Relative>
              <DropdownMenu as={Absolute} py={2} zIndex={90} bg="black" direction={direction}>
                {children}
              </DropdownMenu>
            </Relative>
          </>
        )}
      />
    </Box>
  )
}

NavDropdown.defaultProps = {
  color: 'blue.2'
}

NavDropdown.propTypes = {
  color: PropTypes.string,
  direction: PropTypes.string,
  title: PropTypes.string
}
