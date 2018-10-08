import React from 'react'
import {Box, Heading, Text, FlexContainer, FlexItem} from '@primer/components'
import Octicon, {Package} from '@githubprimer/octicons-react'
import LinkLight from './LinkLight'
import CssImage from './svg/Css.svg'
import IndexGrid from './IndexGrid'
import ButtonFill from './ButtonFill'
import ButtonOutline from './ButtonOutline'

const packages = [
  {
    name: 'primer',
    description: 'This package includes all 30 Primer modules from the core, product, and marketing packages'
  },
  {
    name: 'primer-core',
    description: 'The core package contains modules that are shared between GitHub product and marketing websites'
  },
  {
    name: 'primer-product',
    description: 'The product package contains modules that are used on GitHub product websites'
  },
  {
    name: 'primer-marketing',
    description: 'The marketing package contains modules that are used on GitHub marketing websites'
  }
]

export default function PrimerCSS() {
  return (
    <Box>
      <IndexGrid my={[0, 3, 5]}>
        <IndexGrid.Item>
          <Box p={[3, 3, 5]} mb={[3, 3, 0]} bg="blue.8" borderRadius={6}>
            <CssImage />
          </Box>
        </IndexGrid.Item>
        <IndexGrid.Item my={[4, 3, 0]}>
          <Heading lineHeight="1.25" color="blue.4" mb={3} fontSize={5} fontWeight="bold">
            Highly reusable, flexible styles
          </Heading>
          <Text is="p" color="blue.2" mb={4} fontSize={3}>
            Styles can be mixed and matched to achieve many different layouts, independent of their location.
          </Text>
          <ButtonFill mr={2} href="https://styleguide.github.com/primer/">
            Documentation
          </ButtonFill>
          <ButtonOutline href="https://github.com/primer/primer">GitHub</ButtonOutline>
          <Text is="p" fontSize={2} mt={4} color="blue.3" className="text-mono">
            npm i primer@latest
          </Text>
        </IndexGrid.Item>
      </IndexGrid>
      <IndexGrid>
        <IndexGrid.Item mt={2} mb={4} pb={2}>
          <Text fontSize={5} color="blue.2" lineHeight={1.25}>
            Install only the packages you need.
          </Text>
        </IndexGrid.Item>
      </IndexGrid>
      <Box px={4} className="container-xl">
        <Box mx={-4} className="d-flex flex-wrap flex-items-start">
          {packages.map(({name, description}) => (
            <FlexContainer key={name} width={[1, 6 / 12, 6 / 12]} px={4} mb={[3, 4, 4, 0]}>
              <FlexItem color="blue.3" mr={3}>
                <Octicon icon={Package} height={40} verticalAlign="middle" />
              </FlexItem>
              <FlexItem>
                <Text is="p" fontSize={2} mt={1} className="text-mono">
                  <LinkLight href={`https://npm.im/${name}`}>{name}</LinkLight>
                </Text>
                <Text is="p" color="blue.2" mb={4} fontSize={3}>
                  {description}
                </Text>
              </FlexItem>
            </FlexContainer>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
