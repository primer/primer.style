import React, {useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {color} from 'styled-system'
import {ChevronDown} from '@primer/octicons-react'
import {Relative, StyledOcticon, Absolute, Box} from '@primer/components'
// import getDirectionStyles from './getDirectionStyles'

const DropdownMenu = styled.div`
  box-shadow: 0px 4px 12px rgba(27, 31, 35, 0.15);
  border: 1px solid rgba(219, 237, 255, 0.3);
  border-radius: 4px;
  max-width: 215px;
  overflow: hidden;
`

const Summary = styled.summary`
  color: inherit;
  cursor: pointer;
  list-style: none;

  &::before,
  &::-webkit-details-marker { display: none; }
`

export default function NavDropdown({children, title, direction = 'se', ...rest}) {
  const ref = useRef(null)

  useEffect(() => {
    document.body.addEventListener('click', clickCheck)
    return () => document.body.removeEventListener('click', clickCheck)
  })

  function clickCheck(event) {
    const {current: details} = ref
    if (!details.contains(event.target)) {
      details.open = false
    }
  }

  return (
    <Box as="details" {...rest} ref={ref}>
      <Summary>
        {title} <StyledOcticon icon={ChevronDown} />
      </Summary>
      <Relative>
        <DropdownMenu as={Absolute} py={2} bg="black" direction={direction}>
          {children}
        </DropdownMenu>
      </Relative>
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
