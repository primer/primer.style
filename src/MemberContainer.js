import React from 'react'
import {themeGet} from 'styled-system'
import {Flex, Box, theme} from '@primer/components'
import MemberQuestions from './MemberQuestions'
import AvatarShape from './AvatarShape'
import DotsSVG from './svg/dots.svg'

const Dots = ({shape, color}) => {
  const css = {
    position: 'absolute',
    height: '92px',
    width: '168px',
    fill: color
  }
  switch (shape) {
    case 'hexagon':
      css.top = '230px'
      css.left = '130px'
      css.transform = 'rotate(180deg)'
      break
    case 'square':
      css.top = '250px'
      css.left = '75px'
      break
    case 'circle':
      css.top = '236px'
      css.left = '181px'
      css.transform = 'rotate(180deg)'
      break
    case 'diamond':
      css.top = '245px'
      css.left = '65px'
      break
    default:
  }
  return <DotsSVG shape={shape} style={css} />
}

const direction = isOdd =>
  isOdd
    ? ['column-reverse', 'column-reverse', 'column-reverse', 'row-reverse', 'row-reverse']
    : ['column-reverse', 'column-reverse', 'column-reverse', 'row', 'row']

class Member extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isHovering: false}
  }
  toggleHoverState() {
    this.setState({
      isHovering: !this.state.isHovering
    })
  }
  render() {
    const {member, isOdd, shape, ...rest} = this.props
    const colorName = member.color || 'blue'
    const color = themeGet(`colors.${colorName}.4`)(rest)
    const avatarImage = this.state.isHovering ? member.gif : member.avatar

    return (
      <Flex
        mb={12}
        justifyContent="flex-end"
        alignItems={['center', 'center', 'center', 'initial', 'initial']}
        flexDirection={direction(isOdd)}
      >
        <MemberQuestions member={member} colorName={colorName} />
        <Flex.Item mb={[6, 8, 8, 0, 0]} css={{flexShrink: 0, position: 'relative'}}>
          <Box mr={isOdd ? [0, 0, 0, 12, 12] : 0} ml={isOdd ? 0 : [0, 0, 12, 12, 12]}>
            <AvatarShape shape={shape} src={avatarImage} bg={color} href={`https://github.com/${member.handle}`} onMouseOver={this.toggleHoverState.bind(this)} onMouseOut={this.toggleHoverState.bind(this)} />
            <Dots shape={shape} color={color} />
          </Box>
        </Flex.Item>
      </Flex>
    )
  }
}

Member.defaultProps = {theme}

export default Member
