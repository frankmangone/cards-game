/* eslint-disable react/function-component-definition */
import React from 'react'

interface ShowProps<T> {
  when: T | undefined | null | false
  children: JSX.Element | JSX.Element[]
  fallback?: JSX.Element
}

/**
 * Show
 *
 * Utility component that only shows the children when `when` is truthy.
 * Also takes a fallback component in case `when` is falsy.
 *
 * @param {Object} props
 * */
function Show<T>(props: ShowProps<T>): JSX.Element {
  const { when, children, fallback } = props
  return (
    <>
      {!!when && children}
      {!when && fallback}
    </>
  )
}

export default Show
