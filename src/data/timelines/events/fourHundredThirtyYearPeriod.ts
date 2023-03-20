import { getDate } from '@/utils'
import { significantEventsGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const fourHundredThirtyYearPeriod: NestedTimelineItem = {
  start: getDate(-1943, 3),
  end: getDate(-1513, 3),
  title: '430 Year Period',
  content: '430 Year Period',
  group: significantEventsGroup,
  notes: 'Period of temporary residence',
  timeline: [
    {
      start: getDate(-1943),
      content: 'Starts with Abraham crossing the Euphrates on Nisan 14<br><b>Genesis 12:4</b>',
    },
    {
      start: getDate(-1943),
      end: getDate(-1728),
      content: 'First half spent in Canaan',
    },
    {
      start: getDate(-1728),
      end: getDate(-1513),
      content: 'Second half spent in Egypt',
    },
    {
      start: getDate(-1513),
      content: 'Ends with the Exodus from Egypt on Nisan 14<br><b>Exodus 12:40,41</b>',
    },
  ],
}
