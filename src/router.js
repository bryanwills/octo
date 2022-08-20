import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import { store } from '/src/store'
import {
  SET_DOCUMENT,
  SET_SHOW_WELCOME,
} from '/src/store/actions.js'
import { setTitle } from '/src/common/title.js'
import { globalConfig } from '/src/global'

// export const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     {
//       path: '/index.html',
//       meta: { track: true },
//       redirect: { name: 'editor' },
//     },
//     {
//       path: '/home',
//       name: 'home',
//       meta: { track: true },
//       component: Home,
//       beforeEnter(to, from, next) {
//         if (store.state.showWelcome) {
//           localStorage.setItem('octo/welcome/v1', 'done')
//           store.dispatch(SET_SHOW_WELCOME, false)
//         }

//         next()
//       },
//     },
//     {
//       path: '/',
//       name: 'editor',
//       component: () => import('/src/views/Dashboard.vue'),
//       children: [
//         // editor views
//         {
//           path: '',
//           meta: { track: true },
//           beforeEnter(to, from, next) {
//             if (globalConfig.supportsFirebase && store.state.showWelcome) {
//               next({ name: 'home' })
//             } else {
//               next({ name: 'docs-new' })
//             }
//           },
//         },
//         {
//           path: 'account',
//           name: 'account',
//           meta: { title: 'My Account', track: true },
//           component: () => import('/components/Account.vue'),
//         },
//         {
//           path: 'docs',
//           name: 'docs',
//           meta: { title: 'My Docs', track: true },
//           component: () => import('/src/views/Documents.vue'),
//         },
//         {
//           path: 'docs/new',
//           name: 'docs-new',
//           meta: { track: true },
//           component: () => import('/src/views/Editor.vue'),
//           props: true,
//           beforeEnter(to, from, next) {
//             store.dispatch(SET_DOCUMENT, { id: null })

//             if (globalConfig.supportsFirebase && store.state.showWelcome) {
//               localStorage.setItem('octo/welcome/v1', 'done')
//               store.dispatch(SET_SHOW_WELCOME, false)

//               next({ name: 'home' })
//             } else {
//               next()
//             }
//           },
//         },
//         {
//           path: 'docs/f/:filter',
//           name: 'filtered_docs',
//           meta: { title: 'My Docs' },
//           component: () => import('/src/views/Documents.vue'),
//           props: true
//         },
//         {
//           path: 'docs/t/:tag',
//           name: 'tagged_docs',
//           meta: { title: 'My Docs' },
//           component: () => import('/src/views/Documents.vue'),
//           props: true
//         },
//         {
//           path: 'notepad',
//           name: 'notepad',
//           meta: { title: 'Notepad', track: true },
//           component: () => import('/src/views/Daily.vue'),
//           props: true,
//         },
//         {
//           path: 'docs/:id',
//           name: 'doc',
//           component: () => import('/src/views/Editor.vue'),
//           props({ params }) {
//             if (typeof params?.props === 'string') {
//               return {
//                 ...params,
//                 ...JSON.parse(params.props),
//               }
//             }

//             return params
//           },
//           beforeEnter(to, from, next) {
//             store.dispatch(SET_DOCUMENT, { id: to.params.id })
//             next()
//           },
//         },
//         {
//           path: 'docs/:id/meta',
//           name: 'doc_meta',
//           component: () => import('/components/TheRightSidebar.vue'),
//           props: true,
//           beforeEnter(to, from, next) {
//             store.dispatch(SET_DOCUMENT, { id: to.params.id })
//             next()
//           },
//         },
//         {
//           path: 'public/:id',
//           name: 'public_doc',
//           component: () => import('/src/views/Editor.vue'),
//           props: { readonly: true },
//         },
//         {
//           path: 'force-graph',
//           name: 'force-graph',
//           meta: { title: 'Force Graph', track: true },
//           component: () => import('/components/Graph.vue'),
//           props: true,
//         },
//         {
//           path: 'documents',
//           name: 'documents',
//           meta: { track: true },
//           redirect: { name: 'docs' },
//         },
//         {
//           path: 'documents/new',
//           name: 'dashboard',
//           meta: { track: true },
//           redirect: { name: 'docs-new' },

//         },
//         {
//           path: 'documents/export',
//           name: 'export',
//           meta: { title: 'Export Docs', track: true },
//           component: () => import('/components/Exporter.vue'),
//         },
//         {
//           path: 'documents/import',
//           name: 'import',
//           meta: { title: 'Import Docs', track: true },
//           component: () => import('/components/Importer.vue'),
//         },
//         // document filters
//         {
//           path: 'documents/recent',
//           name: 'recent',
//           meta: { track: true },
//           redirect: { name: 'docs' },
//         },
//         {
//           // deprecated
//           path: 'documents/actionable',
//           meta: { track: true },
//           redirect: { path: '/docs/f/tasks' },
//         },
//         {
//           path: 'documents/discarded',
//           name: 'discarded',
//           meta: { track: true },
//           redirect: { path: '/docs/f/discarded' },
//         },
//         {
//           path: 'documents/tasks',
//           name: 'tasks',
//           meta: { track: true },
//           redirect: { path: '/docs/f/tasks' },
//         },
//         {
//           path: 'documents/untagged',
//           name: 'untagged',
//           meta: { track: true },
//           redirect: { path: '/docs/f/untagged' },
//         },
//         // daily
//         {
//           path: 'documents/daily',
//           name: 'daily',
//           meta: { track: true },
//           redirect: { name: 'notepad' },
//         },
//         {
//           path: 'documents/:id',
//           name: 'document',
//           redirect: { name: 'doc' },
//         },
//         {
//           path: 'documents/:id/meta',
//           name: 'document-meta',
//           redirect: { name: 'doc_meta' },
//         },
//         {
//           path: 'example',
//           name: 'example',
//           meta: { title: 'Example', track: true },
//           component: () => import('/src/views/Example.vue'),
//           props: { url: '/example.md' },
//         },
//         {
//           path: 'file-editor/:id',
//           name: 'file_editor',
//           meta: { title: 'File Editor' },
//           component: () => import('/src/views/FileEditor.vue'),
//           props: true,
//         },
//         // quick action
//         {
//           path: 'quick-action',
//           name: 'quick_action',
//           meta: { title: 'Quick Action', track: true },
//           component: () => import('/components/QuickAction.vue'),
//         },
//         // menu
//         {
//           path: 'menu',
//           name: 'menu',
//           meta: { track: true },
//           component: () => import('/components/TheLeftSidebar.vue'),
//         },
//         // open (and load) a shared document
//         {
//           path: 'shared/:id',
//           name: 'shared',
//           redirect: { name: 'public_doc' },
//         },
//         // context switcher
//         {
//           path: 'context',
//           name: 'context',
//           meta: { track: true },
//           redirect: { name: 'contexts' },
//         },
//         {
//           path: 'contexts',
//           name: 'contexts',
//           meta: { title: 'Context Switching', track: true },
//           component: () => import('/components/Context.vue'),
//         },
//         // tags
//         {
//           path: 'tags/:tag',
//           name: 'tag',
//           redirect: { name: 'tagged_docs' },
//         },
//         {
//           path: 'tags',
//           name: 'tags',
//           meta: { title: 'Tags', track: true },
//           component: () => import('/components/TagList.vue'),
//           props: true,
//         },
//         // settings
//         {
//           path: 'settings',
//           name: 'settings',
//           meta: { title: 'App Settings', track: true },
//           component: () => import('/components/TheSettings.vue'),
//         },
//         // graph view
//         {
//           path: 'graph',
//           name: 'graph',
//           meta: { track: true },
//           redirect: { name: 'force-graph' }
//         },
//         // privacy & terms
//         {
//           path: 'privacy-policy',
//           name: 'privacy_policy',
//           meta: { title: 'Privacy Policy', track: true },
//           component: () => import('/components/Privacy.vue'),
//         },
//         {
//           path: 'terms-and-conditions',
//           name: 'terms_and_conditions',
//           meta: { title: 'Terms & Conditions', track: true },
//           component: () => import('/components/Terms.vue'),
//         },
//       ],
//     },
//   ],
// })

// router.beforeEach((to) => {
//   if (to.meta.title) setTitle(to.meta.title)
//   if (to.meta.track && process.browser) window.fathom?.trackPageview()

//   return true
// })

export const open = (to) => {
  if (to.params?.props) {
    to.params.props = JSON.stringify(to.params.props)
  }

  router.push(to)
}
