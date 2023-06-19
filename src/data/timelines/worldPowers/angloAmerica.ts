import { getDate } from '@/utils'
import { worldPowersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const angloAmerica: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaEnd: true,
  },
  start: getDate(1914),
  end: getDate(2050),
  title: 'Anglo-America',
  content: 'Anglo-America',
  id: 'angloAmerica',
  group: worldPowersGroup,
  notes: 'Iron & clay feet of image prophesied by Daniel',
  timeline: [
    {
      start: getDate(1914),
      content: 'Anglo-America',
    },
  ],
}
