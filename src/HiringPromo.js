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
        GitHub is looking for a Product Design Manager to join the organization. Our growing team of design leaders help shape our products, people, and process. Join us and help us make sure we’re solving the right problems with the best solutions.
      </Text>
      <LinkPromo my={[2, 0]} fontSize={2} mr={5} href="https://github.com/about/careers">
        View all open positions
      </LinkPromo>
      <ButtonPromo block my={[2, 0]} href="https://boards.greenhouse.io/github/jobs/1470915">
        Apply →
      </ButtonPromo>
    </Text>
  )
}
