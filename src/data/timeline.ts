import { characters, events } from '@/data/timelines'
import { getDate } from '@/utils'
import { foreignKingsGroup } from './groups'
import { NestedTimelineItem } from './types'

export const items: NestedTimelineItem[] = [
  ...characters,
  ...events,
  {
    start: getDate(-624),
    end: getDate(-582),
    title: 'Nebuchadnezzar',
    content: 'Nebuchadnezzar',
    // id: 'nebuchadnezzar',
    group: foreignKingsGroup
  }
]
