import { getDate } from '@/utils'
import { worldPowersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const leagueOfNations: NestedTimelineItem = {
  displayOptions: {
    complete: false,
  },
  start: getDate(1920, 1),
  end: getDate(1945, 10, 24),
  title: 'League of Nations',
  content: 'League of Nations',
  id: 'leagueOfNations',
  group: worldPowersGroup,
  timeline: [
    {
      start: getDate(1920, 1),
      content: 'Established',
    },
    {
      start: getDate(1945, 10, 24),
      content: 'Replaced by United Nations',
    },
  ],
}
