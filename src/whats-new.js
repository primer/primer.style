import releases from './data/releases'

let whatsNew = [
  {
    type: 'talk',
    title: 'Design Systems and React @ Zeit',
    url: 'https://youtube.com/watch?v=N-5TNKJ7eB0&t=15m25s',
    date: '2018-08-12'
  },
  {
    type: 'talk',
    title: 'Details on <Details> @ Brooklyn JS',
    url: 'https://github.com/muan/details-on-details',
    date: '2018-07-19'
  },
  {
    type: 'article',
    title: 'Design Systems at GitHub',
    url: 'https://medium.com/@broccolini/design-systems-at-github-c8e5378d2542',
    date: '2018-07-06'
  },
  {
    type: 'podcast',
    title: 'Design Details: #246 Cats & Design Systems ',
    url: 'https://spec.fm/podcasts/design-details/141132',
    date: '2018-05-02'
  },
  {
    type: 'podcast',
    title: 'Design Better: from design silos to design system',
    url: 'https://www.designbetter.co/podcast/diana-mounter',
    date: '2018-04-16'
  },
  {
    type: 'article',
    title: 'Using Figma designs to build the Octicons icon library',
    url: 'https://blog.github.com/2018-04-12-driving-changes-from-designs/',
    date: '2018-04-12'
  },
  {
    type: 'talk',
    title: 'Interaction of Color Systems @ CSSConf Australia',
    url: 'https://youtube.com/watch?v=AbpS3Z3xXE0',
    date: '2018-04-10'
  },
  {
    type: 'article',
    title: 'Shipping system fonts to GitHub.com',
    url: 'http://markdotto.com/2018/02/07/github-system-fonts/',
    date: '2018-02-07'
  }
]

// Adding releases
whatsNew = whatsNew.concat(releases)

export default whatsNew
