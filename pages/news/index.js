import React from 'react'
import {Box, Button, Text, Heading, FlexContainer, Relative, FlexItem} from '@primer/components'
import Nav from '../../src/Nav'
import BackgroundImage from '../../src/BackgroundImage'
import whatsNew from '../../src/whats-new'
import Article, {iconForType} from '../../src/Article'
import Octicon from '@githubprimer/octicons-react'

class NewsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  setFilter(type) {
    if (this.state.filter === type) {
      this.setState({filter: null})
    } else {
      this.setState({filter: type})
    }
  }

  render() {
    const {filter} = this.state
    let {items} = this.props

    const types = items.reduce((types, {type}) => {
      types.add(type)
      return types
    }, new Set())

    if (filter) {
      items = items.filter(item => item.type === filter)
    }
    return (
      <Box>
        <Box>
        <Button onClick={e => this.setFilter(null)}>
          All
        </Button>
          {[...types].sort().map(type => {
            return (
              <Button onClick={e => this.setFilter(type)} key={type}>
                <Octicon icon={iconForType[type]} />
                {type}
              </Button>
            )
          })}
        </Box>
        <Box>
          {items.sort((a, b) => new Date(b.date) - new Date(a.date)).map(article => {
            return <Article {...article} key={article.url} />
          })}
        </Box>
      </Box>
    )
  }
}

const NewsIndex = () => {
  return (
    <Box>
      <Nav />
      <Box className="container-xl" p={3} py={7} style={{overflow: 'hidden'}}>
        <FlexContainer justifyContent="space-between" flexDirection={['column', 'column', 'row', 'row']}>
          <Box maxWidth="550px">
            <Heading fontSize={7} color="blue.4">
              What’s new
            </Heading>
            <Text fontSize={4} color="blue.2">
              Keep up to date with the latest news, articles and talks from the Primer team.
            </Text>
          </Box>
          <Relative top="-100px">
            <FlexItem flexShrink="0">
              <BackgroundImage width="430px" height="340px" backgroundImage={'./meet-the-team.svg'} />
            </FlexItem>
          </Relative>
        </FlexContainer>
        <NewsList items={whatsNew} />
      </Box>
    </Box>
  )
}

export default NewsIndex
