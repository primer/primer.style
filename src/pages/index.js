import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import HiringPromo from '../components/HiringPromo'
import PrimerCSS from '../components/PrimerCSS'
import Divider from '../components/Divider'
import AtomPlugins from '../components/AtomPlugins'
import OcticonsPromo from '../components/OcticonsPromo'
import OpenSource from '../components/OpenSource'
import PrimerReact from '../components/PrimerReact'

export default function Index(props) {
  return (
    <Layout title="Home" {...props}>
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
    </Layout>
  )
}
