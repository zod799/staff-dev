import Overview from '../components/pages/BTold/Overview'
import Top10Tips from '../components/pages/BTold/pages/contentDevStandards/Top10Tips/Top10Tips'
import RelatedWords from '../components/pages/BTold/pages/contentDevStandards/Top10Tips/Top10Tips_RelatedWords'
import The5Cs from '../components/pages/BTold/pages/contentDevStandards/The5Cs'
import AboutLorem from '../components/pages/BTold/pages/contentDevStandards/AboutLorem'
import DevelopingImages from '../components/pages/BTold/pages/contentDevStandards/DevelopingImages/DevelopingImages'
import ContentConfidentiality from '../components/pages/BTold/pages/contentDevStandards/DevelopingImages/ContentConfidentiality'
import ScreenCapture from '../components/pages/BTold/pages/contentDevStandards/DevelopingImages/ScreenCapture'
import ImageEditing from '../components/pages/BTold/pages/contentDevStandards/DevelopingImages/ImageEditing'
import ImageSizing from '../components/pages/BTold/pages/contentDevStandards/DevelopingImages/ImageSizing'
import ImageSaving from '../components/pages/BTold/pages/contentDevStandards/DevelopingImages/ImageSaving'
import SnagItCallout from '../components/pages/BTold/pages/contentDevStandards/DevelopingImages/SnagItCallout'
import PhotoshopCallout from '../components/pages/BTold/pages/contentDevStandards/DevelopingImages/PhotoshopCallout'
import DocumentingDialogBox from '../components/pages/BTold/pages/contentDevStandards/DocumentingDialogBox/DocumentingDialogBox'
import DocumentingMenus from '../components/pages/BTold/pages/contentDevStandards/DocumentingMenus'
import DocumentingToolbar from '../components/pages/BTold/pages/contentDevStandards/DocumentingToolbar'
import WordUsage from '../components/pages/BTold/pages/contentDevStandards/WordUsage/WordUsage'
import SelectChoose from '../components/pages/BTold/pages/contentDevStandards/WordUsage/SelectChoose'
import Its from '../components/pages/BTold/pages/contentDevStandards/WordUsage/Its'
import IfWhenWhether from '../components/pages/BTold/pages/contentDevStandards/WordUsage/IfWhenWhether'
import Numbers from '../components/pages/BTold/pages/contentDevStandards/WordUsage/Numbers'
import StylesWordUsage from '../components/pages/BTold/pages/contentDevStandards/WordUsage/StylesWordUsage'
import ActionWords from '../components/pages/BTold/pages/contentDevStandards/WordUsage/ActionWords'
import WordChoices from '../components/pages/BTold/pages/contentDevStandards/WordUsage/WordChoices'
import WritingGuidelines from '../components/pages/BTold/pages/contentDevStandards/WritingGuidelines/WritingGuidelines'
import ParagraphComposition from '../components/pages/BTold/pages/contentDevStandards/WritingGuidelines/WritingGuidelines_paragraph'
import ActiveVoice from '../components/pages/BTold/pages/contentDevStandards/WritingGuidelines/WritingGuidelines_activeVoice'
import SentenceFormatting from '../components/pages/BTold/pages/SentenceFormatting'
import CharacterFormatting from '../components/pages/BTold/pages/CharacterFormatting/CharacterFormatting'
import Commas from '../components/pages/BTold/pages/punctuationChecklist/Commas'
import OverviewPunctuation from '../components/pages/BTold/pages/punctuationChecklist/OverviewPunctuation'
import MicrosoftWordTips from '../components/pages/BTold/pages/MicrosoftWordTips'
import Top10TipsForIZ from '../components/pages/BTold/pages/InternationalZoneDevStandards/Top10TipsForIZ'
import SpellingForInt from '../components/pages/BTold/pages/InternationalZoneDevStandards/SpellingForInt'
import PageLevelDesign from '../components/pages/BTold/pages/PageLevelDesign'
import Glossary from '../components/pages/BTold/pages/Glossary'
import Index from '../components/pages/BTold/pages/PageIndex'

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
        exact: true,
        routes: [
          {
            path: '/content-dev-standards/top-10-tips/keep-related-words-together',
            component: RelatedWords,
            linkname: 'Related Words',
            exact: false
          }
        ]
      },
      {
        path: '/content-dev-standards/the-5-cs',
        component: The5Cs,
        exact: true,
        title: 'The 5 Cs',
        linkname: 'The 5 Cs'
      },
      {
        path: '/content-dev-standards/writing-guidelines',
        component: WritingGuidelines,
        exact: true,
        linkname: 'Writing Guidelines',
        routes: [
          {
            path: '/content-dev-standards/writing-guidelines/paragraph-composition',
            component: ParagraphComposition,
            exact: false,
            linkname: 'Paragraph Composition'
          },
          {
            path: '/content-dev-standards/writing-guidelines/active-voice',
            component: ActiveVoice,
            exact: false,
            linkname: 'Use the Active Voice'
          }
        ]
      },
      {
        path: '/content-dev-standards/documenting-menus',
        component: DocumentingMenus,
        exact: true,
        linkname: 'Documenting Menus'
      },
      {
        path: '/content-dev-standards/documenting-the-toolbar',
        component: DocumentingToolbar,
        exact: true,
        linkname: 'Documenting the Toolbar'
      },
      {
        path: '/content-dev-standards/documenting-dialog-box',
        component: DocumentingDialogBox,
        exact: true,
        linkname: 'Documenting Dialog Box'
      },
      {
        path: '/content-dev-standards/word-usage',
        component: WordUsage,
        exact: true,
        linkname: 'Word Usage',
        routes: [
          {
            path: '/content-dev-standards/word-usage/select-choose',
            component: SelectChoose,
            exact: false,
            linkname: 'Select vs. Choose'
          },
          {
            path: '/content-dev-standards/word-usage/its',
            component: Its,
            exact: false,
            linkname: 'Its vs It\'s'
          },
          {
            path: '/content-dev-standards/word-usage/if-when-whether',
            component: IfWhenWhether,
            exact: false,
            linkname: 'If vs. When vs. Whether'
          },
          {
            path: '/content-dev-standards/word-usage/numbers',
            component: Numbers,
            exact: false,
            linkname: 'Numbers'
          },
          {
            path: '/content-dev-standards/word-usage/styles-word-usage',
            component: StylesWordUsage,
            exact: false,
            linkname: 'Styles and Word Usage'
          },
          {
            path: '/content-dev-standards/word-usage/action-words',
            component: ActionWords,
            exact: false,
            linkname: 'Action Words'
          },
          {
            path: '/content-dev-standards/word-usage/word-choices',
            component: WordChoices,
            exact: false,
            linkname: 'Word Choices'
          }
        ]
      },
      {
        path: '/content-dev-standards/developing-images',
        component: DevelopingImages,
        exact: true,
        linkname: 'Developing Images',
        routes: [
          {
            path: '/content-dev-standards/developing-images/content-confidentiality',
            component: ContentConfidentiality,
            exact: false,
            linkname: 'Content & Confidentiality'
          },
          {
            path: '/content-dev-standards/developing-images/screen-capture',
            component: ScreenCapture,
            exact: false,
            linkname: 'Screen Capture Guidelines'
          },
          {
            path: '/content-dev-standards/developing-images/image-editing',
            component: ImageEditing,
            exact: false,
            linkname: 'Image Editing Guidelines'
          },
          {
            path: '/content-dev-standards/developing-images/image-sizing',
            component: ImageSizing,
            exact: false,
            linkname: 'Image Sizing Guidelines'
          },
          {
            path: '/content-dev-standards/developing-images/image-saving',
            component: ImageSaving,
            exact: false,
            linkname: 'Image Saving Guidelines'
          },
          {
            path: '/content-dev-standards/developing-images/snagit-callout-settings',
            component: SnagItCallout,
            exact: false,
            linkname: 'SnagIt Callout Settings'
          },
          {
            path: '/content-dev-standards/developing-images/photoshop-callout-settings',
            component: PhotoshopCallout,
            exact: false,
            linkname: 'Photoshop Callout Settings'
          }
        ]
      },
      {
        path: '/content-dev-standards/about-lorem',
        component: AboutLorem,
        exact: true,
        linkname: 'About Lorem Ipsum'
      }
    ]
  },
  {
    path: '/sentence-formatting',
    component: SentenceFormatting,
    exact: true,
    title: 'Sentence-level Formatting',
    linkname: 'Sentence Formatting',
    bgcolor: '#F19700'
  },
  {
    path: '/character-formatting',
    component: CharacterFormatting,
    exact: true,
    title: 'Character Formatting',
    linkname: 'Character Formatting',
    bgcolor: '#3532B0'
  },
  {
    path: '/punctuation-checklist',
    component: Commas,
    exact: true,
    title: 'Punctuation Checklist',
    linkname: 'Punctuation Checklist',
    bgcolor: '#86439C',
    routes: [
      {
        path: '/punctuation-checklist/commas',
        component: Commas,
        exact: false,
        linkname: 'Commas'
      },
      {
        path: '/punctuation-checklist/overview-of-punctuation',
        component: OverviewPunctuation,
        exact: false,
        linkname: 'Brief Overview of Punctuation'
      }
    ]
  },
  {
    path: '/microsoft-word-tips',
    component: MicrosoftWordTips,
    exact: true,
    title: 'Microsoft Word Tips',
    linkname: 'Microsoft Word Tips',
    bgcolor: '#96C021'
  },
  {
    path: '/international-zone-development-standards',
    component: Top10TipsForIZ,
    exact: true,
    title: 'International Zone Development Standards',
    linkname: 'International Zone Standards',
    bgcolor: '#E4D100',
    routes: [
      {
        path: '/international-zone-development-standards/top-10-tips-for-iz',
        component: Top10TipsForIZ,
        exact: false,
        linkname: 'Top 10 Tips For IZ'
      },
      {
        path: '/international-zone-development-standards/spelling-for-international-english',
        component: SpellingForInt,
        exact: false,
        linkname: 'Spelling for International English'
      }
    ]
  },
  {
    path: '/page-level-design',
    component: PageLevelDesign,
    exact: true,
    title: 'Page-level Design',
    linkname: 'Page-level Design',
    bgcolor: '#00BBF8'
  },
  {
    path: '/glossary',
    component: Glossary,
    exact: true,
    title: 'Glossary of Terms',
    linkname: 'Glossary of Terms',
    bgcolor: '#86439C'
  },
  {
    path: '/Index',
    component: Index,
    exact: true,
    title: 'Index',
    linkname: 'Index',
    bgcolor: '#96C021'
  }
]

export default Routes
