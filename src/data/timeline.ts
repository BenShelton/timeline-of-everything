import { books, characters, events, foreignKings, worldPowers } from '@/data/timelines'
import { NestedTimelineItem } from './types'

export const items: NestedTimelineItem[] = [
  ...books,
  ...characters,
  ...events,
  ...foreignKings,
  ...worldPowers,
]
