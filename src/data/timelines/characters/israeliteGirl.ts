import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const israeliteGirl: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaStart: true,
    circaEnd: true,
  },
  start: getDate(-925),
  end: getDate(-825),
  title: 'Little Israelite Girl',
  content: 'Little Israelite Girl',
  id: 'israeliteGirl',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-925),
      content: 'Estimated birth date',
    },
    {
      start: getDate(-825),
      content: 'Death date at approximately 100',
    },
  ],
}
