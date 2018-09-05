import React from 'react'
import {Box, Block, Heading, Text} from 'primer-react'
import Octicon, {iconsByName} from '@githubprimer/octicons-react'
import BoxPro from '../src/BoxPro'
import Nav from '../src/Nav'
import Hero from '../src/Hero'
import HiringPromo from '../src/HiringPromo'
import PrimerCSS from '../src/PrimerCSS'
import Divider from '../src/Divider'
import AtomPlugins from '../src/AtomPlugins'
import OcticonsPromo from '../src/OcticonsPromo'
import OpenSource from '../src/OpenSource'
import PrimerReact from '../src/PrimerReact'


export default () =>
<React.Fragment>
  <BoxPro bg='black'>
    <Nav />
    <Hero />
    <Divider my={6} />
    <HiringPromo />
    <Divider my={6} />
    <PrimerCSS />
    <Divider my={6} />
    <PrimerReact />
    <Divider my={6} />
    <AtomPlugins />
    <Divider my={6} />
    <OcticonsPromo />
    <OpenSource />
  </BoxPro>
</React.Fragment>
