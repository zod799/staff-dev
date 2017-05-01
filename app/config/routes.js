import Overview from '../components/pages/BTold/Overview'
import Top10Tips from '../components/pages/BTold/Top10Tips'

const Routes = [
  {
    path: '/',
    component: Overview,
    exact: true,
    title: 'Overview',
    linkname: 'Overview',
    bgcolor: '#E4D100'
  },
  {
    path: '/content-dev-standards',
    component: Top10Tips,
    exact: true,
    title: 'Content Development Standards',
    linkname: 'Content Standards',
    bgcolor: '#00BBF8',
    routes: [
      {
        path: '/content-dev-standards/top-10-tips',
        component: Top10Tips,
        linkname: 'Top 10 Tips',
        exact: false
      }
    ]
  }
]

export default Routes
