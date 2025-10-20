import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const esther: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaStart: true,
    circaEnd: true,
  },
  start: getDate(-515),
  end: getDate(-415),
  title: 'Esther',
  content: 'Esther',
  id: 'esther',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-515),
      content: 'Estimated birth date',
    },
    {
      start: getDate(-415),
      content: 'Death date at approximately 100',
    },
  ],
}
