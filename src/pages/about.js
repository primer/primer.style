import React from 'react'
import Team from '../components/Team'
import Layout from '../components/Layout'

export default function AboutPage(props) {
  return (
    <Layout title="Team" {...props}>
      <Team pt={8} px={5} />
    </Layout>
  )
}
