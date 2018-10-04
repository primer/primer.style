import React from 'react'
import {Box, Heading, Text, Link} from '@primer/components'
import AtomImage from './svg/Atom.svg'
import ButtonFill from './ButtonFill'
import ButtonOutline from './ButtonOutline'
import IndexGrid from './IndexGrid'

const AtomPlugins = props => (
  <IndexGrid my={[0, 3, 6]} flexDirection={[`row`, `row`, `row-reverse`]}>
      <IndexGrid.Item mb={[3,3,0]}>
        <AtomImage />
      </IndexGrid.Item>
      <IndexGrid.Item my={[4,3,0]}>
        <Heading color="blue.4" mb={3} pr={[0,0, 0, 3]} fontSize={5} lineHeight="1.25" fontWeight='bold'>A better development experience with Atom</Heading>
        <Text color="blue.2" is='p' fontSize={3} mb={4} pr={[0,0, 0, 3]}>Install this custom Atom package to autocomplete classnames for Primer CSS and rails helpers for Octicons</Text>
        <ButtonFill mr={2} href='https://atom.io/packages/autocomplete-primer'>Install package</ButtonFill>
        <ButtonOutline href='https://atom.io/'>Get Atom</ButtonOutline>
        <Text is="p" fontSize={2} mt={4} color="blue.3" className="text-mono">apm install autocomplete-primer</Text>
      </IndexGrid.Item>
  </IndexGrid>
)

export default AtomPlugins
