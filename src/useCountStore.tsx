import { useSyncExternalStore } from 'react'
import { countStore } from './countStore'

export const useCountStore = () => {
  const count = useSyncExternalStore(
    countStore.subscribe,
    countStore.getSnapshot,
    countStore.getServerSnapshot,
  )

  return {
    count,
    add: countStore.add,
    subtract: countStore.subtract,
  }
}
