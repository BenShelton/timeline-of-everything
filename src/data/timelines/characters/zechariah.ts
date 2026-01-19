import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const zechariah: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaStart: true,
    circaEnd: true,
  },
  start: getDate(-73),
  end: getDate(28),
  title: 'Zechariah',
  content: 'Zechariah',
  id: 'zechariah',
  group: charactersGroup,
  notes: 'Estimated to be 70 when Gabriel appeared to him',
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-73),
      content: 'Estimated birth date',
    },
    {
      start: getDate(-3),
      content: 'Gabriel appears to him<br><b>Luke 1:11</b>',
    },
    {
      start: getDate(28),
      content: 'Estimated death date at 100',
    },
  ],
}
