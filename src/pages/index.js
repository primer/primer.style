import React from 'react'
import {BorderBox, Box, Flex, Heading, Text} from '@primer/components'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import {ReactComponent as CSSImage} from '../svg/css.svg'
import {ReactComponent as ComponentsImage} from '../svg/components.svg'
import {ReactComponent as PresentationsImage} from '../svg/presentations.svg'
import {ReactComponent as OcticonsImage} from '../svg/octicons.svg'
import {ReactComponent as GuidelinesImage} from '../svg/guidelines.svg'

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
            <Promo title="CSS framework" image={CSSImage}>
              Utility-centric and BEM-style components to give you the building blocks for any web project.
            </Promo>
            <Promo title="React components" image={ComponentsImage}>
              Presentational UI components with encapsulated styles and constraint-based theme props.
            </Promo>
            <Promo title="Octicons" image={OcticonsImage}>
              Your project. GitHub's icons. Available in Ruby and JavaScript implementations.
            </Promo>
            <Promo title="Presentations" image={PresentationsImage}>
              Slide templates that let you focus on the story without having to worry about the design details.
            </Promo>
            <Promo title="Interface guidelines" image={GuidelinesImage}>
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

function Promo({title, image: Image = 'div', children, ...rest}) {
  return (
    <Box pr={[0, 0, gutter]} mb={[6, 6, 4]} width={[1, 1, 1 / 2, 1 / 3]} {...rest}>
      <BorderBox as={Image} border={0} borderRadius={2} bg="gray.3" width="100%" height={null} minHeight={220} />
      <Heading fontSize={4} mt={1}>
        {title}
      </Heading>
      <Text as="p" m={0}>
        {children}
      </Text>
    </Box>
  )
}
