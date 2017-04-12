import Mission from '../components/pages/Mission/Mission'
import NavigatingRH from '../components/pages/NavigatingRH/NavigatingRH'
import Bobnet from '../components/pages/NavigatingRH/pages/Bobnet'

const Routes = [
  {
    path: '/',
    component: Mission,
    exact: true,
    title: 'Staff Development Resources',
    linkname: 'Misson',
    bgcolor: '#E4D100'
  },
  {
    path: '/navigating-rh',
    component: NavigatingRH,
    exact: false,
    title: 'Navigating Robert Half',
    linkname: 'NavigatingRH',
    bgcolor: '#00BBF8',
    routes: [
      {
        path: '/navigating-rh/bobnet',
        component: Bobnet,
        exact: false,
        title: 'Navigating Robert Half',
        linkname: 'Bobnet',
        bgcolor: '#00BBF8'
      }
    ]
  }
]

export default Routes
