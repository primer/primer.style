import React from 'react'
import {BorderBox, Box, Flex, Heading, Text} from '@primer/components'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

const gutter = 5

export default function Index(props) {
  return (
    <Layout {...props}>
      <Hero />
      <Box bg="blue.1" color="black" px={4} py={12}>
        <Box className="container-xl" px={2}>
          <Heading fontSize={6} textAlign="center" lineHeight={1}>
            Everything in one system
          </Heading>
          <Text as="p" textAlign="center" mb={4}>
            Check out our most popular tools to use in your next project:
          </Text>
          <Flex flexWrap="wrap" mr={[0, 0, -gutter]}>
            <Promo title="CSS framework">
              Utility-centric and BEM-style components to give you the building blocks for any web project.
            </Promo>
            <Promo title="React components">
              Presentational UI components with encapsulated styles and constraint-based theme props.
            </Promo>
            <Promo title="Octicons">
              Your project. GitHub's icons. Available in Ruby and JavaScript implementations.
            </Promo>
            <Promo title="Presentations">
              Slide templates that let you focus on the story without having to worry about the design details.
            </Promo>
            <Promo title="Interface guidelines">
              Projects, standards, and usage guidelines for designing GitHub interfaces.
            </Promo>
            <Promo title="Figma components">
              Design layouts, flows, wireframes, and make prototypes with Primer components in Figma.
            </Promo>
          </Flex>
        </Box>
      </Box>
      <Footer />
    </Layout>
  )
}

function Promo({title, children, ...rest}) {
  return (
    <Box pr={[0, 0, gutter]} mb={[6, 6, 4]} width={[1, 1, 1 / 2, 1 / 3]} {...rest}>
      <BorderBox height={240} bg="gray.3" border={0} borderRadius={1} />
      <Heading fontSize={4} mt={2}>
        {title}
      </Heading>
      <Text as="p" m={0}>
        {children}
      </Text>
    </Box>
  )
}
