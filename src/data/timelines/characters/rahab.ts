import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const rahab: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaStart: true,
    circaEnd: true,
  },
  start: getDate(-1500),
  end: getDate(-1400),
  title: 'Rahab',
  content: 'Rahab',
  id: 'rahab',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-1500),
      content: 'Estimated birth date',
    },
    {
      start: getDate(-1400),
      content: 'Estimated death date at 110',
    },
  ],
}
