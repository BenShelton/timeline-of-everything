import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const mark: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaStart: true,
    circaEnd: true,
  },
  start: getDate(15),
  end: getDate(115),
  title: 'Mark',
  content: 'Mark',
  id: 'mark',
  group: charactersGroup,
  notes: 'Estimated to be around 18 when fleeing from Jesus',
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(15),
      content: 'Estimated birth date',
    },
    {
      start: getDate(115),
      content: 'Estimated death at 100',
    },
  ],
}
