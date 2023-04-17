import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const jesse: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaStart: true,
    circaEnd: true,
  },
  start: getDate(-1107),
  end: getDate(-1107),
  title: 'Jesse',
  content: 'Jesse',
  id: 'jesse',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-1107),
      content: 'Becomes father to David<br><b>1 Samuel 16:1</b>',
    },
  ],
}
