import React from 'react'
import {Box} from '@primer/components'
import Nav from '../src/Nav'
import Hero from '../src/Hero'
import HiringPromo from '../src/HiringPromo'
import PrimerCSS from '../src/PrimerCSS'
import Divider from '../src/Divider'
import AtomPlugins from '../src/AtomPlugins'
import OcticonsPromo from '../src/OcticonsPromo'
import OpenSource from '../src/OpenSource'
import PrimerReact from '../src/PrimerReact'

export default function Index() {
  return (
    <Box>
      <Nav />
      <Hero />
      <Divider my={[9, 12]} />
      <HiringPromo />
      <Divider my={[9, 12]} />
      <PrimerCSS />
      <Divider my={[9, 12]} />
      <PrimerReact />
      <Divider my={[9, 12]} />
      <AtomPlugins />
      <Divider my={[9, 12]} />
      <OcticonsPromo />
      <OpenSource />
    </Box>
  )
}
