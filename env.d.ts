/// <reference types="cypress" />
/// <reference types="vite/client" />

import { type Instance } from 'ink-mde'
import { type DefineComponent } from 'vue'

declare global {
  var isNuxt: boolean

  namespace Cypress {
    interface Chainable {
      clearIDB: () => Cypress.Promise,
      waitForHook: (name: string) => Cypress.Promise,
    }
  }

  interface Window {
    fathom?: {
      trackGoal: (id: string, value: number) => void,
      trackPageview: (options?: { url: string }) => void,
    },
    inkMde: Instance,
  }
}

declare module '*.vue' {
  const component: DefineComponent<{}, {}, any>

  export default component
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $store: any,
  }
}

export {}
