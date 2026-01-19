import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const elizabeth: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaStart: true,
    circaEnd: true,
  },
  start: getDate(-73),
  end: getDate(28),
  title: 'Elizabeth',
  content: 'Elizabeth',
  id: 'elizabeth',
  group: charactersGroup,
  notes: 'Estimated to be 70 when Gabriel appeared to Zechariah',
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-73),
      content: 'Estimated birth date',
    },
    {
      start: getDate(-3),
      content: 'Gabriel appears to Zechariah<br><b>Luke 1:11</b>',
    },
    {
      start: getDate(28),
      content: 'Estimated death date at 100',
    },
  ],
}
