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
      <Divider />
      <HiringPromo />
      <Divider />
      <PrimerCSS />
      <Divider />
      <PrimerReact />
      <Divider />
      <AtomPlugins />
      <Divider />
      <OcticonsPromo />
      <OpenSource />
    </Box>
  )
}
