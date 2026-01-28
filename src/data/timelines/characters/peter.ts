import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const peter: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaStart: true,
    circaEnd: true,
  },
  start: getDate(5),
  end: getDate(95),
  title: 'Peter',
  content: 'Peter',
  id: 'peter',
  group: charactersGroup,
  notes: 'Estimated to be in mid-20s when he became a disciple',
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(5),
      content: 'Estimated birth date',
    },
    {
      start: getDate(44),
      content: 'Arrested by Herod Agrippa I<br><b>Acts 12:3</b>',
    },
    {
      start: getDate(95),
      content: 'Estimated death date at 90, before the death of John<br><b>John 21:22 study note</b>',
    },
  ],
}
