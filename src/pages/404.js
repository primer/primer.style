import React from 'react'
import {Box, Heading} from '@primer/react'
import Footer from '../components/Footer'
import Layout from '../components/Layout'

export default function FourOhFour() {
  return (
    <Layout title="404" color="white" bg="red.9">
      <Box px={5} py={10} mx="auto" className="container-xl">
        <Heading>404 Not Found</Heading>
      </Box>
      <Footer />
    </Layout>
  )
}
