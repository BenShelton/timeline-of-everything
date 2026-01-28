import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const mary2: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaStart: true,
    circaEnd: true,
  },
  start: getDate(5),
  end: getDate(105),
  title: 'Mary Magdalene',
  content: 'Mary Magdalene',
  id: 'maryMagdalene',
  group: charactersGroup,
  notes: 'Estimated to be around 30 when with Jesus',
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(5),
      content: 'Estimated birth date',
    },
    {
      start: getDate(33, 4),
      content: 'Brought spices to Jesus\' tomb<br><b>Matthew 28:1</b>',
    },
    {
      start: getDate(105),
      content: 'Estimated death date at 100',
    },
  ],
}
