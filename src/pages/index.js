import React from 'react'
import {Box, Flex, Heading} from '@primer/components'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

export default function Index(props) {
  return (
    <Layout {...props}>
      <Hero />
      <Box bg="blue.1" color="black" py={12}>
        <Heading fontSize={6} textAlign="center">
          Everything in one system
        </Heading>
      </Box>
      <Footer />
    </Layout>
  )
}
