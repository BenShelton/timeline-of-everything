import { getDate } from '../utils'
import { foreignKingsGroup } from './groups'
import { daniel } from './timelines/daniel'
import { hannah } from './timelines/hannah'
import { paul } from './timelines/paul'
import { samuel } from './timelines/samuel'
import { stephen } from './timelines/stephen'
import { NestedTimelineItem } from './types'

export const items: NestedTimelineItem[] = [
  daniel,
  stephen,
  paul,
  hannah,
  samuel,
  {
    start: getDate(-624),
    end: getDate(-582),
    title: 'Nebuchadnezzar',
    content: 'Nebuchadnezzar',
    // id: 'nebuchadnezzar',
    group: foreignKingsGroup
  }
]
