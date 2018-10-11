import React from 'react'
import {Box, Heading, Text} from '@primer/components'
import styled from 'react-emotion'
import {textAlign} from 'styled-system'
import Octicon from './Octicon'
import {RadioTower} from '@githubprimer/octicons-react'
import ButtonPromo from './ButtonPromo'
import LinkPromo from './LinkPromo'

// FIXME: when textAlign is added to LAYOUT props, we can remove this
const AlignText = styled(Text)(textAlign)

export default function HiringPromo() {
  return (
    <AlignText is="div" px={5} textAlign={['left', 'left', 'center']} className="container-lg">
      <Heading fontSize={5} mb={2} color="orange.3">
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
    </AlignText>
  )
}
