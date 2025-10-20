import { getDate } from '@/utils'
import { significantEventsGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const israelDivided: NestedTimelineItem = {
  start: getDate(-997),
  end: getDate(-997),
  title: 'Israel Divided Into Two Kingdoms',
  content: 'Israel Divided Into Two Kingdoms',
  group: significantEventsGroup,
  type: 'box',
  timeline: [
    {
      start: getDate(-997),
      content: 'Israel Divided<br><b>1 Kings 12:19/b>',
    },
  ],
}
