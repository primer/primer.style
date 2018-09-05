import React from 'React'
import {Box, Heading, Text, Link} from 'primer-react'
import Image from './Image'
import CssImage from './CssImage'
import ButtonFill from './ButtonFill'
import ButtonOutline from './ButtonOutline'

const PrimerCSS = props => (
  <Box>
    <Box my={[0, 3, 5]} className='container-xl p-responsive mx-auto p-responsive d-flex flex-items-center flex-wrap flex-md-nowrap flex-md-row-reverse'>
      <Box my={[4,3,0]} width={[1, 1, 6/12]} pl={[0,3,5]} >
        <Heading lineHeight="1.25" color="blue.4" mb={3} fontSize={5} fontWeight='bold'>Highly resuable, flexbile styles</Heading>
        <Text is='p' color="blue.2" mb={4} fontSize={3}>Styles can be mixed and matched to achieve many different layouts, independent of their location.</Text>
        <ButtonFill mr={2} href='https://styleguide.github.com/primer/'>Documentation</ButtonFill>
        <ButtonOutline href='https://github.com/primer/primer'>GitHub</ButtonOutline>
        <Text is="p" fontSize={2} mt={4} color="blue.3" className="text-mono">npm i @primer/css</Text>
      </Box>
      <Box px={0,6,0} width={[1, 10/12, 6/12]} m='auto'>
      <Box p={[3, 3, 5]} bg="blue.8" borderRadius={6}>
        <CssImage />
      </Box>
      </Box>
    </Box>
    <Box mt={[2, 4]} className="container-xl p-responsive">
      <Box>
        <Text is="p" fontSize={5} color="blue.2" pb={2} >Install only the packages you need.</Text>
      </Box>

      <div className="d-flex flex-wrap gutter">
        <Box width={[1, 6/12, 6/12]} px={2}>
          <Box px={2}>
            <Text is="p" fontSize={2} mt={4} color="blue.3" className="text-mono">@primer/css</Text>
            <Text is='p' color="blue.2" mb={4} fontSize={3}>This package includes all 30 Primer modules from the core, product, and marketing packages</Text>
          </Box>
        </Box>
        <Box width={[1, 6/12, 6/12]} px={2}>
          <Box px={2}>
            <Text is="p" fontSize={2} mt={4} color="blue.3" className="text-mono">@primer/css-core</Text>
            <Text is='p' color="blue.2" mb={4} fontSize={3}>The core package contains modules that are shared between GitHub product and marketing websites</Text>
          </Box>
        </Box>
        <Box width={[1, 6/12, 6/12]} px={2}>
          <Box px={2}>
            <Text is="p" fontSize={2} mt={4} color="blue.3" className="text-mono">@primer/css-product</Text>
            <Text is='p' color="blue.2" mb={4} fontSize={3}>The product package contains modules that are used on GitHub product websites</Text>
          </Box>
        </Box>
        <Box width={[1, 6/12, 6/12]} px={2}>
          <Box px={2}>
            <Text is="p" fontSize={2} mt={4} color="blue.3" className="text-mono">@primer/css-marketing</Text>
            <Text is='p' color="blue.2" mb={4} fontSize={3}>The marketing package contains modules that are used on GitHub marketing websites</Text>
          </Box>
        </Box>
        </div>

    </Box>
  </Box>
)

export default PrimerCSS
