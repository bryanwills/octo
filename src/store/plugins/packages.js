import PackageManager from '#root/src/packages/manager'

import {
  ADD_DOCUMENT,
  DISCARD_DOCUMENT,
  EDIT_DOCUMENT,
  RESTORE_DOCUMENT,
  TOUCH_DOCUMENT,
} from '#root/src/store/actions'

export default (store) => {
  store.subscribe(({ type, payload: { id } }, state) => {
    switch (type) {
      case ADD_DOCUMENT:
      case DISCARD_DOCUMENT:
      case EDIT_DOCUMENT:
      case RESTORE_DOCUMENT:
      case TOUCH_DOCUMENT:
        // find the affected document when possible
        const doc = state.documents.all.find(d => d.id === id)

        // emit allowed events
        PackageManager.emit(type, { doc })

        break
      default:
        break
    }
  })
}
