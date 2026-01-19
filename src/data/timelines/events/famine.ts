import { getDate } from '@/utils'
import { significantEventsGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const famine: NestedTimelineItem = {
  id: 'famine',
  start: getDate(-1730),
  end: getDate(-1723),
  title: 'Famine in Egypt',
  content: 'Famine in Egypt',
  group: significantEventsGroup,
  timeline: [
    {
      start: getDate(-1730),
      content: 'Famine begins<br><b>Genesis 41:54</b>',
    },
    {
      start: getDate(-1723),
      content: 'Famine begins<br><b>Genesis 41:54</b>',
    },
  ],
}
