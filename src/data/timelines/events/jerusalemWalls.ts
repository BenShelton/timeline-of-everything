import { getDate } from '@/utils'
import { significantEventsGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const jerusalemWalls: NestedTimelineItem = {
  start: getDate(-455, 11),
  end: getDate(-455, 11),
  title: "Jerusalem's Walls Rebuilt",
  content: "Jerusalem's Walls Rebuilt",
  group: significantEventsGroup,
  type: 'box',
  timeline: [
    {
      start: getDate(-455, 11),
      content: 'Rebuilding finishes in month of Chislev<br><b>Nehemiah 1:1</b>',
    },
  ],
}
