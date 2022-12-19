import { getDate } from '@/utils'
import { significantEventsGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const fourHundredYearAffliction: NestedTimelineItem = {
  start: getDate(-1913),
  end: getDate(-1513),
  title: '400 Year Affliction',
  content: '400 Year Affliction',
  group: significantEventsGroup,
  notes: 'Time of persecution starting with Ishmael taunting Isaac, ending with the Exodus. See Genesis 15:13 & Acts 7:6',
  timeline: [
    {
      start: getDate(-1913),
      content: 'Starts with Ishmael taunting Isaac<br><b>Genesis 21:8-13</b>',
    },
    {
      start: getDate(-1513),
      content: 'Ends with the Exodus from Egypt',
    },
  ],
}
