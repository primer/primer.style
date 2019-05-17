import React from 'react'
import Hero from '../src/Hero'
import HiringPromo from '../src/HiringPromo'
import PrimerCSS from '../src/PrimerCSS'
import Divider from '../src/Divider'
import AtomPlugins from '../src/AtomPlugins'
import OcticonsPromo from '../src/OcticonsPromo'
import OpenSource from '../src/OpenSource'
import PrimerReact from '../src/PrimerReact'

function Index() {
  return (
    <>
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
    </>
  )
}

export default Index
