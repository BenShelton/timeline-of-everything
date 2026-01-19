import { getDate } from '@/utils'
import { significantEventsGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const towerOfBabel: NestedTimelineItem = {
  id: 'towerOfBabel',
  start: getDate(-2269),
  end: getDate(-2269),
  title: 'Tower Of Babel',
  content: 'Tower Of Babel',
  type: 'box',
  group: significantEventsGroup,
}
