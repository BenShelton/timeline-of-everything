import { getDate } from '@/utils'
import { worldPowersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const unitedNations: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaEnd: true,
  },
  start: getDate(1945, 10, 24),
  end: getDate(2050),
  title: 'United Nations',
  content: 'United Nations',
  id: 'unitedNations',
  group: worldPowersGroup,
  timeline: [
    {
      start: getDate(1945, 10, 24),
      content: 'Established, replaces League of Nations',
    },
  ],
}
