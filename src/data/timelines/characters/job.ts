import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const job: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaStart: true,
    circaEnd: true,
  },
  start: getDate(-1653),
  end: getDate(-1473),
  title: 'Job',
  content: 'Job',
  id: 'job',
  group: charactersGroup,
  notes: 'Estimated to be about 40 years old when trials started',
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-1653),
      content: 'Estimated birth date',
    },
    {
      start: getDate(-1613),
      content: 'Trials start about this time, lasting a few months, no more than a year<br><b>Job 2:1-7</b>',
    },
    {
      start: getDate(-1473),
      content: 'Dies around this time at an unknown age<br><b>Job 42:16, 17</b>',
    },
  ],
}
