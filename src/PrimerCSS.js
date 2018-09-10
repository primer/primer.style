import React from 'react'
import {Box, Heading, Text, Link, FlexContainer} from 'primer-react'
import Image from './Image'
import CssImage from './CssImage'
import ButtonFill from './ButtonFill'
import ButtonOutline from './ButtonOutline'

const PrimerCSS = props => (
<Box>
  <Box my={[0, 3, 5]} mx={'auto'} px={4} className="container-xl">
    <Box mx={-4} className="d-flex flex-wrap flex-items-center">
      <Box width={[1, 1, 6/12]} px={4}>
        <Box p={[3, 3, 5]} mb={[3,3,0]} bg="blue.8" borderRadius={6}>
          <CssImage />
        </Box>
      </Box>
      <Box my={[4,3,0]} width={[1, 1, 6/12]} px={4}>
        <Heading lineHeight="1.25" color="blue.4" mb={3} fontSize={5} fontWeight='bold'>Highly resuable, flexbile styles</Heading>
        <Text is='p' color="blue.2" mb={4} fontSize={3}>Styles can be mixed and matched to achieve many different layouts, independent of their location.</Text>
        <ButtonFill mr={2} href='https://styleguide.github.com/primer/'>Documentation</ButtonFill>
        <ButtonOutline href='https://github.com/primer/primer'>GitHub</ButtonOutline>
        <Text is="p" fontSize={2} mt={4} color="blue.3" className="text-mono">npm i primer@latest</Text>
      </Box>
    </Box>
  </Box>
  <Box mt={[2, 4]} px={4} className="container-xl">
    <Box>
      <Text is="p" fontSize={5} color="blue.2" pb={2} >Install only the packages you need.</Text>
    </Box>
    <Box mx={-4} className="d-flex flex-wrap flex-items-center">
      <Box width={[1, 6/12, 6/12]} px={4}>
        <Text is="p" fontSize={2} mt={4} color="blue.3" className="text-mono">primer</Text>
        <Text is='p' color="blue.2" mb={4} fontSize={3}>This package includes all 30 Primer modules from the core, product, and marketing packages</Text>
      </Box>
      <Box width={[1, 6/12, 6/12]} px={4}>
        <Text is="p" fontSize={2} mt={4} color="blue.3" className="text-mono">primer-core</Text>
        <Text is='p' color="blue.2" mb={4} fontSize={3}>The core package contains modules that are shared between GitHub product and marketing websites</Text>
      </Box>
      <Box width={[1, 6/12, 6/12]} px={4}>
        <Text is="p" fontSize={2} mt={4} color="blue.3" className="text-mono">primer-product</Text>
        <Text is='p' color="blue.2" mb={4} fontSize={3}>The product package contains modules that are used on GitHub product websites</Text>
      </Box>
      <Box width={[1, 6/12, 6/12]} px={4}>
        <Text is="p" fontSize={2} mt={4} color="blue.3" className="text-mono">primer-marketing</Text>
        <Text is='p' color="blue.2" mb={4} fontSize={3}>The marketing package contains modules that are used on GitHub marketing websites</Text>
      </Box>
    </Box>
  </Box>
</Box>
)

export default PrimerCSS
