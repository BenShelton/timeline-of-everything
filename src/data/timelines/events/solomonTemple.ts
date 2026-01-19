import { getDate } from '@/utils'
import { significantEventsGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const solomonTemple: NestedTimelineItem = {
  id: 'solomonTemple',
  start: getDate(-1034, 4),
  end: getDate(-1027, 10),
  title: "Building of Solomon's Temple",
  content: "Building of Solomon's Temple",
  group: significantEventsGroup,
  type: 'box',
  timeline: [
    {
      start: getDate(-1034, 4),
      content: 'Construction starts in month of Ziv<br><b>1 Kings 6:1/b>',
    },
    {
      start: getDate(-1027, 10),
      content: 'Construction completed in month of Bul<br><b>1 Kings 6:38</b>',
    },
  ],
}
