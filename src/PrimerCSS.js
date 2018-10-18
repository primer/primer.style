import React from 'react'
import {Box, Heading, Text, Flex} from '@primer/components'
import {Package} from '@githubprimer/octicons-react'
import Octicon from './Octicon'
import CssImage from './svg/Css.svg'
import IndexGrid from './IndexGrid'
import ButtonFill from './ButtonFill'
import ButtonOutline from './ButtonOutline'

export default function PrimerCSS() {
  return (
    <Box>
      <IndexGrid my={[0, 3, 8]}>
        <IndexGrid.Item>
          <Box p={[3, 3, 5, 8]} mb={[5, 5, 5, 0]} bg="blue.8" borderRadius={6}>
            <CssImage width="100%" height={null} />
          </Box>
        </IndexGrid.Item>
        <IndexGrid.Item my={[4, 3, 0]}>
          <Heading lineHeight="1.25" color="blue.4" mb={3} fontSize={5} fontWeight="bold">
            Highly reusable, flexible styles
          </Heading>
          <Text is="p" color="blue.2" mb={5} fontSize={3}>
            Styles can be mixed and matched to achieve many different layouts, independent of their location.
          </Text>
          <ButtonFill my={[2, 0]} mr={2} href="https://styleguide.github.com/primer/">
            Documentation
          </ButtonFill>
          <ButtonOutline my={[2, 0]} href="https://github.com/primer/primer">
            GitHub
          </ButtonOutline>
          <Text is="p" fontSize={2} mt={5} color="blue.3" fontFamily="mono">
            npm i primer@latest
          </Text>
        </IndexGrid.Item>
      </IndexGrid>
      <IndexGrid>
        <IndexGrid.Item mt={[3, 2, 2]} mb={5} pb={2}>
          <Text fontSize={5} color="blue.2" lineHeight={1.25}>
            Install only the packages you need.
          </Text>
        </IndexGrid.Item>
      </IndexGrid>
      <Box px={5} className="container-xl">
        <Flex mx={-5} flexWrap="wrap" alignItems="start">
          <Flex width={[1, 6 / 12, 6 / 12]} px={5} mb={[3, 4, 4, 0]}>
            <Flex.Item color="blue.3" mr={3}>
              <Octicon icon={Package} height={40} verticalAlign="middle" />
            </Flex.Item>
            <Flex.Item>
              <Text is="p" fontSize={2} color="blue.3" mt={1} fontFamily="mono">
                primer
              </Text>
              <Text is="p" color="blue.2" mb={5} fontSize={3}>
                This package includes all 30 Primer modules from the core, product, and marketing packages
              </Text>
            </Flex.Item>
          </Flex>
          <Flex width={[1, 6 / 12, 6 / 12]} px={5} mb={[3, 4, 4, 0]}>
            <Flex.Item color="blue.3" mr={3}>
              <Octicon icon={Package} height={40} verticalAlign="middle" />
            </Flex.Item>
            <Flex.Item>
              <Text is="p" fontSize={2} color="blue.3" mt={1} fontFamily="mono">
                primer-core
              </Text>
              <Text is="p" color="blue.2" mb={5} fontSize={3}>
                The core package contains modules that are shared between GitHub product and marketing websites
              </Text>
            </Flex.Item>
          </Flex>
          <Flex width={[1, 6 / 12, 6 / 12]} px={5} mb={[3, 4, 4, 0]} align="top">
            <Flex.Item color="blue.3" mr={3}>
              <Octicon icon={Package} height={40} verticalAlign="middle" />
            </Flex.Item>
            <Flex.Item>
              <Text is="p" fontSize={2} color="blue.3" mt={1} fontFamily="mono">
                primer-product
              </Text>
              <Text is="p" color="blue.2" mb={5} fontSize={3}>
                The product package contains modules that are used on GitHub product websites
              </Text>
            </Flex.Item>
          </Flex>
          <Flex width={[1, 6 / 12, 6 / 12]} px={5} mb={[3, 4, 4, 0]} align="top">
            <Flex.Item color="blue.3" mr={3}>
              <Octicon icon={Package} height={40} verticalAlign="middle" />
            </Flex.Item>
            <Flex.Item>
              <Text is="p" fontSize={2} color="blue.3" mt={1} fontFamily="mono">
                primer-marketing
              </Text>
              <Text is="p" color="blue.2" mb={5} fontSize={3}>
                The marketing package contains modules that are used on GitHub marketing websites
              </Text>
            </Flex.Item>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}
