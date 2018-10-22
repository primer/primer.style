import releases from './data/releases'

const whatsNew = [
  {
    type: 'podcast',
    title: 'React Podcast #25: Make Brilliant Messes',
    description:
      'Chantastic talks to Diana and Emily about the story of design at Github, what role React will play in future systems, and what community tools that make their job easier. They talk Rails, Lerna, monorepos, Figma, component APIs, and the importance of supporting your design system by supporting designers and engineers.',
    url: 'https://reactpodcast.com/25',
    date: '2018-10-18'
  },
  {
    type: 'talk',
    title: 'Design Systems and React @ Zeit',
    description: 'Building design systems with React at GitHub',
    url: 'https://youtube.com/watch?v=N-5TNKJ7eB0&t=15m25s',
    date: '2018-08-12'
  },
  {
    type: 'talk',
    title: 'Details on <Details> @ Brooklyn JS',
    description: 'Mu-An from our Web Systems team talks about the real details on <details>.',
    url: 'https://github.com/muan/details-on-details',
    date: '2018-07-19'
  },
  {
    type: 'article',
    title: 'Design Systems at GitHub',
    description: 'A brief history of how the team grew, what we’ve been working on, and what’s next.',
    url: 'https://medium.com/@broccolini/design-systems-at-github-c8e5378d2542',
    date: '2018-07-06'
  },
  {
    type: 'podcast',
    title: 'Design Details: #246 Cats & Design Systems ',
    description:
      'Diana and Brent dig into the tools and workflows they’ve developed when working on systems, what they’re excited about in design systems, and the technologies that are changing the way we build.',
    url: 'https://spec.fm/podcasts/design-details/141132',
    date: '2018-05-02'
  },
  {
    type: 'podcast',
    title: 'Design Better: from design silos to design system',
    description:
      'Listen as Eli and Aarron chat with Diana about growing GitHub’s design system, Primer—and hear how a little-known vegetable became part of her personal brand.',
    url: 'https://www.designbetter.co/podcast/diana-mounter',
    date: '2018-04-16'
  },
  {
    type: 'article',
    title: 'Using Figma designs to build the Octicons icon library',
    description:
      'Recently our friends at Figma announced their new Figma platform, and we’ve been really excited about its potential. We’ve immediately put the platform to use with Octicons, our SVG icon library.',
    url: 'https://blog.github.com/2018-04-12-driving-changes-from-designs/',
    date: '2018-04-12'
  },
  {
    type: 'talk',
    title: 'Interaction of Color Systems @ CSSConf Australia',
    description:
      'Diana shares her journey on working with color in design systems—one of the most contentious and critical elements of design, and a particularly challenging part of a design system. We’ll take a look at the efforts required in updating large scale web applications like Github, challenges in programmatically generating colors, color accessibility, and testing the interaction of color with other parts of a design system.',
    url: 'https://youtube.com/watch?v=AbpS3Z3xXE0',
    date: '2018-04-10'
  },
  {
    type: 'article',
    title: 'Shipping system fonts to GitHub.com',
    description:
      'Instead of showing decades old fonts that don’t take advantage of newer, high DPI screens, or dynamic font rendering, we now try to serve the best font possible based on your operating system or device. This posts explains why we made the change, how we coded and tested it, how we shipped the new fonts, and what we’ve done since initially making the move.',
    url: 'http://markdotto.com/2018/02/07/github-system-fonts/',
    date: '2018-02-07'
  }
]

export default whatsNew.concat(releases)
