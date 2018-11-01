import React from 'react'
import {Heading, Text} from '@primer/components'
import {RadioTower} from '@githubprimer/octicons-react'
import Octicon from './Octicon'
import ButtonPromo from './ButtonPromo'
import LinkPromo from './LinkPromo'

export default function HiringPromo() {
  return (
    <Text is="div" px={5} textAlign={['left', 'left', 'center']} className="container-lg">
      <Heading fontSize={5} mb={2} color="orange.4">
        <Octicon icon={RadioTower} mr={3} size={40} verticalAlign="top" />
        Join GitHub!
      </Heading>
      <Text is="p" fontSize={3} mb={5} px={[0, 0, 0, 5]} color="orange.1">
        GitHub is looking for a Web Designer to join the Site Design team. This role will work with other designers and
        engineers on non-product websites, such as event sites, annual reports, brand campaigns, and more.
      </Text>
      <LinkPromo my={[2, 0]} fontSize={2} mr={5} href="https://github.com/about/careers">
        View all open positions
      </LinkPromo>
      <ButtonPromo block my={[2, 0]} href="https://boards.greenhouse.io/github/jobs/1306815">
        Apply →
      </ButtonPromo>
    </Text>
  )
}
