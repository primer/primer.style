import {theme} from '@primer/components'

export default {
  ...theme,
  space: theme.space.map(n => n * 2)
}
