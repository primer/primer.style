import React from 'react'
import {BaseStyles, Link, ThemeProvider} from '@primer/react'
import {MDXProvider} from '@mdx-js/react'

const components = {
  a: Link,
  /*
  pre: props => props.children,
  code: Code,
  inlineCode: InlineCode,
  table: Table,
  img: Image,
  p: Paragraph,
  hr: HorizontalRule,
  blockquote: Blockquote,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  ul: List,
  ol: List.withComponent('ol'),
  dl: DescriptionList,
  */
}

export function wrapRootElement({element}) {
  return (
    <MDXProvider components={components}>
      <ThemeProvider>{element}</ThemeProvider>
    </MDXProvider>
  )
}

export function wrapPageElement({element}) {
  return (
    <>
      <ThemeProvider>
        <BaseStyles fontSize={2}>{element}</BaseStyles>
      </ThemeProvider>
    </>
  )
}
