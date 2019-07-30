import React from 'react'
import {BorderBox, Box, Flex, Heading, Link, Text} from '@primer/components'
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
            <Promo title="CSS framework" image={CSSImage} href="/css">
              Utility-centric and BEM-style components to give you the building blocks for any web project.
            </Promo>
            <Promo title="React components" image={ComponentsImage} href="/components">
              Presentational UI components with encapsulated styles and constraint-based theme props.
            </Promo>
            <Promo title="Octicons" image={OcticonsImage} href="https://octicons.github.com">
              Your project. GitHub’s icons. Available in Ruby and JavaScript implementations.
            </Promo>
            <Promo title="Presentations" image={PresentationsImage} href="/presentations">
              Slide templates that let you focus on the story without having to worry about the design details.
            </Promo>
            <Promo title="Interface guidelines" image={GuidelinesImage} href="/design">
              Projects, standards, and usage guidelines for designing GitHub interfaces.
            </Promo>
            <Promo title="Figma components" href="/figma">
              Design layouts, flows, wireframes, and make prototypes with Primer components in Figma.
            </Promo>
          </Flex>
        </Box>
      </Box>
      <Footer />
    </Layout>
  )
}

const A = props => <Link {...props} />
A.defaultProps = {
  color: 'inherit',
  underline: false
}

const Promo = ({title, href, image: Image = 'div', children, ...rest}) => (
  <Box pr={[0, 0, gutter]} mb={[6, 6, 4]} width={[1, 1, 1 / 2, 1 / 3]} {...rest}>
    <A href={href} display="block" mb={1}>
      <BorderBox as={Image} bg="black" border={0} borderRadius={2} width="100%" height={null} minHeight={220} />
    </A>
    <Heading fontSize={4}>
      <A href={href}>{title}</A>
    </Heading>
    <Text as="p" m={0}>
      {children}
    </Text>
  </Box>
)
