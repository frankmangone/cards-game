import React from 'react'
import BaseIcon from './BaseIcon'

/* Icon raw xmls (as functions with param color) */
import cardsRemaining from '@lib/icons/cardsRemaining'
import timer from '@lib/icons/timer'

interface IconProps {
  size?: number
  color?: string
}

/**
 * Custom icons
 *
 * Remember to add prop aspectRatio (width / height) if it's different than 1
 *  */

export const CardsRemainingIcon: React.VFC<IconProps> = (props): JSX.Element => (
  <BaseIcon xml={cardsRemaining} {...props} />
)

export const TimerIcon: React.VFC<IconProps> = (props): JSX.Element => (
  <BaseIcon xml={timer} {...props} />
)
