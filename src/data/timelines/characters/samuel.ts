import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

const birthDate = -1179

export const samuel: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaEnd: true,
  },
  start: getDate(birthDate),
  // TODO: Confirm death
  end: getDate(-1078),
  title: 'Samuel',
  content: 'Samuel',
  id: 'samuel',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(birthDate + 3),
      content: 'Given to Jehovah<br><b>1 Samuel 1:24-28</b>',
    },
    {
      start: getDate(birthDate + 12),
      content: 'Starts ministering<br><b>1 Samuel 2:18</b>',
    },
  ],
}
