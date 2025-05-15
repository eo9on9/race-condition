'use client'

import { useEffect } from 'react'
import { countStore } from './countStore'
import { useCountStore } from './useCountStore'

export const RaceConditionPage = () => {
  const { count, add, subtract } = useCountStore()

  console.log('===', count)

  useEffect(() => {
    ;(window as any).add = () => {
      countStore.add()
      setTimeout(() => {
        countStore.add()
      }, 10)
      setTimeout(() => {
        countStore.add()
      }, 20)
      setTimeout(() => {
        countStore.add()
      }, 30)
    }
  }, [])

  return (
    <div>
      <h3>{count}</h3>
      <br />
      <button
        onClick={() => {
          add()
          setTimeout(() => {
            add()
          }, 10)
          setTimeout(() => {
            add()
          }, 20)
          setTimeout(() => {
            add()
          }, 30)
        }}
      >
        AAA
      </button>
      <br />
      <button
        onClick={() => {
          subtract()
          setTimeout(() => {
            subtract()
          }, 10)
          setTimeout(() => {
            subtract()
          }, 20)
          setTimeout(() => {
            subtract()
          }, 30)
        }}
      >
        BBB
      </button>
    </div>
  )
}
