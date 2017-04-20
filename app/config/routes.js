import Mission from '../components/pages/Mission/Mission'
import NavigatingRH from '../components/pages/NavigatingRH/NavigatingRH'
import Bobnet from '../components/pages/NavigatingRH/pages/Bobnet'
import Ishare from '../components/pages/NavigatingRH/pages/Ishare'
import Mylearning from '../components/pages/NavigatingRH/pages/Mylearning'
import Rhconnect from '../components/pages/NavigatingRH/pages/Rhconnect'
import Skillport from '../components/pages/NavigatingRH/pages/Skillport'
import Processes from '../components/pages/Processes/Processes'
import ADACompliance from '../components/pages/Processes/pages/ADACompliance'
import CopyrightUsage from '../components/pages/Processes/pages/CopyrightUsage'
import Intake from '../components/pages/Processes/pages/Intake'
import LegalReview from '../components/pages/Processes/pages/LegalReview'
import LiquidPlanner from '../components/pages/Processes/pages/LiquidPlanner'
import ProjectManagement from '../components/pages/Processes/pages/ProjectManagement'
import Translation from '../components/pages/Processes/pages/Translation'
import Initiatives from '../components/pages/Initiatives/Initiatives'
import Salesforce from '../components/pages/Initiatives/pages/Salesforce'
import NHTemp from '../components/pages/Initiatives/pages/NewHireTemp'
import NHPerm from '../components/pages/Initiatives/pages/NewHirePerm'
import Workday from '../components/pages/Initiatives/pages/Workday'
import Ddbmg from '../components/pages/Initiatives/pages/Ddbmg'
import Historical from '../components/pages/Initiatives/pages/Historical'
import Deliverables from '../components/pages/Deliverables/Deliverables'
import Elearning from '../components/pages/Deliverables/pages/Elearning'
import Multimedia from '../components/pages/Deliverables/pages/Multimedia'
import VisualBranding from '../components/pages/Deliverables/pages/VisualBranding'
import InteractiveInfographic from '../components/pages/Deliverables/pages/InteractiveInfographic'
import WritingStyles from '../components/pages/Deliverables/pages/WritingStyles'
import WordChoices from '../components/pages/Deliverables/pages/WordChoices'
import Workingwithfiles from '../components/pages/WorkingWithFiles/Workingwithfiles'
import FileNaming from '../components/pages/WorkingWithFiles/pages/FileNaming'
import FolderStructure from '../components/pages/WorkingWithFiles/pages/FolderStructure'
import Gdrive from '../components/pages/WorkingWithFiles/pages/Gdrive'
import Xyleme from '../components/pages/WorkingWithFiles/pages/Xyleme'
import Cornerstone from '../components/pages/WorkingWithFiles/pages/Cornerstone'
import Screenshots from '../components/pages/WorkingWithFiles/pages/Screenshots'
import Screencasting from '../components/pages/WorkingWithFiles/pages/Screencasting'
import Tools from '../components/pages/WorkingWithFiles/pages/Tools'
import Standards from '../components/pages/WorkingWithFiles/pages/Standards'

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
    exact: true,
    title: 'Navigating Robert Half',
    linkname: 'Navigating RH',
    bgcolor: '#00BBF8',
    routes: [
      {
        path: '/navigating-rh/bobnet',
        component: Bobnet,
        linkname: 'Bobnet',
        exact: false
      },
      {
        path: '/navigating-rh/ishare',
        component: Ishare,
        linkname: 'iShare',
        exact: false
      },
      {
        path: '/navigating-rh/mylearning',
        component: Mylearning,
        linkname: 'MyLearning',
        exact: false
      },
      {
        path: '/navigating-rh/skillport',
        component: Skillport,
        linkname: 'Skillport',
        exact: false
      },
      {
        path: '/navigating-rh/rhconnect',
        component: Rhconnect,
        linkname: 'rh Connect',
        exact: false
      }
    ]
  },
  {
    path: '/processes',
    component: Processes,
    exact: true,
    title: 'Processes',
    linkname: 'Processes',
    bgcolor: '#F19700',
    routes: [
      {
        path: '/processes/intake',
        component: Intake,
        linkname: 'Intake',
        exact: false
      },
      {
        path: '/processes/project-management',
        component: ProjectManagement,
        linkname: 'Project Management',
        exact: false
      },
      {
        path: '/processes/liquid-planner',
        component: LiquidPlanner,
        linkname: 'Liquid Planner',
        exact: false
      },
      {
        path: '/processes/legal-review',
        component: LegalReview,
        linkname: 'Legal Review',
        exact: false
      },
      {
        path: '/processes/translation',
        component: Translation,
        linkname: 'Translation',
        exact: false
      },
      {
        path: '/processes/ada-compliance',
        component: ADACompliance,
        linkname: 'ADA Compliance',
        exact: false
      },
      {
        path: '/processes/copyright-usage',
        component: CopyrightUsage,
        linkname: 'Copyright Usage',
        exact: false
      }
    ]
  },
  {
    path: '/initiatives-programs',
    component: Initiatives,
    exact: true,
    title: 'Initiatives / Programs',
    linkname: 'Initiatives / Programs',
    bgcolor: '#3532B0',
    routes: [
      {
        path: '/initiatives-programs/salesforce',
        component: Salesforce,
        linkname: 'Salesforce',
        exact: false
      },
      {
        path: '/initiatives-programs/new-hire-temp',
        component: NHTemp,
        linkname: 'New Hire TEMP',
        exact: false
      },
      {
        path: '/initiatives-programs/new-hire-perm',
        component: NHPerm,
        linkname: 'New Hire PERM',
        exact: false
      },
      {
        path: '/initiatives-programs/workday',
        component: Workday,
        linkname: 'Workday',
        exact: false
      },
      {
        path: '/initiatives-programs/ddbmg',
        component: Ddbmg,
        linkname: 'DDBMG',
        exact: false
      },
      {
        path: '/initiatives-programs/historical',
        component: Historical,
        linkname: 'Historical',
        exact: false
      }
    ]
  },
  {
    path: '/deliverables',
    component: Deliverables,
    exact: true,
    title: 'Deliverables',
    linkname: 'Deliverables',
    bgcolor: '#86439C',
    routes: [
      {
        path: '/deliverables/elearning',
        component: Elearning,
        linkname: 'eLearning',
        exact: false
      },
      {
        path: '/deliverables/multimedia',
        component: Multimedia,
        linkname: 'Multimedia',
        exact: false
      },
      {
        path: '/deliverables/visual-branding',
        component: VisualBranding,
        linkname: 'Visual Branding',
        exact: false
      },
      {
        path: '/deliverables/interactive-infographic',
        component: InteractiveInfographic,
        linkname: 'Interactive Infographic',
        exact: false
      },
      {
        path: '/deliverables/writing-styles',
        component: WritingStyles,
        linkname: 'Writing Styles',
        exact: false
      },
      {
        path: '/deliverables/word-choices',
        component: WordChoices,
        linkname: 'Word Choices',
        exact: false
      }
    ]
  },
  {
    path: '/working-with-files',
    component: Workingwithfiles,
    exact: true,
    title: 'Working with Files',
    linkname: 'Working with Files',
    bgcolor: '#96C021',
    routes: [
      {
        path: '/working-with-files/file-naming',
        component: FileNaming,
        linkname: 'File Naming',
        exact: false
      },
      {
        path: '/working-with-files/folder-structure',
        component: FolderStructure,
        linkname: 'Folder Structure',
        exact: false
      },
      {
        path: '/working-with-files/gdrive',
        component: Gdrive,
        linkname: 'G Drive',
        exact: false
      },
      {
        path: '/working-with-files/xyleme',
        component: Xyleme,
        linkname: 'Xyleme',
        exact: false
      },
      {
        path: '/working-with-files/cornerstone',
        component: Cornerstone,
        linkname: 'Cornerstone (LMS)',
        exact: false
      },
      {
        path: '/working-with-files/screenshots',
        component: Screenshots,
        linkname: 'Screenshots',
        exact: false
      },
      {
        path: '/working-with-files/screencasting',
        component: Screencasting,
        linkname: 'Screencasting',
        exact: false
      },
      {
        path: '/working-with-files/tools',
        component: Tools,
        linkname: 'Tools',
        exact: false
      },
      {
        path: '/working-with-files/standards',
        component: Standards,
        linkname: 'Standards',
        exact: false
      }
    ]
  }
]

export default Routes
