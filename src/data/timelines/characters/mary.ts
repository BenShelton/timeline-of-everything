import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const mary: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaStart: true,
    circaEnd: true,
  },
  start: getDate(-22),
  end: getDate(79),
  title: 'Mary',
  content: 'Mary',
  id: 'mary',
  group: charactersGroup,
  notes: 'Estimated to be 20 when she gave birth to Jesus',
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-22),
      content: 'Estimated birth date',
    },
    {
      start: getDate(-2),
      content: 'Gives birth to Jesus<br><b>Luke 1:7</b>',
    },
    {
      start: getDate(79),
      content: 'Estimated death date at 100',
    },
  ],
}
