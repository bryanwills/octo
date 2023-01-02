import { createRouter, createWebHistory } from 'vue-router'
import { store } from '/src/store'
import {
  SET_DOCUMENT,
  SET_SHOW_WELCOME,
} from '/src/store/actions.js'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      name: 'home',
      meta: { track: true },
      component: () => import('/pages/home.vue'),
    },
    {
      path: '/',
      name: 'root',
      meta: { track: true },
      beforeEnter(to, from, next) {
        if (store.state.showWelcome) {
          store.commit(SET_SHOW_WELCOME, false)

          next({ path: '/home' })
        } else {
          next({ path: '/docs/new' })
        }
      },
    },
    {
      // skipped (special case)
      path: '/_routes',
      component: () => import('/pages/_routes.vue'),
    },
    {
      // done
      path: '/account',
      meta: { title: 'My Account', track: true },
      component: () => import('/pages/account.vue'),
    },
    {
      // done
      path: '/docs',
      meta: { title: 'My Docs', track: true },
      component: () => import('/pages/docs/index.vue'),
    },
    {
      // done
      path: '/docs/f/:filter',
      meta: { title: 'My Docs' },
      component: () => import('/pages/docs/f/[filter].vue'),
      props: true,
    },
    {
      // done
      path: '/docs/t/:tag(.*)',
      meta: { title: 'My Docs' },
      component: () => import('/pages/docs/t/[...tag].vue'),
      props: true,
    },
    {
      // skipped (special case)
      // Todo: Create separate components for standalone page and panel.
      path: '/docs/:docId/meta',
      name: 'docs-docId-meta',
      component: () => import('/pages/docs/[docId]/meta.vue'),
      props: true,
    },
    {
      // skipped (special case)
      path: '/docs/export',
      meta: { title: 'Export Docs', track: true },
      component: () => import('/pages/docs/export.vue'),
    },
    {
      // skipped (special case)
      path: '/docs/import',
      meta: { title: 'Import Docs', track: true },
      component: () => import('/pages/docs/import.vue'),
    },
    {
      // done
      path: '/quick-action',
      meta: { title: 'Quick Action', track: true },
      component: () => import('/pages/quick-action.vue'),
    },
    // menu
    {
      // skipped (special case)
      // Todo: Create separate components for standalone page and panel.
      path: '/menu',
      meta: { track: true },
      component: () => import('/pages/menu.vue'),
    },
    {
      // done
      path: '/workspaces',
      meta: { title: 'Workspaces', track: true },
      component: () => import('/pages/workspaces.vue'),
    },
    {
      // done
      path: '/tags',
      meta: { title: 'Tags', track: true },
      component: () => import('/pages/tags.vue'),
      props: true,
    },
    // settings
    {
      // done
      path: '/settings',
      meta: { title: 'App Settings', track: true },
      component: () => import('/pages/settings.vue'),
    },
    // privacy & terms
    {
      // done
      path: '/privacy-policy',
      meta: { title: 'Privacy Policy', track: true },
      component: () => import('/pages/privacy-policy.vue'),
    },
    {
      // done
      path: '/terms-and-conditions',
      meta: { title: 'Terms & Conditions', track: true },
      component: () => import('/pages/terms-and-conditions.vue'),
    },
    {
      path: '/docs/new',
      meta: { track: true },
      component: () => import('/pages/docs/[docId]/index.vue'),
      props: true,
      beforeEnter(to, from, next) {
        if (store.state.showWelcome) {
          store.commit(SET_SHOW_WELCOME, false)

          next({ path: '/home' })
        } else {
          next()
        }
      },
    },
    {
      path: '/docs/:docId',
      name: 'docs-docId',
      component: () => import('/pages/docs/[docId]/index.vue'),
      props({ params }) {
        if (typeof params?.props === 'string') {
          return {
            ...params,
            ...JSON.parse(params.props),
          }
        }

        return params
      },
    },
    {
      path: '/notepad',
      meta: { title: 'Notepad', track: true },
      component: () => import('/pages/notepad.vue'),
      props: true,
    },
    {
      path: '/public/:docId',
      component: () => import('/pages/public/[docId].vue'),
      props: { ro: true },
    },
    {
      path: '/force-graph',
      meta: { title: 'Force Graph', track: true },
      component: () => import('/pages/force-graph.vue'),
      props: true,
    },
    {
      path: '/example',
      meta: { title: 'Example', track: true },
      component: () => import('/pages/example.vue'),
      props: { url: '/example.md' },
    },
    {
      path: '/file-editor/:file',
      meta: { title: 'File Editor' },
      component: () => import('/pages/file-editor/[file].vue'),
      props: true,
    },
    // Deprecated routes.
    {
      path: '/documents',
      redirect: { path: '/docs' },
    },
    {
      path: '/documents/new',
      redirect: { path: '/docs/new' },
    },
    {
      path: '/documents/export',
      redirect: { path: '/docs/export' },
    },
    {
      path: '/documents/import',
      redirect: { path: '/docs/import' },
    },
    {
      path: '/documents/recent',
      redirect: { path: '/docs' },
    },
    {
      path: '/documents/actionable',
      redirect: { path: '/docs/f/tasks' },
    },
    {
      path: '/documents/discarded',
      redirect: { path: '/docs/f/discarded' },
    },
    {
      path: '/documents/tasks',
      redirect: { path: '/docs/f/tasks' },
    },
    {
      path: '/documents/untagged',
      redirect: { path: '/docs/f/untagged' },
    },
    {
      path: '/documents/daily',
      redirect: { path: '/notepad' },
    },
    {
      path: '/documents/:id',
      redirect: (route) => ({ path: `/docs/${route.params.id}` }),
    },
    {
      path: '/documents/:id/meta',
      redirect: (route) => ({ path: `/docs/${route.params.id}/meta` }),
    },
    {
      path: '/shared/:id',
      redirect: (route) => ({ path: `/public/${route.params.id}` }),
    },
    {
      path: '/context',
      redirect: { path: '/workspaces' },
    },
    {
      path: '/contexts',
      redirect: { path: '/workspaces' },
    },
    {
      path: '/tags/:tag',
      redirect: (route) => ({ path: `/docs/t/${route.params.tag}` }),
    },
    {
      path: '/graph',
      redirect: { path: '/force-graph' }
    },
  ],
})

router.beforeEach((to) => {
  if (to.meta.title) useHead({ title: to.meta.title })
  if (to.meta.track) window.fathom?.trackPageview()
  if (to.name === 'docs-docId') store.dispatch(SET_DOCUMENT, { id: to.params.docId })
  if (to.path === '/docs/new') store.dispatch(SET_DOCUMENT, { id: null })

  return true
})

export const open = (to) => {
  const localRouter = useRouter() || router

  if (to.params?.props) {
    to.params.props = JSON.stringify(to.params.props)
  }

  localRouter.push(to)
}
