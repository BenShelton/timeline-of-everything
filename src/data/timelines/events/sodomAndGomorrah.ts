import { getDate } from '@/utils'
import { significantEventsGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const sodomAndGomorrah: NestedTimelineItem = {
  id: 'sodomAndGomorrah',
  displayOptions: {
    circaStart: true,
  },
  start: getDate(-1919),
  end: getDate(-1919),
  title: 'Sodom And Gomorrah',
  content: 'Sodom And Gomorrah',
  type: 'box',
  group: significantEventsGroup,
  timeline: [
    {
      start: getDate(-1919),
      content: 'Destroyed<br><b>Genesis 19:24</b>',
    },
  ],
}
