import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const mephibosheth: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaStart: true,
    circaEnd: true,
  },
  start: getDate(-1083),
  end: getDate(-1000),
  title: 'Mephibosheth',
  content: 'Mephibosheth',
  id: 'mephibosheth',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-1083),
      content: 'Estimated birth date',
    },
    {
      start: getDate(-1000),
      content: 'Estimated death date at 83',
    },
  ],
}
