import React from 'react'
import {Box, Heading, Link, Text, ThemeProvider} from '@primer/react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import {ReactComponent as CSSImage} from '../svg/css.svg'
import {ReactComponent as ComponentsImage} from '../svg/components.svg'
import {ReactComponent as ViewComponentsImage} from '../svg/view-components.svg'
import {ReactComponent as OcticonsImage} from '../svg/octicons.svg'
import {ReactComponent as GuidelinesImage} from '../svg/guidelines.svg'
import {ReactComponent as FigmaImage} from '../svg/figma.svg'

const gutter = 5

export default function Index() {
  return (
    <Layout>
      <Hero />
      <ThemeProvider colorMode="light">
        <Box sx={{backgroundColor: 'accent.subtle', color: 'fg.default'}} px={4} py={12}>
          <Box className="container-xl" px={2}>
            <Heading sx={{fontSize: 6, textAlign: 'center', lineHeight: 1}}>Everything in one system</Heading>
            <Text as="p" textAlign="center" mb={8}>
              Check out our most popular tools to use in your next project
            </Text>
            <Box display="flex" flexWrap="wrap" mr={[0, 0, -gutter]}>
              <Promo title="CSS framework" image={CSSImage} href="/css">
                Utility-centric and BEM-style components to give you the building blocks for any web project.
              </Promo>
              <Promo title="React components" image={ComponentsImage} href="/components">
                Presentational UI components with encapsulated styles and constraint-based theme props.
              </Promo>
              <Promo title="ViewComponents" image={ViewComponentsImage} href="/view-components">
                Build component-driven UI in Rails with ViewComponents.
              </Promo>
              <Promo title="Octicons" image={OcticonsImage} href="/octicons">
                Your project. GitHub’s icons. Available in Ruby and JavaScript implementations.
              </Promo>
              <Promo title="Interface guidelines" image={GuidelinesImage} href="/design">
                Principles, standards, and usage guidelines for designing GitHub interfaces.
              </Promo>
              <Promo title="Figma components" image={FigmaImage} href="/design/tools/figma">
                Design layouts, flows, wireframes, and make prototypes with Primer components in Figma.
              </Promo>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
      <Footer />
    </Layout>
  )
}

const Promo = ({title, href, image: Image = 'div', children, ...rest}) => (
  <Box pr={[0, 0, gutter]} mb={[6, 6, 8]} width={[1, 1, 1 / 2, 1 / 3]} {...rest}>
    <Link sx={{display: 'block', mb: 1}} href={href}>
      <Box as={Image} bg="black" border={0} borderRadius={2} width="100%" height={null} minHeight={220} />
    </Link>
    <Heading fontSize={4}>
      <Link sx={{color: 'inherit', underline: false}} href={href}>
        {title}
      </Link>
    </Heading>
    <Text as="p" m={0}>
      {children}
    </Text>
  </Box>
)
