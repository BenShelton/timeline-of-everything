import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const barnabas: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaStart: true,
    circaEnd: true,
  },
  start: getDate(-5),
  end: getDate(95),
  title: 'Barnabas',
  content: 'Barnabas',
  id: 'barnabas',
  group: charactersGroup,
  notes: 'Estimated to be slightly older than Paul',
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-5),
      content: 'Estimated birth date',
    },
    {
      start: getDate(55),
      content: 'Mentioned in Paul\'s letter to the Corinthians<br><b>1 Corinthians 9:6</b>',
    },
    {
      start: getDate(61),
      content: 'Indirectly mentioned in Paul\'s letter to the Colossians<br><b>Colossians 4:10</b>',
    },
    {
      start: getDate(95),
      content: 'Estimated death at 100',
    },
  ],
}
