import { characters, events, foreignKings, worldPowers } from '@/data/timelines'
import { NestedTimelineItem } from './types'

export const items: NestedTimelineItem[] = [
  ...characters,
  ...events,
  ...foreignKings,
  ...worldPowers,
]
