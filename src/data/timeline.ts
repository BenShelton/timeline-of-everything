import { getDate } from '../utils'
import { foreignKingsGroup, significantEventsGroup } from './groups'
import { NestedTimelineItem } from './types'

const timelineFiles = import.meta.globEager('./timelines/*.ts')
const timelines = Object.entries(timelineFiles).map(([k, v]) => {
  const name = k.split('/').pop()?.replace('.ts', '')
  return name ? v[name] : {}
})

export const items: NestedTimelineItem[] = [
  ...timelines,
  {
    start: getDate(-2370),
    end: getDate(-2369),
    title: 'Flood',
    content: 'Flood',
    type: 'box',
    group: significantEventsGroup
  },
  {
    start: getDate(-624),
    end: getDate(-582),
    title: 'Nebuchadnezzar',
    content: 'Nebuchadnezzar',
    // id: 'nebuchadnezzar',
    group: foreignKingsGroup
  }
]
