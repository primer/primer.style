import React from 'react'
import {Heading, Text} from '@primer/components'
import AtomImage from './svg/Atom.svg'
import ButtonFill from './ButtonFill'
import ButtonOutline from './ButtonOutline'
import IndexGrid from './IndexGrid'

export default function AtomPlugins() {
  return (
    <IndexGrid my={[0, 3, 6]} flexDirection={[`row`, `row`, `row-reverse`]}>
      <IndexGrid.Item mb={[5, 5, 5, 0]}>
        <AtomImage width="100%" height={null} />
      </IndexGrid.Item>
      <IndexGrid.Item my={[4, 3, 0]}>
        <Heading color="blue.4" mb={3} pr={[0, 0, 0, 3]} fontSize={5} lineHeight="1.25" fontWeight="bold">
          A better development experience with Atom
        </Heading>
        <Text color="blue.2" is="p" fontSize={3} mb={5} pr={[0, 0, 0, 3]}>
          Install this custom Atom package to autocomplete classnames for Primer CSS and rails helpers for Octicons
        </Text>
        <ButtonFill my={[2, 0]} mr={2} href="https://atom.io/packages/autocomplete-primer">
          Install package
        </ButtonFill>
        <ButtonOutline my={[2, 0]} href="https://atom.io/">
          Get Atom
        </ButtonOutline>
        <Text is="p" fontSize={2} mt={5} color="blue.3" fontFamily="mono">
          apm install autocomplete-primer
        </Text>
      </IndexGrid.Item>
    </IndexGrid>
  )
}
