import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const mary3: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaStart: true,
    circaEnd: true,
  },
  start: getDate(-15),
  end: getDate(85),
  title: 'Mary (Lazarus\' Sister)',
  content: 'Mary (Lazarus\' Sister)',
  id: 'maryLazarusSister',
  group: charactersGroup,
  notes: 'Estimated to be around 45 when with Jesus',
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-15),
      content: 'Estimated birth date',
    },
    {
      start: getDate(85),
      content: 'Estimated death date at 100',
    },
  ],
}
