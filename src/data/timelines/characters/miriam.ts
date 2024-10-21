import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const miriam: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaStart: true,
  },
  start: getDate(-1604),
  end: getDate(-1474, 4),
  title: 'Miriam',
  content: 'Miriam',
  id: 'miriam',
  group: charactersGroup,
  notes: 'Estimated age of 130 based on the fact they died in the order they were born within a year',
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-1604),
      content: 'Estimated birth date based on age at death',
    },
    {
      start: getDate(-1474, 4),
      content: 'Died at circa 130 years old at Kadesh<br><b>Numbers 20:1</b>',
    },
  ],
}
