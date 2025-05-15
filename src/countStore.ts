import { unstable_batchedUpdates } from 'react-dom'

const INITIAL_COUNT = 0

class CountStore {
  _count = INITIAL_COUNT

  _listeners: VoidFunction[] = []

  _emit = () => {
    unstable_batchedUpdates(() => {
      for (const listener of this._listeners) listener()
    })
  }

  reset = () => {
    this._count = INITIAL_COUNT

    this._emit()
  }

  add = () => {
    this._count += 1

    this._emit()
  }

  subtract = () => {
    this._count -= 1

    this._emit()
  }

  subscribe = (listener: VoidFunction) => {
    this._listeners = [...this._listeners, listener]

    return () => {
      this._listeners = this._listeners.filter(l => l !== listener)
    }
  }

  getSnapshot = () => {
    return this._count
  }

  getServerSnapshot = () => {
    return INITIAL_COUNT
  }
}

export const countStore = new CountStore()
